"use client"
import React, { useState, useEffect } from 'react';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';
import { useRouter } from 'next/navigation';
import { useParams, useSearchParams } from 'next/navigation';
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

const TemplatePage = () => {
    const [templates, setTemplates] = useState<TemplateData[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
    const [click, setClick] = useState<number>(0);

    const router = useRouter();
    const params = useParams();
    const SearchParams = useSearchParams()
    const slug = params.slug as string;
    const id: string | null = SearchParams.get('data')
    let willFetch: boolean;
    let projectId: string;

    if (id?.split("-").length == 2) {
        willFetch = true;
        projectId = id.split("-")[1]
    }

    useEffect(() => {
        const fetchTemplates = async () => {
            const response = await fetch(`/api/availableTemplates?type=${slug}`);
            const data = await response.json();
            setTemplates(data);
        };

        fetchTemplates();
    }, [slug]);


    const handleTemplateClick = (template: TemplateData) => {
        setClick(click + 1);
        setSelectedTemplate(template);
        if (click == 2) {
            handleSelectButtonClick();
            setClick(0);
        }
    };

    const handleSelectButtonClick = async () => {
        if (selectedTemplate) {
      
            if (willFetch) {
                const response = await fetch(`/api/userProjects/${projectId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        html:selectedTemplate.html,
                        css:selectedTemplate.css
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to create project');
                }
            }
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
