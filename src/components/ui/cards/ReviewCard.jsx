"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const ReviewCard = ({ userImage, userName, userTitle, review }) => {
    return (
        <motion.div
            initial={{ opacity: 0  }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.1,
                duration: 0.7,
                ease: "easeInOut"
            }}
            className=" bg-gradient-to-b 
            w-[26rem] min-h-[12rem] from-[#030014] to-[#161427] rounded-lg p-6 mb-4 border border-gray-900"
        >
            <div className="flex items-center mb-4">
                <Image src={userImage} alt={userName} width={50} height={50} className="rounded-full" />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{userName}</h3>
                    <p className="text-gray-500">{userTitle}</p>
                </div>

            </div>
            <q className="text-gray-700">{review}</q>
        </motion.div>
    );
};

export default ReviewCard;