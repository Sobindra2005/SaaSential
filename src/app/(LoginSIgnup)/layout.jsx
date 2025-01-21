import React from 'react';
import Logo from '../../components/Common/Logo';

const Layout = ({ children }) => {
    return (
        <>
            <div className='p-4  fixed top-2 left-2   '>
               <Logo />
            </div>
            <main >{children}</main>

        </>
    );
};

export default Layout;