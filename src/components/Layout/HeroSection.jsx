"use client"
import React from 'react';
import Button from '../Common/Buttons';
import { motion } from 'framer-motion';
import Container from './Container';
import LandingDiv from '../ui/landingDiv';
import Link from 'next/link';


export default function HeroSection() {
    return (
        <Container >
            <section className="w-full min-h-screen flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-center text-white">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className='mt-[13rem]'
                > <h1 className="text-6xl font-bold mb-4 text-secondary text-center ">All-in-One Website Builder for <br /> Teams and Creators.</h1></motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className="flex space-x-4  mt-4">
                    <Link href={"/home"}> <Button type="tertiary">Get Started</Button></Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.5,
                        ease: "easeInOut"
                    }}
                    className=' topShadow  w-[50rem] bg-gradient-to-b from-[#282637] to-[#030014]  p-2 mt-4 h-auto rounded-xl '>
                    <LandingDiv />

                </motion.div>
            </section >
        </Container>
    );
}