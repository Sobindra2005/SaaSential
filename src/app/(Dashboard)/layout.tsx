import React from 'react';
import Sidebar from "../../components/Layout/AfterLogin/Dashboard/sidebar"
import { CreateChatContextProvider, OnCreateProvider } from './chatContext';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <CreateChatContextProvider>
                <OnCreateProvider>
                    <AfterLoginHeader />
                    <div className='flex'>
                        <Sidebar />
                        <div className="flex-grow  flex min-h-full ">
                            {children}
                        </div>
                    </div>
                </OnCreateProvider>
            </CreateChatContextProvider>
        </div>
    );
};

export default Layout;