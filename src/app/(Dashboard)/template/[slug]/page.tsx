"use client"
import React, { useState, useEffect } from 'react';
import Container from '@/components/Layout/Container';
import AfterLoginHeader from '../../../../components/Layout/AfterLogin/Dashboard/header';
import SearchBar from '@/components/Common/searchBar';
import {  GripHorizontal } from 'lucide-react';
import Image from 'next/image';

interface TemplateData {
    id: string;
    name: string;
    image: string;
}

const sampleTemplates: TemplateData[] = [
    {
        id: "1",
        name: 'Blog Template',
        image: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66cca67ec447bd92b80d6521_646bbdd902be8595a4d0b7e9_Superlist.png',
    },
    {
        id: "2",
        name: 'Ecommerce Template',
        image: 'https://i.pinimg.com/736x/f3/7c/ef/f37cef3dc1024d0dd884f4bb61c2423f.jpg',
    },
    {
        id: "3",
        name: 'Hotel template',
        image: 'https://i.pinimg.com/236x/3c/a4/19/3ca4197154b515b3471863682a415c7a.jpg',
    },
];

const TemplatePage = () => {
    const [templates, setTemplates] = useState<TemplateData[]>(sampleTemplates);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);

    useEffect(() => {
        const fetchTemplates = async () => {
            const response = await fetch('/api/templates');
            const data = await response.json();
            setTemplates(data);
        };

        fetchTemplates();
    }, []);

    useEffect(() => {
        setTemplates(sampleTemplates);
    }, []);

    const handleTemplateClick = (template: TemplateData) => {

        if (selectedTemplate === template) {
            return setSelectedTemplate(null);
        }
        return setSelectedTemplate(template);


    };

    const handleSelectButtonClick = () => {
        if (selectedTemplate) {
            console.log(`Selected template with id: ${selectedTemplate.id}`);
        }
    };

    return (
        <>
            <AfterLoginHeader render={false} />

            <Container className="min-h-screen p-10 w-full mt-24 ml-24 text-center flex flex-col items-center">
                <h1 className='text-4xl font-bold text-secondary'>Select the Site That Speaks to You</h1>
                <SearchBar placeholder='Search for your perfect template...' className='mt-6' />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-24 capitalize">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className={`shadow-md relative text-white overflow-hidden  `}

                        >
                            <div className={`${selectedTemplate?.id === template.id ? 'border-2 border-blue-500' : ''}`}>
                                <div className='w-full h-5 bg-gray-400 relative'>
                                    <span className='absolute top-0 left-0 text-border'><GripHorizontal /></span>
                                </div>
                                <div onClick={() => handleTemplateClick(template)} className={`w-full h-[14rem] relative group `}>
                                    <Image height={200} width={400} src={template.image} alt={template.name} className={`w-full h-full object-cover object-center `} />
                                    <div className='w-full h-full z-10 absolute top-0 left-0 bg-blue-400 bg-opacity-40 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{template.name}</h2>
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

export default TemplatePage;
