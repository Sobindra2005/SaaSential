import React from 'react';

import Sidebar from "../../components/Layout/AfterLogin/Dashboard/sidebar"
import { BuildWithAI } from '@/components/Layout/buildWithAi';


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Sidebar />
            <main className="flex-grow  flex min-h-full ">
                {children}
                <BuildWithAI/>
            </main>
        </div>
    );
};

export default Layout;