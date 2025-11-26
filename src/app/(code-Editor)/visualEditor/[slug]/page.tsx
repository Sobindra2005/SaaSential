'use client'
import { Editor } from 'grapesjs';
import AfterLoginHeader from "@/components/Layout/AfterLogin/Dashboard/header";
import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import { useParams } from 'next/navigation';
import '@grapesjs/studio-sdk/style';
import Container from '@/components/Layout/Container';
import { api } from '@/utils/api';
import { useEffect, useState } from 'react';

interface TemplateData {
    _id: string;
    projectName: string;
    projectType: string;
    html: string;
    css: string;
    thumbnailImage: string;
    updatedAt: string
}

const VisualEditor = () => {
    const params = useParams();
    const slug = params.slug as string;
    const [currentProject, setCurrentProject] = useState<TemplateData | null>(null);
    const [editor, setEditor] = useState<Editor | null>(null);

    const fetchData = async () => {
        try {
            const ownProjects = await api.get(`/api/userProjects/${slug}`);
            let response = ownProjects;

            if (ownProjects.status == 404) {
                const template = await api.get(`/api/availableTemplates/${slug}`);
                response = template;
            }

            setCurrentProject(response.data as TemplateData);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    const loadProjectIntoEditor = (editor: Editor, projectData: TemplateData) => {
        editor.loadProjectData({
            pages: [
                {
                    name: projectData.projectName,
                    component: projectData.html,
                    styles: projectData.css,
                }
            ]
        });
    };

    const onReady = async (editorInstance: Editor) => {
        setEditor(editorInstance);
        if (currentProject) {
            loadProjectIntoEditor(editorInstance, currentProject);
        }
    };

    useEffect(() => {
        fetchData();
    }, [slug]);

    useEffect(() => {
        if (editor && currentProject) {
            setTimeout(() => {
                loadProjectIntoEditor(editor, currentProject);
                editor?.on('update', () => {
                    if (currentProject) {
                        updateData(editor, currentProject);
                    }
                });
            }, 100);
        }
    }, [editor, currentProject, fetchData])



    const updateData = async (editorInstance: Editor, currentProject: TemplateData) => {
        console.log(editor)
        const html = editorInstance.getHtml();
        const css = editorInstance.getCss();
        const response = await api.put(`/api/userProjects/${currentProject._id}`, {
            html: html,
            css: css
        });
        if (response.status !== 200) {
            throw new Error('Failed to update project');
        }
    }

    return (
        <>
            <AfterLoginHeader/>
            <Container padding='0px' className=' w-full h-screen'>
                <GrapesJsStudio
                    style={{ minHeight: "100%" }}
                    onReady={onReady}
                    options={{
                        licenseKey: process.env.NEXT_PUBLIC_GRAPES_PUBLIC_KEY as string,
                        project: {
                            type: 'web',
                            default: {
                                pages: [
                                    {
                                        name: 'Main page',
                                        component: currentProject?.html || '<div>Loading...</div>',
                                        styles: currentProject?.css || '',
                                    },
                                ],
                            },
                        },
                    }}
                />
            </Container>
        </>
    );
};

export default VisualEditor;