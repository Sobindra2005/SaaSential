'use client'
import type { Editor } from 'grapesjs';
import AfterLoginHeader from "@/components/Layout/AfterLogin/Dashboard/header";
import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import { useParams } from 'next/navigation';
import '@grapesjs/studio-sdk/style';
import Container from '@/components/Layout/Container';
import { templates } from '@/entities/templates';
import { useEffect, useState } from 'react';

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

const VisualEditor = () => {
    const params = useParams();
    const slug = params.slug as string;
    const [editor, setEditor] = useState<Editor | null>(null);

    const onReady = async (editor: Editor) => {
        setEditor(editor);
        await fetchTemplates(editor);
    };

    const fetchTemplates = async (editor: Editor) => {
        try {
            const response = await fetch(`/api/userProjects/${slug}`);
            if (response.ok) {
                const projectData = await response.json();
                if (projectData.html && projectData.css) {
                    editor.loadProjectData({
                        pages: [
                            {
                                name: projectData.projectName,
                                component: projectData.html,
                                styles: projectData.css,
                            }
                        ]
                    });
                    return;
                }
            }
            
            const data = await sampleTemplates.find(template => template.id === slug) || sampleTemplates[0];
            editor.loadProjectData({
                pages: [
                    {
                        name: data.name,
                        component: data.component,
                        styles: data.style,
                    }
                ]
            });
        } catch (error) {
            console.error('Error loading project:', error);
        }
    };

    const updateProject = async () => {
        if (!editor) return;

        try {
            const html = editor.getHtml();
            const css = editor.getCss();

            const response = await fetch(`/api/userProjects/${slug}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    html,
                    css
                }),
            });
            

            if (!response.ok) {
                throw new Error('Failed to update project');
            }

            console.log('Project updated successfully');
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    useEffect(() => {
        if (!editor) return;

        const autoSaveInterval = setInterval(() => {
            updateProject();
        }, 30000);

        return () => clearInterval(autoSaveInterval);
    }, [editor]);

    // const showToast = (id: string) =>
    //     editor?.runCommand(StudioCommands.toastAdd, {
    //         id,
    //         header: 'Toast header',
    //         content: 'Data logged in console',
    //         variant: ToastVariant.Info,
    //     });

    // const getProjetData = () => {
    //     if (editor) {
    //         console.log({ projectData: editor?.getProjectData() });
    //         showToast('log-project-data');
    //     }
    // };

    // const getExportData = () => {
    //     if (editor) {
    //         console.log({ html: editor?.getHtml(), css: editor?.getCss() });
    //         showToast('log-html-css');
    //     }
    // };

    return (
        <>
            <AfterLoginHeader render={false} />
            <Container padding='0px' className='mt-4 pt-[57px] w-full h-screen'>
                <GrapesJsStudio
                    style={{ minHeight: "100%" }}
                    onReady={onReady}
                    onUpdate={updateProject}
                    options={{
                        licenseKey: process.env.NEXT_PUBLIC_GRAPES_PUBLIC_KEY as string,
                        project: {
                            type: 'web',
                            default: {
                                pages: [
                                    {
                                        // Default empty page
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