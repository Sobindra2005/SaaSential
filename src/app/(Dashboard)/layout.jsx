import React from 'react';

import Sidebar from "../../components/Layout/AfterLogin/Dashboard/sidebar"


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Sidebar />
            <main className="flex-grow  flex min-h-full ">
                {children}
            </main>
        </div>
    );
};

export default Layout;