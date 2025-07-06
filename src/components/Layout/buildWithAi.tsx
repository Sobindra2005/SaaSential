"use client";

import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const BuildWithAI = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);


    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

 
    const segments = Array.from({ length: 8 });

    return (
        <>
            <AnimatePresence>
                {isChatOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen flex flex-wrap z-40">
                        {segments.map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1/4 h-1/2 bg-black"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                style={{ transformOrigin: "center" }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <motion.div
                className={`fixed bottom-6 right-6 z-50 group ${isChatOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                drag={true}
                dragElastic={0.6}
                dragMomentum={false}
                whileHover={{ scale: 1.1 }}
                dragConstraints={{
                    top: 0, // Limit how far up it can go
                    left: 0, // Limit how far left it can go
                    right: 0, // Limit how far right it can go
                    bottom: 0 // Limit how far down it can go
                }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-indigo-400 opacity-30"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.button
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg text-white hover:shadow-xl relative z-10"
                    onClick={toggleChat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaRobot className="text-2xl" />
                </motion.button>
            </motion.div>
        </>
    );
};