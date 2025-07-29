'use client';

import { useState, useRef, useEffect, FormEvent, RefObject } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/utils/api';
import { FaCode, FaLightbulb, FaSearch } from 'react-icons/fa';
import { useOutsideClick } from '@/components/hooks';
import { IMessage } from '@/models/message';
import { useSession } from 'next-auth/react';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';
import SendBox, { CreateMsgComponent } from './createMsg';
import { Notification } from '@/components/Common/notification';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

const createMsgApi = async ({ message, senderId, chatId }: { message: string; senderId: string; chatId: string }) => {
    const response = await api.post('/api/chat/message', { message, senderId, chatId });
    return response.data;
}

const messgaeAi = async ({ chatId, prompt }: { chatId: string; prompt: string }) => {
    console.log("Sending message to AI:", prompt);
    const response = await api.post('/api/chat/asktoai', { chatId, prompt });
    return response.data;
}

const tools = [{ name: 'Research', icon: <FaSearch size={20} /> }, { name: 'Brainstorm', icon: <FaLightbulb size={20} /> }, { name: 'Develop', icon: <FaCode size={20} /> }];

export default function BuildWithAI() {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [defaultTool, setDefaultTool] = useState('Develop');
    const [showList, setShowList] = useState(false);
    const [notification, setNotification] = useState({ visible: false, message: '', type: 'success' });
    const [chatId, setChatId] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { data } = useSession();
    const userId = data?.user.id;

    const queryClient = useQueryClient();

    const AiReponse = useMutation({
        mutationFn: messgaeAi,
        onSuccess: (data) => {
            console.log("Chat created successfully:", data);
            console.log("Chat ID:", chatId);
            queryClient.invalidateQueries({ queryKey: ['messages'] });
            setIsLoading(false);
        },
        onError: (error) => {
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
            AiReponse.mutate({ chatId: data[0].chatId, prompt: data[0].message });
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
                chatId: data?._id
            })
            setChatId(data?._id);
            queryClient.invalidateQueries({ queryKey: ['chatHistory'] });
        },
        onError: (error) => {
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
            chatId: (chatHistory as any)?.[0]?._id || ''
        })
    };

    const selectTool = (value: string) => {
        setDefaultTool(value);
        setShowList(false);
    }

    const { data: chatHistory, isFetching: isChatFetching } = useQuery({
        queryKey: ['chatHistory'],
        queryFn: fetchChatHistory,

    })

    const { data: messages, isFetching: isMessagesFetching, isSuccess: isMessagesSuccess } = useQuery({
        queryKey: ['messages'],
        queryFn: () => fetchMessages((chatHistory as any)?.[0]?._id || ''),
        enabled: (chatHistory as IMessage[])?.length > 0
    })

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
    }, [messages]);

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    return (

        <div className="flex flex-col h-screen max-h-screen w-full bg-primary">
            <div className='w-full relative h-[5.6rem]'>
                <AfterLoginHeader render={false} />
            </div>

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

            <div className="flex-grow overflow-y-auto h-auto   p-6 flex items-center justify-center" id="chat-container">
                {!messages || (messages as IMessage[]).length === 0 ? (
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
                    <div className="max-w-[80%] w-full space-y-4 overflow">
                        {(Array.isArray(messages) ? messages : []).map((message: IMessage, index: number) => (
                            <div
                                key={index}
                                className={`flex ${((message.senderId as unknown) as string) === userId ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={` max-w-[80%]  ${((message.senderId as unknown) as string) === userId
                                        ? 'bg-blue-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                                        } p-4 shadow-sm`}
                                >

                                    <ReactMarkdown
                                        components={{
                                            code({ node, className, children, ...props }) {
                                                // @ts-expect-error: 'inline' is not typed in the default props, but is present at runtime
                                                const inline = props.inline;
                                                const match = /language-(\w+)/.exec(className || '');
                                                return !inline && match ? (
                                                    <SyntaxHighlighter
                                                        style={oneDark}
                                                        language={match[1]}
                                                        PreTag="div"
                                                        className="rounded-md my-2 text-sm"
                                                    >
                                                        {String(children).replace(/\n$/, '')}
                                                    </SyntaxHighlighter>
                                                ) : (
                                                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded" {...props}>
                                                        {children}
                                                    </code>
                                                );
                                            },
                                            a: ({ node, ...props }) => (
                                                <a {...props} className="text-blue-500 underline" />
                                            ),
                                            p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                                            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                                        }}
                                    >
                                        {message.message}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                                    <Loader2 size={20} className="animate-spin text-blue-500" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {!!messages && (messages as IMessage[]).length > 0
                && (
                    <div className="p-4 flex justify-center">
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
