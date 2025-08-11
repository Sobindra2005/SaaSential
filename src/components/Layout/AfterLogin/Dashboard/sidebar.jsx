"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Blocks, PanelLeftOpen, PanelRightOpen, Workflow, BrainCog, PenBoxIcon, EllipsisVertical } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useChatContext } from '@/app/(Dashboard)/chatContext';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [showList, setShowList] = useState(false);
    const pathname = usePathname();
    const isBuildWithAiPage = pathname.includes('buildwithai');
    const queryClient = useQueryClient();
    const { changeContext, currentChatId, changeCurrentChatId } = useChatContext();
    const chatHistory = queryClient.getQueryData(['chatHistory']);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarItems = [
        { icon: Blocks, link: 'home', label: 'Projects' },
        { icon: Workflow, link: 'template', label: 'Templates' },
        { icon: BrainCog, link: 'buildwithai', label: 'Build with victoria' },
    ];


    return (
        <motion.div
            className={`text-white border-r ${isBuildWithAiPage ? 'bg-primary' : 'bg-primary'} z-50 border-gray-800 h-screen fixed  overflow-hidden`}
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
                    <div onClick={() => changeContext(true)} className={`flex gap-3 px-2 pb-5 cursor-pointer w-full  ${isOpen ? '' : 'justify-center'} items-center `}>
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
                                            onMouseEnter={() => setHoveredId(message._id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                            onClick={() => { changeCurrentChatId(message._id) }}
                                            key={message._id}
                                            className={`flex items-center  py-3 px-2 ${message._id === currentChatId ? 'bg-gray-900' : ''} hover:bg-gray-900  w-full cursor-default relative`}
                                        >
                                            <span className="text-gray-400 text-sm truncate">{message.chatHead}</span>
                                            <EllipsisVertical onClick={() => setShowList(true)} size={20} className={`absolute top-1/4 cursor-pointer right-0 ${hoveredId === message._id ? 'block' : 'hidden'} opacity-50 hover:opacity-100`} />
                                            {showList && hoveredId === message._id && (
                                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border border-gray-700 rounded shadow-md z-50 min-w-[100px]">
                                                    <button
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            setShowList(false);
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            // handleDelete(message._id);
                                                            setShowList(false);
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
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