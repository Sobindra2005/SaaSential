"use client"
import React from 'react';
import Container from './Container';
import Button from '../Common/Buttons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Feature = () => {
    return (
        <Container className=' w-full min-h-screen flex flex-col mt-[10rem] items-center '>
            <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut"
                }}> <Button ButtonType='tertiary'>Features</Button></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut"
                }}
                className='mt-4'
            > <h1 className="text-4xl font-bold mb-4 text-secondary text-center ">Build stunning websites with just a <br /> few clicks - no coding required!</h1></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.7,
                    ease: "easeInOut"
                }}
                className='flex w-full max-w-[40rem] h-[25rem] aspect-[6/5] mx-auto bg-gradient-to-b from-[#282637] to-[#030014] relative p-2 mt-4 rounded-xl'
            >
                <div className="overflow-hidden w-full h-full rounded-lg">
                    <Image
                        src="/feature.png"
                        width={500}
                        height={800}
                        alt="website ready within a minute"
                        className='w-full h-full object-cover object-center mask-image'
                        style={{
                            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0))',
                            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0))'
                        }}
                        unoptimized
                        priority
                    />
                </div>
            </motion.div> 
        </Container>
    );
};

export default Feature;
