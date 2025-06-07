'use client'
import type { Editor } from 'grapesjs';
import AfterLoginHeader from "@/components/Layout/AfterLogin/Dashboard/header";
import GrapesJsStudio, {
    // StudioCommands,
    // ToastVariant,
} from '@grapesjs/studio-sdk/react';

import '@grapesjs/studio-sdk/style';
import Container from '@/components/Layout/Container';
import { useState } from 'react';
import { templates } from '@/entities/templates';



const VisualEditor = () => {
    const [editor, setEditor] = useState<Editor>();

    const onReady = (editor: Editor) => {
        console.log('Editor loaded', editor);
        setEditor(editor);
        // editor.loadProjectData({
        //     pages:
        //         templates.portfolio[1]
        // });
    };
    console.log(editor)

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
                        licenseKey: process.env.GRAPES_PUBLIC_KEY as string,
                        project: {
                            type: 'web',
                            default: {
                                pages: [
                                    {
                                        name: templates.portfolio.id2.name ,
                                        Component: templates.portfolio.id2.component,
                                        styles: templates.portfolio.id2.styles,
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