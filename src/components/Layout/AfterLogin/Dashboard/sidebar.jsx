"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Blocks, ChartLine, PanelLeftOpen, PanelRightOpen, Users, Workflow } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarItems = [
        { icon: Blocks, label: 'Elements' },
        { icon: Workflow, label: 'Integrations' },
        { icon: ChartLine, label: 'Analytics' },
        { icon: Users, label: 'Collaboration' },

    ];

    return (
        <motion.div
            className=" text-white border-r bg-primary z-50 border-gray-800 h-screen fixed top-[73px]  overflow-hidden  "
            animate={{ width: isOpen ? 200 : 60 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex items-center justify-between text-xl font-bold border-b border-gray-800  p-4 gap-8 ">
                {isOpen && <span>Builder </span>} <button onClick={toggleSidebar} className="text-xl">
                    {isOpen ? <PanelRightOpen /> : <PanelLeftOpen />}
                </button>
            </div>
            <nav className="mt-4 w-full">
                <ul>
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            isOpen={isOpen}
                        />
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