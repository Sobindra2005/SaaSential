"use client"
import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import { PricingCard } from '../ui/cards/pricingCard';

const Pricing = () => {
    return (
        <Container className='flex flex-col justify-center'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut"
                }}>
                <h2 className="text-4xl font-bold mb-4 text-secondary text-center">The Perfect Plan For You</h2>
                <p className=" text-gray-700 text-md text-center mb-8">Join thousands of satisfied users who rely on our platform for their
                    personal and professional productivity needs.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 , y:60 }}
                whileInView={{ opacity: 1 , y:0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut"
                }}
                className='w-full h-full '>
                <PricingCard />
            </motion.div>
        </Container>
    );
};

export default Pricing;