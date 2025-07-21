'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Send, Bot, User, Loader2, PenTool } from 'lucide-react';
import Logo from '@/components/Common/Logo';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '@/utils/api';
import { FaCode, FaLightbulb, FaSearch, FaToolbox } from 'react-icons/fa';
import Button from '@/components/Common/Buttons';
import List from '@/components/Common/list';
import { useOutsideClick } from '@/components/hooks';
import { ComboBox } from '@/components/Common/Input';
import { IMessage } from '@/models/message';
import Loader from '@/components/Common/loading/loader';
import { useSession } from 'next-auth/react';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';

const fetchMessages = async (chatId: string) => {
    console.log("Fetching messages...");
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

const tools = [{ name: 'Research', icon: <FaSearch size={20} /> }, { name: 'Brainstorm', icon: <FaLightbulb size={20} /> }, { name: 'Develop', icon: <FaCode size={20} /> }];

export default function BuildWithAI() {
    // const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [defaultTool, setDefaultTool] = useState('Develop');
    const [showList, setShowList] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { data } = useSession();
    const userId = data?.user.id;

    const queryClient = useQueryClient();

    const createMsg = useMutation({
        mutationFn: createMsgApi,
        onSuccess: (data) => {
            console.log("Message created:", data);
            queryClient.invalidateQueries({ queryKey: ['messages'] });
        },
        onError: (error) => {
            console.error("Error creating message:", error);
        }
    })

    const createChat = useMutation({
        mutationFn: createChatApi,
        onSuccess: (data) => {
            createMsg.mutate({
                message: input,
                senderId: userId as string,
                chatId: data?._id
            })
            queryClient.invalidateQueries({ queryKey: ['chatHistory'] });
        },
        onError: (error) => {
            console.error("Error creating chat:", error);
        }
    })

    useOutsideClick(containerRef, () => {
        if (showList) setShowList(false);
    });

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;
        // setInput('');
        setIsLoading(true);

        createChat.mutate(input.trim());
        try {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error:', error);

            setIsLoading(false);
        }
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
        queryFn: () => fetchMessages(chatHistory?.[0]?._id || ''),
        enabled: (chatHistory as IMessage[])?.length > 0
    })

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        console.log("messages from server:", messages);
    }, [messages]);

    return (

        <div className="flex flex-col h-screen max-h-screen w-full bg-primary">
            {(isMessagesFetching) ? (
                <Loader />
            ) : (
                <>
                    <AfterLoginHeader render={false} />

                    <div className="flex-grow overflow-y-auto p-6 flex items-center justify-center" id="chat-container">

                        {!messages || (messages as IMessage[]).length === 0 ? (
                            <div className="flex flex-col items-center justify-center w-full  h-[60vh] rounded-xl  p-8">
                                <Bot size={56} className="mb-6 text-blue-500" />
                                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Start Building with AI</h2>
                                <p className="mb-6 text-gray-500 dark:text-gray-400 text-center max-w-md">
                                    Describe your idea below and let AI help you bring it to life!
                                </p>
                                <form onSubmit={handleSendMessage} className="w-full max-w-xl flex  gap-3 items-center justify-center">
                                    <div className='w-full h-full relative'>
                                        <textarea
                                            value={input}
                                            onChange={(e) => {
                                                setInput(e.target.value);
                                                e.target.style.height = 'auto';
                                                e.target.style.height = `${e.target.scrollHeight}px`;
                                            }}
                                            placeholder="Describe your idea here..."
                                            className="flex-grow p-4 rounded-lg bg-gray-800 resize-none w-full h-full text-base outline-none shadow-inner"
                                            style={{
                                                scrollbarWidth: 'thin',
                                                scrollbarColor: 'transparent transparent'
                                            }}
                                            disabled={isLoading}
                                            rows={3}
                                            onFocus={(e) => {
                                                e.target.style.height = 'auto';
                                                e.target.style.height = `${e.target.scrollHeight}px`;
                                            }}
                                        />
                                        <ComboBox name={defaultTool} className='absolute bottom-[2px] right-[2px] ' />
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center items-center relative'>
                                        {showList && <List items={tools} defaultValue={defaultTool} onSelect={selectTool} className='absolute top-[-110%] left-[0%] min-w-[10rem]' ref={containerRef} />}
                                        <Button
                                            type='submit'
                                            ButtonType="secondary"
                                            className="disabled:opacity-50 transition-all"
                                            onClick={() => setShowList(!showList)}

                                        >
                                            <FaToolbox size={18} />
                                        </Button>

                                        <Button
                                            ButtonType="secondary"
                                            className="disabled:opacity-50 transition-all"
                                            disabled={isLoading || !input.trim()}
                                        >
                                            <Send size={18} />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="max-w-2xl w-full space-y-4">
                                {(Array.isArray(messages) ? messages : []).map((message: IMessage, index: number) => (
                                    <div
                                        key={index}
                                        className={`flex ${((message.senderId as unknown) as string) === userId ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`flex max-w-[80%]  ${((message.senderId as unknown) as string) === userId
                                                ? 'bg-blue-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                                                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                                                } p-4 shadow-sm`}
                                        >

                                            <div>{message.message}</div>
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
                            <div className="p-4 border-t  dark:border-gray-700">
                                <form onSubmit={handleSendMessage} className="max-w-2xl mx-auto flex items-center gap-2">
                                    <div className='w-full h-full relative'>
                                        <textarea
                                            value={input}
                                            onChange={(e) => {
                                                setInput(e.target.value);
                                                e.target.style.height = 'auto';
                                                e.target.style.height = `${e.target.scrollHeight}px`;
                                            }}
                                            placeholder="Describe your idea here..."
                                            className="flex-grow p-4 rounded-lg bg-gray-800 resize-none w-full h-full text-base outline-none shadow-inner"
                                            style={{
                                                scrollbarWidth: 'thin',
                                                scrollbarColor: 'transparent transparent'
                                            }}
                                            disabled={isLoading}
                                            rows={3}
                                            onFocus={(e) => {
                                                e.target.style.height = 'auto';
                                                e.target.style.height = `${e.target.scrollHeight}px`;
                                            }}
                                        />
                                        <ComboBox name={defaultTool} className='absolute bottom-[2px] right-[2px] ' />
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center items-center relative'>
                                        {showList && <List items={tools} onSelect={selectTool} defaultValue={defaultTool} className='absolute top-[-110%] left-[0%] min-w-[10rem]' ref={containerRef} />}
                                        <Button
                                            type='submit'
                                            ButtonType="secondary"
                                            className="disabled:opacity-50 transition-all"
                                            onClick={() => setShowList(!showList)}
                                        >
                                            <FaToolbox size={18} />
                                        </Button>

                                        <Button
                                            ButtonType="secondary"
                                            className="disabled:opacity-50 transition-all"
                                            disabled={isLoading || !input.trim()}
                                        >
                                            <Send size={18} />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </>)}
        </div>
    );
}
