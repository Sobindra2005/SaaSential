import React from 'react';
import { FaPlus, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Container from "../../Container";
import Logo from "../../../Common/Logo";
import Button from "../../../Common/Buttons";
import { signOut } from 'next-auth/react';

interface props {
    onCreate?: () => void,
    render?: boolean
}

const AfterLoginHeader: React.FC<props> = ({ onCreate, render = true }) => {
    return (
        <Container className='flex py-4 items-center z-10 justify-between border-b bg-primary border-border fixed top-0 w-full '>
            <div>
                <Logo />
            </div>
          
                {render ?
                    <div  className='flex items-center gap-10'>
                        <Button onClick={onCreate}   ButtonType='secondary' className='flex items-center gap-2 '>
                            <FaPlus /> <span className='hidden md:block'> Add New Project </span> 
                        </Button>
                    </div>

                    :
                    <div className='h-10'>

                    </div>
                }
     
                <div className='relative'>
                    <div className='hidden md:flex items-center gap-5'>
                        <FaCog size={22} className='cursor-pointer hover:text-purple-500 transition-colors' />
                        <FaSignOutAlt 
                            size={22} 
                            className='cursor-pointer hover:text-purple-500 transition-colors' 
                            onClick={() => signOut({ callbackUrl: '/home' })}
                        />
                    </div>
                    
                    <div className='md:hidden'>
                        {/* Mobile dropdown */}
                        <div className='relative group'>
                            <button className='flex items-center p-2 rounded-full hover:bg-gray-700/30'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            
                            <div className='absolute right-0 mt-2 w-48 bg-primary border border-border rounded-md shadow-lg overflow-hidden transition-all duration-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100'>
                                <div className='flex flex-col p-2'>
                                    <button className='flex items-center gap-3 px-4 py-2 hover:bg-gray-700/30 rounded-md transition-colors'>
                                        <FaCog size={18} />
                                        <span>Settings</span>
                                    </button>
                                    <button 
                                        className='flex items-center gap-3 px-4 py-2 hover:bg-gray-700/30 rounded-md transition-colors'
                                        onClick={() => signOut({ callbackUrl: '/home' })}
                                    >
                                        <FaSignOutAlt size={18} />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    
    );
};

export default AfterLoginHeader;