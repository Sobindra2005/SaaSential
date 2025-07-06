
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChartBar, FaEdit, FaTrash, FaLink } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectCardProps {
    projectId: string;
    projectName: string;
    projectImage: string;
    description: string;
    lastModified: string;
    onAnalytics?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    onLink?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectId, projectName, projectImage, description, lastModified, onAnalytics, onEdit, onDelete, onLink }) => {
    return (
        <Link href={`/visualEditor/${projectId}`}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: "easeInOut"
                }}
                className="relative shadow-lg flex flex-col justify-start rounded-lg p-4 sm:p-6 mb-4 border border-gray-800 w-full min-h-[20rem] sm:min-h-[22rem]"
            >
                <div>
                    <Image src={projectImage} height={200} width={300} alt={projectName} className="w-full h-[10rem] sm:h-[13rem] object-cover object-center rounded-lg mb-2 sm:mb-4" />
                    <h1 className="mb-1 sm:mb-2 text-xl sm:text-2xl">{projectName}</h1>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">{description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-gray-400 truncate mr-2">{"Last modified : "}{lastModified}</span>
                    <div className="flex gap-2 sm:gap-5 flex-shrink-0">
                        <button onClick={onAnalytics}><FaChartBar /></button>
                        <button onClick={onEdit}><FaEdit /></button>
                        <button onClick={onLink}><FaLink /></button>
                        <button onClick={onDelete}><FaTrash /></button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;
