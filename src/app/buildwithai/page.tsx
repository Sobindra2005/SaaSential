'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'system';
    content: string;
}

export default function BuildWithAI() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!input.trim()) return;
        
        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        
        try {
            setTimeout(() => {
                const aiResponse: Message = { 
                    role: 'system', 
                    content: `I've processed your request: "${input}". This is where your AI would respond.` 
                };
                setMessages(prev => [...prev, aiResponse]);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                role: 'system', 
                content: 'Sorry, I encountered an error.' 
            }]);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-screen max-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Build with AI
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                    Collaborate with our AI to bring your ideas to life
                </p>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 flex items-center justify-center" id="chat-container">
                {messages.length === 0 ? (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <Bot size={48} className="mx-auto mb-4 text-gray-400" />
                        <p>Send a message to start building with AI</p>
                    </div>
                ) : (
                    <div className="max-w-2xl w-full space-y-4">
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div 
                                    className={`flex max-w-[80%] ${
                                        message.role === 'user' 
                                            ? 'bg-blue-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                                    } p-4 shadow-sm`}
                                >
                                    <div className="mr-2 flex-shrink-0">
                                        {message.role === 'user' 
                                            ? <User size={16} /> 
                                            : <Bot size={16} className="text-blue-500" />
                                        }
                                    </div>
                                    <div>{message.content}</div>
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
            
            <div className="p-4 border-t  dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="max-w-2xl mx-auto flex items-center gap-2">
                    <textarea
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            // Auto-resize the textarea
                            e.target.style.height = 'auto';
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                        placeholder="Describe your idea here..."
                        className="flex-grow p-3 border rounded-lg  bg-white dark:bg-gray-800 resize-none min-h-[48px] max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-transparent"
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: 'transparent transparent'
                        }}
                        disabled={isLoading}
                        rows={1}
                        onFocus={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                    />
                    <button 
                        type="submit" 
                        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 self-end"
                        disabled={isLoading || !input.trim()}
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}
