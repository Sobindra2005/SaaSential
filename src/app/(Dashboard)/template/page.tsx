"use client"
import React, { useState } from 'react';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { TemplateContainer } from '@/components/Layout/AfterLogin/template';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/utils/api';

interface TemplateData {
    _id: string;
    projectName: string;
    projectType: string;
    html: string;
    css: string;
    thumbnailImage: string;
    updatedAt: string
}

const TemplatePage = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
    const [click, setClick] = useState<number>(0);
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;

    const fetchTemplates = async () => {
        return api.get('/api/availableTemplates/');
    };

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

    const { data , isFetching   } = useQuery({
        queryKey: ['templates'],
        queryFn: fetchTemplates
    })

    return (
        <>
            <TemplateContainer isFetching={isFetching} slug={slug} templates={data?.data as TemplateData[]} selectedTemplate={selectedTemplate} handleTemplateClick={handleTemplateClick} handleSelectButtonClick={handleSelectButtonClick} />
        </>
    );
};

export default TemplatePage;