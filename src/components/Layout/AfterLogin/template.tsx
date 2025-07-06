'use client'

import React from 'react';
import Container from '@/components/Layout/Container';
import SearchBar from '@/components/Common/searchBar';
import { GripHorizontal } from 'lucide-react';
import Image from 'next/image';
import { DivFetchIndicator } from '@/components/Common/loading/divFetchingIndicator'

interface TemplateData {
    _id: string;
    projectName: string;
    projectType: string;
    html: string;
    css: string;
    thumbnailImage: string;
    updatedAt: string
}


interface templatePage {
    slug: string;
    templates: TemplateData[]
    selectedTemplate: TemplateData | null;
    handleTemplateClick: (template: TemplateData) => void;
    handleSelectButtonClick: () => void;
    isFetching: boolean
}

const HeaderPart = ({ slug }: { slug: string }) => {
    return (<>
        <h1 className='text-4xl font-bold text-secondary'>
            {slug === 'blog' && 'Create Your Professional Blog'}
            {slug === 'ecommerce' && 'Build Your Online Store'}
            {slug === 'portfolio' && 'Showcase Your Portfolio'}
            {!['blog', 'ecommerce', 'portfolio'].includes(slug) && 'Select the Site That Speaks to You'}
        </h1>
        <SearchBar placeholder='Search for your perfect template...' className='mt-6' />
    </>
    )
}

export const TemplateContainer: React.FC<templatePage> = ({ slug, templates, selectedTemplate, handleTemplateClick, handleSelectButtonClick, isFetching }) => {
    if (isFetching) {
        return (
            <>
                <Container className="min-h-screen p-10 w-full mt-24 ml-24 text-center flex flex-col items-center">
                    <HeaderPart slug={slug} />
                    <DivFetchIndicator />
                </Container>
            </>
        );
    }
    else return (
        <>
            <Container className="min-h-screen p-10 w-full mt-24 ml-16  md:ml-24  text-center flex flex-col items-center">

                <HeaderPart slug={slug} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-24 capitalize">
                    {templates.map((template) => (
                        <div
                            key={template._id}
                            className={`shadow-md relative text-white overflow-hidden  `}
                        >
                            <div className={`${selectedTemplate?._id === template._id ? 'border-2 border-blue-500' : ''}`}>
                                <div className='w-full h-5 bg-gray-400 relative'>
                                    <span className='absolute top-0 left-0 text-border'><GripHorizontal /></span>
                                </div>
                                <div onClick={() => handleTemplateClick(template)} className={`w-full h-[14rem] relative group `}>
                                    <Image height={200} width={400} src={template.thumbnailImage} alt={template.projectName} className={`w-full h-full object-cover object-center `} />
                                    <div className='w-full h-full z-2 absolute top-0 left-0 bg-blue-400 bg-opacity-40 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{template.projectName}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedTemplate && (
                    <button
                        className="mt-10 px-6 py-3 bg-blue-500 fixed bottom-6 right-2 text-white font-semibold rounded"
                        onClick={handleSelectButtonClick}
                    >
                        Select
                    </button>
                )}
            </Container>
        </>
    );
};


