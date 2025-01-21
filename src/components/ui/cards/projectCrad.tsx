
"use client"
import React from 'react';
import { motion } from 'framer-motion'; 2
import Image from 'next/image';
import { FaChartBar, FaEdit, FaTrash, FaLink } from 'react-icons/fa';

interface ProjectCardProps {
    projectName: string;
    projectImage: string;
    description: string;
    lastModified: string;
    onAnalytics?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    onLink?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, projectImage, description, lastModified, onAnalytics, onEdit, onDelete, onLink }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.1,
                duration: 0.7,
                ease: "easeInOut"
            }}
            className="relative shadow-lg flex flex-col justify-start rounded-lg p-6 mb-4 border border-gray-800 min-w-[25rem] min-h-[22rem]"
        >
            <div >
                <Image src={projectImage} height={200} width={300} alt={projectName} className="w-full h-[13rem] object-cover object-center rounded-lg mb-4" />
                <h1 className="mb-2 text-2xl ">{projectName}</h1>
                <p className="text-sm text-gray-400 mb-4  ">{description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-400">{"Last modified : "}{lastModified}</span>
                <div className="flex gap-5">
                    <button onClick={onAnalytics}><FaChartBar /></button>
                    <button onClick={onEdit}><FaEdit /></button>
                    <button onClick={onLink}><FaLink /></button>
                    <button onClick={onDelete}><FaTrash /></button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
