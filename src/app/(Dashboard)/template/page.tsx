"use client"
import React, { useState, useEffect } from 'react';
import Container from '@/components/Layout/Container';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';
import SearchBar from '@/components/Common/searchBar';
import { GripHorizontal } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { templates } from '@/entities/templates';

interface TemplateData {
    id: string;
    name: string;
    component: string;
    style: string;
    image: string;
}

const sampleTemplates: TemplateData[] = [
    templates.blog.id1,
    templates.blog.id2,
    templates.blog.id3,
    templates.ecommerce.id1,
    templates.ecommerce.id2,
    templates.ecommerce.id3,
    templates.portfolio.id1,
    templates.portfolio.id2,
];

const TemplatePage = () => {
    const [templates, setTemplates] = useState<TemplateData[]>(sampleTemplates);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
    const [click, setClick] = useState<number>(0);
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;


    useEffect(() => {
        const fetchTemplates = async () => {
            const response = await fetch('/api/templates');
            const data = await response.json();
            setTemplates(data);
        };

        fetchTemplates();
    }, []);


    const handleTemplateClick = (template: TemplateData) => {
        setClick(click + 1);
        setSelectedTemplate(template);
        if (click == 2) {
            handleSelectButtonClick();
            setClick(0);
        }
    };

    const handleSelectButtonClick = () => {
        if (selectedTemplate) {
            router.push(`/visualEditor/${selectedTemplate.id}`);
        }
    };

    return (
        <>
            <AfterLoginHeader render={false} />
            <Container className="min-h-screen p-10 w-full mt-24 ml-24 text-center flex flex-col items-center">
                <h1 className='text-4xl font-bold text-secondary'>
                    {slug === 'blog' && 'Create Your Professional Blog'}
                    {slug === 'ecommerce' && 'Build Your Online Store'}
                    {slug === 'portfolio' && 'Showcase Your Portfolio'}
                    {!['blog', 'ecommerce', 'portfolio'].includes(slug) && 'Select the Site That Speaks to You'}
                </h1>
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
            </Container>
        </>
    );
};

export default TemplatePage;
