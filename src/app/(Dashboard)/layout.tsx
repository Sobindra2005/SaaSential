import React from 'react';
import Sidebar from "../../components/Layout/AfterLogin/Dashboard/sidebar"
import { CreateChatContextProvider, OnCreateProvider } from './contextProvider';
import { HeaderWrapper } from './headerWrapper';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <CreateChatContextProvider>
                <OnCreateProvider>
                    <HeaderWrapper>
                        <div className='flex'>
                            <Sidebar />
                            <div className="flex-grow  flex min-h-full ">
                                {children}
                            </div>
                        </div>
                    </HeaderWrapper>
                </OnCreateProvider>
            </CreateChatContextProvider>
        </div>
    );
};

export default Layout;


