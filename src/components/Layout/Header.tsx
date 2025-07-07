"use client"
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Container from './Container'
import { IoIosMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import Button from '../Common/Buttons';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Common/Logo';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const session = useSession();

    return (
        <>
            <nav className="fixed w-full z-40  border-b border-gray-800 ">
                <Container padding='px-3'>
                    <div className="flex justify-between bg-primary  h-16 items-center">
                        <div className={` font-bold text-xl gap-2`}>
                            <div className='flex items-center'><Logo /> </div>
                        </div>
                        <div className="hidden md:flex space-x-8 rounded-full border border-gray-800 p-2 px-7  ">
                            <NavLink href="/#price">Price</NavLink>
                            <NavLink href="/#about">About</NavLink>
                            <NavLink href="/#resources">Resources</NavLink>
                            <NavLink href="/contribute">Contribute Templates</NavLink>
                        </div>
                        {session.data ? (
                            <div className='flex items-center gap-4'>
                                <Link href="/home">
                                    <div className='flex items-center gap-2 cursor-pointer hover:bg-purple-600/10 p-2 rounded-lg transition-colors'>
                                        <Image
                                            src={session?.data?.user?.image  || '/default-avatar.png'}
                                            alt={session?.data?.user?.name || 'User'}
                                            width={40}
                                            height={40}
                                            className="rounded-full bg-purple-500"
                                        />
                                    </div>
                                </Link>
                            </div>
                        ) : (
                            <div className='flex gap-2 sm:gap-8 text-sm items-center justify-center'>
                                <Link href={"/login"}> <button className='hover:text-purple-500'>Login</button></Link>
                                <Link href={"signup"}> <Button type='primary'>SignUp</Button></Link>
                            </div>
                        )}

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className=" hover:text-gray-900"
                            >
                                {isMenuOpen ? <RxCross2 className="h-6 w-6" /> : <IoIosMenu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                </Container>
            </nav>

            {
                isMenuOpen && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${isMenuOpen}-hii`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0.8, x: -20 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut"
                            }}
                            className="md:hidden w-fit border bg-primary border-gray-800 rounded-xl text-sm fixed top-16 z-50 right-1 sm:top-20 sm:right-10 shadow-sm shadow-purple-900 ">
                            <div className="px-2 pt-2 pb-3 space-y-1  sm:px-3">
                                <MobileNavLink href="/#price">Price</MobileNavLink>
                                <MobileNavLink href="/#about">About</MobileNavLink>
                                <MobileNavLink href="/#resources">Resources</MobileNavLink>
                                <MobileNavLink href="/contribute">Download</MobileNavLink>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </>
    );
}


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-300 navBar hover:text-purple-500 px-2 py-1 text-sm font-medium transition-colors"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-gray-300 hover:text-purple-500 block px-3 py-2 text-base font-medium"
        >
            {children}
        </a>
    );
}