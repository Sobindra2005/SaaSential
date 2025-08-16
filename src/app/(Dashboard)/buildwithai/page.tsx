'use client';

import { useState, useRef, useEffect, FormEvent, RefObject } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/utils/api';
import { FaCode, FaLightbulb, FaSearch } from 'react-icons/fa';
import { useOutsideClick } from '@/components/hooks';
import { IMessage } from '@/models/message';
import { useSession } from 'next-auth/react';
import SendBox, { CreateMsgComponent } from './createMsg';
import { Notification } from '@/components/Common/notification';
import ReactMarkdown from 'react-markdown';
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/animations/loading.json";
import textLoading from "@/assets/animations/textLoading.json";
import { useChatContext } from '../contextProvider';
import remarkGfm from 'remark-gfm';

interface response {
    _id: string;
    message: string;
    senderId: string;
    chatId: string;
    createdAt: string;
    updatedAt: string;
}

const fetchMessages = async (chatId: string) => {
    const response = await api.get(`/api/chat/message?chatId=${chatId}`);
    return response.data;
}

const fetchChatHistory = async () => {
    const response = await api.get('/api/chat');
    return response.data;
}

const createChatApi = async (chatHeadClue: string) => {
    const response = await api.post('/api/chat', { chatHeadClue });
    return response.data as response;
}

const createMsgApi = async ({ message, senderId, chatId }: { message: string; senderId: string; chatId: string; }) => {
    const response = await api.post('/api/chat/message', { message, senderId, chatId });
    return response.data as response[];
}

