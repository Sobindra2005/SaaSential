"use client"
import React, { useEffect, useRef } from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import ReviewCard from '../ui/cards/ReviewCard';

const TrustedByAll = () => {
    const firstRowRef = useRef(null);
    const secondRowRef = useRef(null);

const reviewData = [
        {
            userName: "Aarati Sharma",
            userTitle: "Dherai Ramro Quality",
            review: "I absolutely loved this product. The quality is unmatched, and it's worth every penny!",
            userImage: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            userName: "Bipin Thapa",
            userTitle: "Ramro Paisa Vasul",
            review: "This product offers great value for its price. I highly recommend it to everyone.",
            userImage: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            userName: "Sunita Gurung",
            userTitle: "Ati Ramro Sifaris",
            review: "This is hands down one of the best purchases I've made this year. Absolutely satisfied!",
            userImage: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            userName: "Deepak Shrestha",
            userTitle: "Uttam Sewa",
            review: "The customer service is exceptional. They were very helpful with all my questions.",
            userImage: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            userName: "Pratima Karki",
            userTitle: "Purna Samadhan",
            review: "This solved all my problems. I can't imagine going back to my old workflow now.",
            userImage: "https://randomuser.me/api/portraits/women/23.jpg"
        },
    ];

    // Duplicate the reviewData multiple times to ensure enough items for smooth scrolling
    const duplicatedData = [...reviewData, ...reviewData, ...reviewData]; // 3x duplication

    useEffect(() => {
        const firstRow = firstRowRef.current;
        const secondRow = secondRowRef.current;
        
        if (!firstRow || !secondRow) return;
        
        // Calculate initial positions
        const firstRowWidth = firstRow.scrollWidth;
        const secondRowWidth = secondRow.scrollWidth;
        
        let firstRowPosition = 0;
      
        let secondRowPosition = -(secondRowWidth / 2);
        
        const speed = 1;
        
      
        secondRow.style.transform = `translateX(${secondRowPosition}px)`;
        
        const animate = () => {
          
            firstRowPosition -= speed;
            if (firstRowPosition <= -firstRowWidth / 3) {
                firstRowPosition = 0;
            }
            firstRow.style.transform = `translateX(${firstRowPosition}px)`;
            
           
            secondRowPosition += speed;
            if (secondRowPosition >= 0) {
                // Reset to start from right again when it reaches the beginning
                secondRowPosition = -(secondRowWidth / 2);
            }
            secondRow.style.transform = `translateX(${secondRowPosition}px)`;
            
            requestAnimationFrame(animate);
        };
        
        const animationId = requestAnimationFrame(animate);
        
        // Cleanup function
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <Container padding='0px' className='w-full min-h-screen flex flex-col mt-[5rem]'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut"
                }}>
                <h2 className="text-4xl font-bold mb-4 text-secondary text-center">Trusted by all</h2>
                <p className="text-gray-700 text-md text-center mb-8">Join thousands of satisfied users who rely on our platform for their
                    personal and professional productivity needs.</p>
            </motion.div>
            
            <div className="overflow-hidden mb-6">
                <div ref={firstRowRef} className="flex gap-4 py-4 carousel-row" style={{ width: 'fit-content' }}>
                    {duplicatedData.map((data, index) => (
                        <div className="carousel-item flex-shrink-0" key={`first-row-${index}`}>
                            <ReviewCard 
                                userName={data.userName} 
                                userTitle={data.userTitle} 
                                review={data.review} 
                                userImage={data.userImage} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden">
                <div ref={secondRowRef} className="flex gap-4 py-4 carousel-row" style={{ width: 'fit-content' }}>
                    {duplicatedData.map((data, index) => (
                        <div className="carousel-item flex-shrink-0" key={`second-row-${index}`}>
                            <ReviewCard 
                                userName={data.userName} 
                                userTitle={data.userTitle} 
                                review={data.review} 
                                userImage={data.userImage} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default TrustedByAll;