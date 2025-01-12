"use client"
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Container from './Container'
import { IoIosMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import Button from '../Common/Buttons';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed w-full z-40  border-b border-gray-800 ">
                <Container padding='px-3'>
                    <div className="flex justify-between bg-primary  h-16 items-center">
                        <div className={`flex items-center font-bold text-xl gap-2`}>
                            <Globe className="w-6 h-6 text-blue-500" />  <div> {"Saa"}<span className='text-purple-400'>{"Sential"}</span></div>
                        </div>
                        <div className="hidden md:flex space-x-8 rounded-full border border-gray-800 p-2 px-7  ">
                            <NavLink href="/#home">Product</NavLink>
                            <NavLink href="/#Service&facilities">Price</NavLink>
                            <NavLink href="/#pricing">About</NavLink>
                            <NavLink href="/#trainers">Resources</NavLink>
                            <NavLink href="/#gallery">Download</NavLink>
                        </div>

                        <div className='flex gap-2 sm:gap-8 text-sm items-center justify-center '>
                            <button className='hover:text-purple-500 '>Login</button>
                            <Button type='primary'>SignUp</Button>
                        </div>

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
                            className="md:hidden w-fit border border-gray-800 rounded-xl text-sm fixed top-16 z-50 right-1 sm:top-20 sm:right-10 shadow-sm shadow-purple-900 ">
                            <div className="px-2 pt-2 pb-3 space-y-1  sm:px-3">
                                <MobileNavLink href="#product">Product</MobileNavLink>
                                <MobileNavLink href="/#price">Price</MobileNavLink>
                                <MobileNavLink href="/#about">About</MobileNavLink>
                                <MobileNavLink href="/#resources">Resources</MobileNavLink>
                                <MobileNavLink href="/#download">Download</MobileNavLink>
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