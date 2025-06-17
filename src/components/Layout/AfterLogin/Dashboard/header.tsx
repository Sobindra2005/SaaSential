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
                        <Button onClick={onCreate}   type='secondary' className='flex items-center gap-2 '>
                            <FaPlus /> Add New Project
                        </Button>

                        <span>My Projects</span>
                    </div>

                    :
                    <div className='h-10'>

                    </div>
                }
     
            <div className='flex items-center gap-5'>
                <FaCog size={22} />
                <FaSignOutAlt 
                    size={22} 
                    className='cursor-pointer hover:text-purple-500 transition-colors' 
                    onClick={() => signOut({ callbackUrl: '/home' })}
                />
            </div>
        </Container>
    );
};

export default AfterLoginHeader;