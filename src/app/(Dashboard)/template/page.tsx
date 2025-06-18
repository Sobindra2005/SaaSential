"use client"
import React, { useState, useEffect } from 'react';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { TemplateContainer } from '@/components/Layout/AfterLogin/template';

interface TemplateData {
    _id: string;
    projectName: string;
    projectType: string;
    html: string;
    css: string;
    thumbnailImage: string;
    updatedAt: string
}

// const sampleTemplates: TemplateData[] = [
//     templates.blog.id1,
//     templates.blog.id2,
//     templates.blog.id3,
//     templates.ecommerce.id1,
//     templates.ecommerce.id2,
//     templates.ecommerce.id3,
//     templates.portfolio.id1,
//     templates.portfolio.id2,
// ];

const TemplatePage = () => {
    const [templates, setTemplates] = useState<TemplateData[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
    const [click, setClick] = useState<number>(0);
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;


    useEffect(() => {
        const fetchTemplates = async () => {
            const response = await fetch('/api/availableTemplates/');
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
            router.push(`/visualEditor/${selectedTemplate._id}`);
        }
    };

    return (
        <>
            <AfterLoginHeader render={false} />
            <TemplateContainer slug={slug} templates={templates} selectedTemplate={selectedTemplate} handleTemplateClick={handleTemplateClick} handleSelectButtonClick={handleSelectButtonClick} />
        </>
    );
};

export default TemplatePage;
