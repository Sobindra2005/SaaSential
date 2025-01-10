"use client"
import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import ReviewCard from '../ui/cards/ReviewCard';

const TrustedByAll = () => {
    return (
        <Container className='w-full min-h-screen flex flex-col mt-[5rem]  '>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut"
                }}>
                <h2 className="text-4xl font-bold mb-4 text-secondary text-center">Trusted by all</h2>
                <p className=" text-gray-700 text-md text-center mb-8">Join thousands of satisfied users who rely on our platform for their
                    personal and professional productivity needs.</p>
            </motion.div>
            <div className='flex gap-4 overflow-hidden ' >
                {
                    [
                        {
                            userName: "Jane Smith",
                            userTitle: "Amazing Quality",
                            review: "I absolutely loved this product. The quality is unmatched, and it's worth every penny!",
                            userImage: "https://randomuser.me/api/portraits/women/44.jpg"
                        },
                        {
                            userName: "Michael Johnson",
                            userTitle: "Great Value",
                            review: "This product offers great value for its price. I highly recommend it to everyone.",
                            userImage: "https://randomuser.me/api/portraits/men/32.jpg"
                        },
                        {
                            userName: "Emily Davis",
                            userTitle: "Highly Recommended",
                            review: "This is hands down one of the best purchases I've made this year. Absolutely satisfied!",
                            userImage: "https://randomuser.me/api/portraits/women/68.jpg"
                        },
                        {
                            userName: "Michael Johnson",
                            userTitle: "Great Value",
                            review: "This product offers great value for its price. I highly recommend it to everyone.",
                            userImage: "https://randomuser.me/api/portraits/men/32.jpg"
                        },
                        {
                            userName: "Emily Davis",
                            userTitle: "Highly Recommended",
                            review: "This is hands down one of the best purchases I've made this year. Absolutely satisfied!",
                            userImage: "https://randomuser.me/api/portraits/women/68.jpg"
                        },
                    ].map((data, index) => <div key={`${data.userName}-${index}`}><ReviewCard userName={data.userName} userTitle={data.userTitle} review={data.review} userImage={data.userImage} /></div>)
                }
            </div>
            <div className='flex flex-row-reverse gap-4 overflow-hidden'>
                {
                    [
                        {
                            userName: "Jane Smith",
                            userTitle: "Amazing Quality",
                            review: "I absolutely loved this product. The quality is unmatched, and it's worth every penny!",
                            userImage: "https://randomuser.me/api/portraits/women/44.jpg"
                        },
                        {
                            userName: "Michael Johnson",
                            userTitle: "Great Value",
                            review: "This product offers great value for its price. I highly recommend it to everyone.",
                            userImage: "https://randomuser.me/api/portraits/men/32.jpg"
                        },
                        {
                            userName: "Emily Davis",
                            userTitle: "Highly Recommended",
                            review: "This is hands down one of the best purchases I've made this year. Absolutely satisfied!",
                            userImage: "https://randomuser.me/api/portraits/women/68.jpg"
                        },
                        {
                            userName: "Michael Johnson",
                            userTitle: "Great Value",
                            review: "This product offers great value for its price. I highly recommend it to everyone.",
                            userImage: "https://randomuser.me/api/portraits/men/32.jpg"
                        },
                        {
                            userName: "Emily Davis",
                            userTitle: "Highly Recommended",
                            review: "This is hands down one of the best purchases I've made this year. Absolutely satisfied!",
                            userImage: "https://randomuser.me/api/portraits/women/68.jpg"
                        },
                    ].map((data, index) => <div key={`${data.userName}-${index}`}><ReviewCard userName={data.userName} userTitle={data.userTitle} review={data.review} userImage={data.userImage} /></div>)
                }

            </div>

        </Container>
    );
};

export default TrustedByAll;