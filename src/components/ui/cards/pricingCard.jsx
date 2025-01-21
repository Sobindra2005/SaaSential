"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../../Common/Buttons';

const PricingCard = ({  planName, price, features, isPopular }) => {
    return (
        <motion.div
         
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.1,
                duration: 0.7,
                ease: "easeInOut"
            }}
            className="relative shadow-lg flex flex-col justify-center rounded-lg p-6 mb-4 border border-gray-800 max-w-[19rem] min-h-[22rem]"
        >
            {!!isPopular && <div className='absolute  px-3  rounded-lg bg-blue-600 top-2 right-2'>Most Popular </div>}
            <h1 className=" mb-2 text-4xl mt-3" >{planName}</h1>
            <p className="text-xl  mb-4">${price}/month</p>
            <ul className="list-disc list-inside mb-4">
                {features.map((feature, index) => (
                    <>
                        <div key={`${index}-pricingcard`} className='flex gap-2 text-gray-400 '>
                            <span className='text-purple-700'><Check /></span>{feature}</div>

                    </>
                ))}
            </ul>
            <Button type='primary' className='mt-2'>Get Started</Button>
        </motion.div>
    );
};

export default PricingCard;