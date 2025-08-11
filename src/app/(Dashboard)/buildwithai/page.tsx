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
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/animations/loading.json";
import textLoading from "@/assets/animations/textLoading.json";
import { useChatContext } from '../chatContext';
import remarkGfm from 'remark-gfm';

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
    return response.data;
}

const createMsgApi = async ({ message, senderId, chatId }: { message: string; senderId: string; chatId: string; }) => {
    const response = await api.post('/api/chat/message', { message, senderId, chatId });
    return response.data;
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

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // Process all complete lines
        let lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Save incomplete line for next chunk

        for (let line of lines) {
            if (line.startsWith('data: ')) {
                const text = line.replace('data: ', '');
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
        onSuccess: (data) => {
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
        onSuccess: (data: any) => {
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
        onSuccess: (data: any) => {
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
        // If displayedMessage is already up to date, do nothing
        if (displayedMessage === streamingMessage) return;

        let currentIndex = displayedMessage.length;
        let animationFrame: number;

        const typeNext = () => {
            if (currentIndex < streamingMessage.length) {
                setDisplayedMessage(prev => prev + streamingMessage[currentIndex]);
                currentIndex++;
                animationFrame = window.setTimeout(typeNext, 0);
            }
        };

        typeNext();

        return () => {
            clearTimeout(animationFrame);
        };
    }, [streamingMessage]);


    useEffect(() => {
        if (
            isSuccessChatHistory &&
            (!currentChatId || !(chatHistory as IMessage[])?.some((c: any) => c._id === currentChatId))
        ) {
            changeCurrentChatId((chatHistory as IMessage[])?.[0]?._id as string || null);
        }
    }, [chatHistory, isSuccessChatHistory]);

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
                                    <ResponseManager message={displayedMessage} />
                                    <span className="animate-pulse ml-1">▍</span>
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


export const ResponseManager = ({ message }: { message: string }) => {
    const [copy, setCopy] = useState(false);

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code({ className, children, ...props }) {
                    // @ts-expect-error
                    const inline = props.inline;
                    const match = /language-(\w+)/.exec(className || '');
                    const codeString = String(children).replace(/\n$/, '');

                    return !inline && match ? (
                        <div className="relative my-2 group">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(codeString)
                                    setCopy(true)
                                    setTimeout(() => {
                                        setCopy(false);
                                    }, 3000);
                                }}
                                className="absolute top-2 right-2 z-10 bg-gray-600 text-xs px-2 py-1 rounded block   transition"
                            >
                                {copy ? "Copied" : "Copy"}
                            </button>
                            <SyntaxHighlighter
                                style={oneDark}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-md text-sm"
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                    ) : (
                        <code
                            className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded"
                            {...props}
                        >
                            {children}
                        </code>
                    );
                },
                a: ({ ...props }) => (
                    <a {...props} className="text-blue-500 underline" />
                ),
                p: ({ ...props }) => <p className="mb-2" {...props} />,
                ul: ({ ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                ol: ({ ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,

                table: ({ children }) => (
                    <div className="overflow-auto my-4">
                        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
                            {children}
                        </table>
                    </div>
                ),
                thead: ({ children }) => <thead className="bg-gray-100 dark:bg-gray-800">{children}</thead>,
                tbody: ({ children }) => <tbody>{children}</tbody>,
                tr: ({ children }) => <tr className="border-b border-gray-300 dark:border-gray-700">{children}</tr>,
                th: ({ children }) => (
                    <th className="px-4 py-2 text-left font-semibold border border-gray-300 dark:border-gray-700">
                        {children}
                    </th>
                ),
                td: ({ children }) => (
                    <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                        {children}
                    </td>
                ),
            }}
        >
            {message}
        </ReactMarkdown>
    )
}
