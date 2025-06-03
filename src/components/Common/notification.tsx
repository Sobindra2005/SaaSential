import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type NotificationType = 'default' | 'success' | 'error' | 'warning' | 'info';

interface NotificationProps {
    type?: NotificationType;
    message: string;
    isVisible: boolean;
    onClose?: () => void;
    autoClose?: boolean;
    autoCloseTime?: number;
}

export const Notification: React.FC<NotificationProps> = ({
    type = 'default',
    message,
    isVisible,
    onClose,
    autoClose = true,
    autoCloseTime = 5000,
}) => {
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    const handleClose = () => {
        setVisible(false);
        if (onClose) onClose();
    };


    useEffect(() => {
        if (autoClose && visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, autoCloseTime);

            return () => clearTimeout(timer);
        }
    }, [autoClose, visible, autoCloseTime, handleClose]);


    if (!visible) return null;

    const getIconByType = () => {
        switch (type) {
            case 'success':
                return (
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10l3 3 6-6" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                );
            case 'info':
                return (
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
                    </svg>
                );
        }
    };

    const getIconColorClass = () => {
        switch (type) {
            case 'success': return 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200';
            case 'error': return 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200';
            case 'warning': return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200';
            case 'info': return 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-200';
            default: return 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200';
        }
    }; return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="flex items-center w-full max-w-md p-4 text-gray-500 bg-white rounded-lg shadow-xl border-l-4 dark:text-gray-400 dark:bg-gray-800 backdrop-blur-sm"
                    style={{
                        borderLeftColor: type === 'success' ? '#10B981' :
                            type === 'error' ? '#EF4444' :
                                type === 'warning' ? '#F59E0B' :
                                    type === 'info' ? '#3B82F6' : '#6B7280'
                    }}
                    role="alert"
                >
                    <div className={`inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg ${getIconColorClass()}`}>
                        {getIconByType()}
                        <span className="sr-only">{`${type} icon`}</span>
                    </div>
                    <div className="ml-4 mr-6 text-sm font-medium">{message}</div>
                    <motion.button
                        type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white/20 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800/50 dark:hover:bg-gray-700"
                        onClick={handleClose}
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
