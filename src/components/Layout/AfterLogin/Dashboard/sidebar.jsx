"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Blocks, PanelLeftOpen, PanelRightOpen, Workflow, BrainCog } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [messages, setMessages] = useState([]);
    const isBuildWithAiPage = pathname.includes('buildwithai');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarItems = [
        { icon: Blocks, link: 'home', label: 'Projects' },
        { icon: Workflow, link: 'template', label: 'Templates' },
        { icon: BrainCog, link: 'buildwithai', label: 'Build with Ai' },
    ];

    React.useEffect(() => {
        if (isBuildWithAiPage) {
            setMessages([{
                id: 1,
                text: "Welcome to the Build with AI page!",
                timestamp: new Date().toISOString()
            }]);
        }
    }, [isBuildWithAiPage]);

    const ListedMessages = [
        { id: 1, text: "Hello, how can I assist you today?", timestamp: new Date().toISOString() },
        { id: 2, text: "Don't forget to check out our latest features!", timestamp: new Date().toISOString() },
        { id: 3, text: "Feel free to ask any questions.", timestamp: new Date().toISOString() }
    ];

    return (
        <motion.div
            className={` text-white border-r ${isBuildWithAiPage ? 'bg-primary' : 'bg-primary'}  z-50 border-gray-800 h-screen fixed top-[78px]  overflow-hidden  `}
            animate={{ width: isOpen ? 200 : 60 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex items-center justify-between text-xl font-bold border-b border-gray-800  p-4 gap-8 ">
                {isOpen && <span className='text-gray-300'>{isBuildWithAiPage ? "Chats" : 'Builder'}</span>} <button onClick={toggleSidebar} className="text-xl">
                    {isOpen ? <PanelRightOpen /> : <PanelLeftOpen />}
                </button>
            </div>
            <nav className="mt-4 w-full">
                <ul>
                    {isBuildWithAiPage ? (
                        <div>
                            {isOpen && ListedMessages.map((message) => (
                                <li key={message.id} className={`flex items-center py-3 px-2 ${message.id === 1 ? 'bg-gray-900' : ''} hover:bg-gray-900 overflow-hidden w-full cursor-default`}>
                                    <span className="text-gray-400 text-sm truncate">{message.text}</span>
                                </li>
                            ))}
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