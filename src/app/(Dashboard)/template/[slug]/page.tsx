"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams, useSearchParams } from 'next/navigation';
import { TemplateContainer } from '@/components/Layout/AfterLogin/template';
import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

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
    const SearchParams = useSearchParams()
    const slug = params.slug as string;
    const id: string | null = SearchParams.get('data')
    let willFetch: boolean;
    let projectId: string;

    if (id?.split("-").length == 2) {
        willFetch = true;
        projectId = id.split("-")[1]
    }

    const fetchTemplates = async () => {
        return api.get(`/api/availableTemplates?type=${slug}`);
    };

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
                        html: selectedTemplate.html,
                        css: selectedTemplate.css,
                        projectImage: selectedTemplate.thumbnailImage
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to create project');
                }
            }
            router.push(`/visualEditor/${selectedTemplate._id}`);
        }
    };

    const { data, isFetching } = useQuery({
        queryKey: ['project'],
        queryFn: fetchTemplates
    })

    return (
        <>
            <TemplateContainer isFetching={isFetching} slug={slug} templates={data?.data as TemplateData[]} selectedTemplate={selectedTemplate} handleTemplateClick={handleTemplateClick} handleSelectButtonClick={handleSelectButtonClick} />
        </>
    );
};

export default TemplatePage;
