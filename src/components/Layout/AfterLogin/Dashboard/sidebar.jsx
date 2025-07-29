"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Blocks, PanelLeftOpen, PanelRightOpen, Workflow, BrainCog, PenBoxIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQueryClient} from '@tanstack/react-query';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isBuildWithAiPage = pathname.includes('buildwithai');
    const queryClient = useQueryClient();

    const chatHistory = queryClient.getQueryData(['chatHistory']);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarItems = [
        { icon: Blocks, link: 'home', label: 'Projects' },
        { icon: Workflow, link: 'template', label: 'Templates' },
        { icon: BrainCog, link: 'buildwithai', label: 'Build with Ai' },
    ];

    useEffect(() => {
        console.log("Sidebar mounted, checking chat history...", chatHistory);
    }, [chatHistory])

    return (
        <motion.div
            className={`text-white border-r ${isBuildWithAiPage ? 'bg-primary' : 'bg-primary'} z-50 border-gray-800 h-screen fixed top-[11.7%] xl:top-[10%] overflow-hidden`}
            animate={{ width: isOpen ? 200 : 60 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex items-center justify-between text-xl font-bold border-b border-gray-800 p-4 gap-8 ">
                {isOpen && <span className='text-gray-300'>{isBuildWithAiPage ? "Chats" : 'Builder'}</span>} <button onClick={toggleSidebar} className="text-xl">
                    {isOpen ? <PanelRightOpen /> : <PanelLeftOpen />}
                </button>
            </div>
            <nav className="mt-4 w-full">
                {isBuildWithAiPage &&
                    <div className={`flex gap-3 px-2 pb-5 cursor-pointer w-full  ${isOpen ? '' : 'justify-center'} items-center `}>
                        <PenBoxIcon size={24} />{isOpen && <span className="text-gray-400 hover:text-gray-100 text-md truncate">New chat</span>}
                    </div>
                }
                <ul>
                    {isBuildWithAiPage ? (
                        <div>
                            {isOpen && chatHistory !== undefined && (
                                chatHistory.length === 0 ? (
                                    <li className="text-gray-400 text-sm py-3 px-2">Nothing to show</li>
                                ) : (
                                    chatHistory.map((message, index) => (
                                        <li
                                            key={message._id}
                                            className={`flex items-center py-3 px-2 ${index === 0 ? 'bg-gray-900' : ''} hover:bg-gray-900 overflow-hidden w-full cursor-default`}
                                        >
                                            <span className="text-gray-400 text-sm truncate">{message.chatHead}</span>
                                        </li>
                                    ))
                                )
                            )}
                        </div>
                    ) : sidebarItems.map((item, index) => (
                        <Link key={item.link} href={`/${item.link}`}>
                            <SidebarItem
                                icon={item.icon}
                                label={item.label}
                                isOpen={isOpen}
                            />
                        </Link>
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
};

const SidebarItem = ({ icon: Icon, label, isOpen }) => {
    return (
        <li className="flex items-center p-4 hover:bg-gray-900 overflow-hidden w-full cursor-default ">
            <Icon />
            {isOpen && <motion.div
                initial={{ display: 'none' }}
                animate={{ display: 'block' }}
                transition={{ delay: 0.2 }}
                className="ml-4">{label}</motion.div>}
        </li>
    );
};

export default Sidebar;