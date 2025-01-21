import React from 'react';
import Logo from '../../components/Common/Logo';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <>
            <div className='p-4 font-bold fixed toop-2 left-2   text-xl'>
               <Link href={"/"}> <Logo /></Link>
            </div>
            <main >{children}</main>

        </>
    );
};

export default Layout;