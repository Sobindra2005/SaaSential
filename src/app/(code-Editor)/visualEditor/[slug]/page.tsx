'use client'
import type { Editor } from 'grapesjs';
import AfterLoginHeader from "@/components/Layout/AfterLogin/Dashboard/header";
import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import { useParams } from 'next/navigation';
import '@grapesjs/studio-sdk/style';
import Container from '@/components/Layout/Container';
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

const VisualEditor = () => {
    const params = useParams();
    const slug = params.slug as string;

    const onReady = async (editor: Editor) => {
        await fetchTemplates(editor);
    };

    const fetchTemplates = async (editor: Editor) => {
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
    }


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
                    options={{
                        licenseKey: process.env.NEXT_PUBLIC_GRAPES_PUBLIC_KEY as string,
                        project: {
                            type: 'web',
                            default: {
                                pages: [
                                    {

                                    },
                                ],
                            },
                        },
                    }}
                />
            </Container>
        </>
    )
}

export default VisualEditor;