const messgaeAi = async (
    { chatId, prompt, tool }: { chatId: string; prompt: string; tool: string },
    onStream?: (chunk: string) => void
) => {
    const response = await fetch('/api/chat/asktoai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatId, prompt, tool }),
    });

    if (!response.body) throw new Error('No response body');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let responseText = '';
    let buffer = '';
    const markdownContext = {
        inCodeBlock: false,
        inTable: false,
        inList: false,
        codeLanguage: ''
    };

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // Process all complete lines
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Save incomplete line for next chunk

        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const text = line.replace('data: ', '');

                // Update markdown context based on the content
                if (text.includes('```')) {
                    markdownContext.inCodeBlock = !markdownContext.inCodeBlock;
                    if (markdownContext.inCodeBlock) {
                        // Try to extract language if this is an opening block
                        const langMatch = text.match(/```(\w+)/);
                        markdownContext.codeLanguage = langMatch ? langMatch[1] : '';
                    }
                }
                if (text.includes('|')) markdownContext.inTable = true;
                if (text.match(/^[*-] /) || text.match(/^\d+\. /)) markdownContext.inList = true;

                responseText += text;
                if (onStream) onStream(responseText);
            }
        }
    }

    // Process any remaining buffer
    if (buffer.startsWith('data: ')) {
        const text = buffer.replace('data: ', '');
        responseText += text;
        if (onStream) onStream(responseText);
    }

    return responseText;
};

const tools = [{ name: 'Research', icon: <FaSearch size={20} /> }, { name: 'Brainstorm', icon: <FaLightbulb size={20} /> }, { name: 'Develop', icon: <FaCode size={20} /> }];

export default function BuildWithAI() {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [defaultTool, setDefaultTool] = useState('Develop');
    const [showList, setShowList] = useState(false);
    const [notification, setNotification] = useState({ visible: false, message: '', type: 'success' });
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [streamingMessage, setStreamingMessage] = useState('');
    const [displayedMessage, setDisplayedMessage] = useState('');
    const { data } = useSession();
    const userId = data?.user.id;
    const { newChat, changeContext, currentChatId, changeCurrentChatId } = useChatContext();
    const queryClient = useQueryClient();

    const AiReponse = useMutation({
        mutationFn: (params: { chatId: string; prompt: string; tool: string }) =>
            messgaeAi(params, (text) => setStreamingMessage(text)),
        onSuccess: () => {
            setStreamingMessage('');
            queryClient.invalidateQueries({ queryKey: ['messages'] });
            setIsLoading(false);
        },
        onError: (error) => {
            setStreamingMessage('');
            console.error("Error creating chat:", error);
        }
    });
    const createMsg = useMutation({
        mutationFn: createMsgApi,
        onSuccess: (data: response[]) => {
            setInput('');
            queryClient.invalidateQueries({ queryKey: ['messages'] });
            setTimeout(() => {
                setIsLoading(true);
            }, 1000);
            console.log("Message sent successfully:", data);
            AiReponse.mutate({ chatId: currentChatId as string, prompt: data[0].message, tool: defaultTool });
        },
        onError: (error) => {
            console.error("Error creating message:", error);
        }
    })

    const createChat = useMutation({
        mutationFn: createChatApi,
        onSuccess: (data: response) => {
            setNotification({
                visible: true,
                message: 'new chat created successfully',
                type: 'success'
            });
            createMsg.mutate({
                message: input,
                senderId: userId as string,
                chatId: data?._id,
            })
            changeContext(false);
            changeCurrentChatId(data?._id);
            queryClient.invalidateQueries({ queryKey: ['chatHistory'] });
        },
        onError: () => {
            setNotification({
                visible: true,
                message: 'server error occurred while creating chat',
                type: 'error'
            });
        }
    })

    useOutsideClick(containerRef as RefObject<HTMLElement>, () => {
        if (showList) setShowList(false);
    });

    const handleCreateChat = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        setIsLoading(true);
        createChat.mutate(input.trim());

    };

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        createMsg.mutate({
            message: input,
            senderId: userId as string,
            chatId: currentChatId as string,
        })
    };

    const selectTool = (value: string) => {
        setDefaultTool(value);
        setShowList(false);
    }

    const { data: chatHistory, isLoading: isLoadingChatHistory, isSuccess: isSuccessChatHistory } = useQuery({
        queryKey: ['chatHistory'],
        queryFn: fetchChatHistory,

    })

    const { data: messages, isLoading: isLoadingMessages } = useQuery({
        queryKey: ['messages', currentChatId],
        queryFn: () => fetchMessages(currentChatId as string),
        enabled: (chatHistory as IMessage[])?.length > 0 && !!currentChatId
    })

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, streamingMessage, isLoading]);

    useEffect(() => {
        if (!streamingMessage) {
            setDisplayedMessage('');
            return;
        }

        // Skip if already caught up
        if (displayedMessage === streamingMessage) return;

        let rafId: number;
        let lastTs = performance.now();
        let currentIndex = displayedMessage.length;

        const CHARS_PER_SECOND = 5000; // Increase for faster typing
        const CATCHUP_FACTOR = 0.25;   // How fast to catch up when far behind
        const MAX_CHARS_PER_FRAME = 200; // Safety limit

        // Detect markdown boundaries - add paragraph breaks
        const mdBoundaries = [
            ...streamingMessage.matchAll(/```/g),
            ...streamingMessage.matchAll(/^#{1,6}\s/gm),
            ...streamingMessage.matchAll(/^[*-]\s/gm),
            ...streamingMessage.matchAll(/^\d+\.\s/gm),
            ...streamingMessage.matchAll(/\|.*\|/g),
            ...streamingMessage.matchAll(/\n\n/g),
            ...streamingMessage.matchAll(/[.!?]\s/g),
            ...streamingMessage.matchAll(/^>/gm),
        ]
            .map(match => match.index)
            .filter((idx): idx is number => typeof idx === 'number')
            .sort((a, b) => a - b);

        const animateTyping = (timestamp: number) => {
            const elapsed = timestamp - lastTs;
            lastTs = timestamp;

            // Calculate how many characters to reveal this frame
            const remaining = streamingMessage.length - currentIndex;

            if (remaining <= 0) {
                setDisplayedMessage(streamingMessage);
                return;
            }

            // Add more characters at once when we're further behind
            let charsToAdd = Math.ceil((elapsed / 1000) * CHARS_PER_SECOND) +
                Math.floor(remaining * CATCHUP_FACTOR);

            // Cap to avoid huge jumps
            charsToAdd = Math.min(charsToAdd, MAX_CHARS_PER_FRAME, remaining);

            // Snap to markdown boundaries when possible
            let nextIndex = currentIndex + charsToAdd;

            // Find the nearest boundary, prioritizing sentence/paragraph breaks
            const nearestBoundary = mdBoundaries.find(idx => idx > currentIndex && idx <= nextIndex);
            if (nearestBoundary !== undefined) {
                nextIndex = nearestBoundary;

                // If we're at a sentence ending, add extra characters to include the next few words
                // This makes the text flow more naturally
                if (streamingMessage[nearestBoundary - 1]?.match(/[.!?]/)) {
                    const nextSpace = streamingMessage.indexOf(' ', nearestBoundary + 1);
                    if (nextSpace > 0 && nextSpace <= nextIndex + 15) { // Look ahead up to 15 chars
                        nextIndex = nextSpace;
                    }
                }
            }

            // Update the displayed text
            currentIndex = nextIndex;
            setDisplayedMessage(autoCloseMarkdown(streamingMessage.substring(0, currentIndex)));

            // Continue animation if not done
            if (currentIndex < streamingMessage.length) {
                rafId = requestAnimationFrame(animateTyping);
            }
        };

        rafId = requestAnimationFrame(animateTyping);
        return () => cancelAnimationFrame(rafId);
    }, [streamingMessage, displayedMessage]);
    useEffect(() => {
        if (
            isSuccessChatHistory &&
            (!currentChatId || !(chatHistory as IMessage[])?.some((c: IMessage) => c._id === currentChatId))
        ) {
            changeCurrentChatId((chatHistory as IMessage[])?.[0]?._id as string || null);
        }
    }, [chatHistory, isSuccessChatHistory, currentChatId, changeCurrentChatId]);

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    return (

        <div className="flex flex-col items-center w-full min-h-[70%] bg-primary">
            <div className="fixed top-5 right-5 z-50">
                <Notification
                    type={notification.type}
                    message={notification.message}
                    isVisible={notification.visible}
                    onClose={handleCloseNotification}
                    autoClose={true}
                    autoCloseTime={4000}
                />
            </div>

            <div className="flex-grow overflow-y-auto  w-full   relative right-0  p-6 flex items-center justify-center" id="chat-container">
                {(newChat || (!Array.isArray(messages) || messages.length === 0)) ? (
                    <CreateMsgComponent
                        isLoading={isLoading}
                        defaultTool={defaultTool}
                        showList={showList}
                        input={input}
                        setInput={setInput}
                        selectTool={selectTool}
                        setShowList={setShowList}
                        containerRef={containerRef as RefObject<HTMLDivElement>}
                        onSubmit={handleCreateChat}
                    />
                ) : (
                    <div className="max-w-[70%]  w-full h-full space-y-4 overflow">
                        {(Array.isArray(messages) ? messages : []).map((message: IMessage, index: number) => (
                            <div
                                key={index}
                                className={`flex ${((message.senderId as unknown) as string) === userId ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={` max-w-[80%]  ${((message.senderId as unknown) as string) === userId
                                        ? 'bg-gray-800 text-gray-100 rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                                        : ' text-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                                        } p-4 shadow-sm`}
                                >
                                    <ResponseManager message={message.message as string} />
                                </div>
                            </div>
                        ))}
                        {isLoading && streamingMessage && (
                            <div className="flex justify-start">
                                <div className="max-w-[80%] text-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-sm">
                                    <ResponseManager
                                        message={displayedMessage}
                                      
                                    />
                                </div>
                            </div>
                        )}

                        {isLoading && !streamingMessage && (
                            defaultTool === 'Develop' ?
                                <div className="flex justify-start">
                                    <div className=" w-[30rem] h-[30rem] ">
                                        <Lottie width={200} height={200} animationData={loadingAnimation} loop={true} />
                                    </div>
                                </div>
                                :
                                <div className="flex justify-start">
                                    <div className=" w-[4rem] h-[4rem] ">
                                        <Lottie width={200} height={200} animationData={textLoading} loop={true} />
                                    </div>
                                </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {(!newChat && Array.isArray(messages) && messages.length > 0) && (!isLoadingMessages && !isLoadingChatHistory)
                && (
                    <div className="p-4 flex w-full sticky bottom-0 right-0 justify-center">
                        <SendBox
                            input={input}
                            setInput={setInput}
                            onSubmit={handleSendMessage}
                            isLoading={isLoading}
                            showList={showList}
                            setShowList={setShowList}
                            tools={tools}
                            defaultTool={defaultTool}
                            selectTool={selectTool}
                            containerRef={containerRef as RefObject<HTMLDivElement>}
                        />
                    </div>
                )
            }

        </div>
    );
}

function autoCloseMarkdown(markdown: string): string {
    // Handle code blocks - detect unbalanced backticks
    const codeBlockMatches = markdown.match(/```/g);
    if (codeBlockMatches && codeBlockMatches.length % 2 !== 0) {
        markdown = markdown + '\n```';
    }

    // Ensure proper paragraph breaks
    // Look for sentences that end without proper paragraph separation
    markdown = markdown
        // Add proper paragraph breaks after sentences ending with periods, question marks, or exclamation points
        // followed by a newline but not an empty line
        .replace(/([.!?])\n(?!\n)(?![-*#>]|\d+\.|\s*```|\s*\|)/g, '$1\n\n')
        // Ensure proper spacing before headers
        .replace(/\n(#{1,6}\s)/g, '\n\n$1');

    // Handle tables - check for incomplete tables
    const tableRows = markdown.match(/\|.*\|/g);
    if (tableRows && tableRows.length >= 1) {
        // Check if table header separator row exists
        const headerSeparator = markdown.match(/\|(\s*:?-+:?\s*\|)+/);
        if (!headerSeparator) {
            // Insert a dummy header separator after first row
            const firstRowIndex = markdown.indexOf(tableRows[0]) + tableRows[0].length;
            const columnCount = (tableRows[0].match(/\|/g) || []).length - 1;
            const separator = '\n|' + ' --- |'.repeat(columnCount);
            markdown = markdown.slice(0, firstRowIndex) + separator + markdown.slice(firstRowIndex);
        }
    }

    // Handle incomplete lists (ensure proper spacing)
    markdown = markdown
        // Add space after list items if missing
        .replace(/(\n[*-] .+)(\n[^*-\s\n])/g, '$1\n\n$2')
        // Handle numbered lists - ensure proper spacing after list items
        .replace(/(\n\d+\. .+)(\n[^\d\s\n])/g, '$1\n\n$2')
        // Ensure proper spacing between list items and following paragraphs
        .replace(/(\n[*-] .+\n)(?=[^\s*-])/g, '$1\n');

    // Balance parentheses in links
    const linkMatches = markdown.match(/\[([^\]]+)\]\(/g);
    if (linkMatches) {
        for (const match of linkMatches) {
            const startIndex = markdown.indexOf(match) + match.length;
            const textAfter = markdown.slice(startIndex);
            if (!textAfter.includes(')')) {
                // Add closing parenthesis if missing
                markdown = markdown.slice(0, startIndex) + "url)" + textAfter;
            }
        }
    }

    // Ensure proper spacing after blockquotes
    markdown = markdown.replace(/(\n>[^\n]+)(\n[^>\n])/g, '$1\n\n$2');

    // Check for unclosed HTML-like tags that markdown might use
    const commonTags = ['div', 'span', 'p', 'b', 'i', 'strong', 'em'];
    for (const tag of commonTags) {
        const openPattern = new RegExp(`<${tag}[^>]*>`, 'g');
        const closePattern = new RegExp(`</${tag}>`, 'g');
        const openMatches = (markdown.match(openPattern) || []).length;
        const closeMatches = (markdown.match(closePattern) || []).length;

        if (openMatches > closeMatches) {
            markdown = markdown + `</${tag}>`;
        }
    }

    return markdown;
}
function ResponseManager({ message}: {
    message: string;
}) {


    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                // Headings (bright with subtle weight differentiation)
                h1: ({ ...props }) => (
                    <h1
                        className="text-[22px] font-semibold text-gray-100 mt-8 mb-5 pb-2 border-b border-gray-700 leading-tight"
                        {...props}
                    />
                ),
                h2: ({ ...props }) => (
                    <h2
                        className="text-[19px] font-medium text-gray-200 mt-7 mb-3 leading-snug"
                        {...props}
                    />
                ),
                h3: ({ ...props }) => (
                    <h3
                        className="text-[17px] font-normal text-gray-300 mt-5 mb-2 leading-snug"
                        {...props}
                    />
                ),

                // Paragraphs (high contrast with relaxed line spacing)
                p: ({ ...props }) => (
                    <p
                        className="text-gray-200 mb-4 leading-[1.8] text-[15.5px] tracking-wide"
                        {...props}
                    />
                ),

                // Lists (bright text with custom markers)
                ul: ({ ...props }) => (
                    <ul
                        className="list-disc pl-5 mb-4 space-y-2 marker:text-gray-400"
                        {...props}
                    />
                ),
                ol: ({ ...props }) => (
                    <ol
                        className="list-decimal pl-5 mb-4 space-y-2"
                        {...props}
                    />
                ),
                li: ({ ...props }) => (
                    <li
                        className="text-gray-300 text-[15px] leading-relaxed pl-1"
                        {...props}
                    />
                ),

                // Code & Blocks (high contrast with vibrant accents)
                code: ({ ...props }) => (
                    <code
                        className="bg-gray-700 px-1.5 py-0.5 rounded text-[14px] font-mono text-blue-200 border border-gray-600"
                        {...props}
                    />
                ),
                pre: ({ ...props }) => (
                    <pre
                        className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-[14px] my-3 border border-gray-700"
                        {...props}
                    />
                ),

                // Blockquotes (vibrant contrast version)
                blockquote: ({ ...props }) => (
                    <blockquote
                        className="border-l-3 border-blue-400 pl-4 my-4 text-gray-100 bg-gray-800/60 py-3 text-[15px] italic"
                        {...props}
                    />
                ),

                // Tables (bright with clear grid)
                table: ({ ...props }) => (
                    <table
                        className="w-full my-4 border-collapse"
                        {...props}
                    />
                ),
                th: ({ ...props }) => (
                    <th
                        className="bg-gray-800 p-3 text-left border-b border-gray-600 text-gray-200 font-medium"
                        {...props}
                    />
                ),
                td: ({ ...props }) => (
                    <td
                        className="p-3 border-b border-gray-700 text-gray-300"
                        {...props}
                    />
                ),

                // Horizontal Rule (visible but not harsh)
                hr: ({ ...props }) => (
                    <hr
                        className="my-6 border-t border-gray-700"
                        {...props}
                    />
                ),

                // Special highlight for key terms (Claude-style)
                strong: ({ ...props }) => (
                    <strong
                        className="font-medium text-gray-100"
                        {...props}
                    />
                ),

                // Links (stand out but not jarring)
                a: ({ ...props }) => (
                    <a
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-3"
                        {...props}
                    />
                ),
            }}
        >
            {message}
        </ReactMarkdown>
    )
}
