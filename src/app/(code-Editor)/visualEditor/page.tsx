'use client'
import type { Editor } from 'grapesjs';
import AfterLoginHeader from "@/components/Layout/AfterLogin/Dashboard/header";
import GrapesJsStudio, {
    StudioCommands,
    ToastVariant,
} from '@grapesjs/studio-sdk/react';

import '@grapesjs/studio-sdk/style';
import Container from '@/components/Layout/Container';
import { useState } from 'react';

const VisualEditor = () => {
    const [editor, setEditor] = useState<Editor>();

    const onReady = (editor: Editor) => {
        console.log('Editor loaded', editor);
        setEditor(editor);
    };

    const showToast = (id: string) =>
        editor?.runCommand(StudioCommands.toastAdd, {
            id,
            header: 'Toast header',
            content: 'Data logged in console',
            variant: ToastVariant.Info,
        });

    const getProjetData = () => {
        if (editor) {
            console.log({ projectData: editor?.getProjectData() });
            showToast('log-project-data');
        }
    };

    const getExportData = () => {
        if (editor) {
            console.log({ html: editor?.getHtml(), css: editor?.getCss() });
            showToast('log-html-css');
        }
    };
    return (
        <>
            <AfterLoginHeader render={false} />
            <Container className='mt-4  pt-[57px]'>
                <GrapesJsStudio
                    style={{ minHeight: "100vh" }}
                    onReady={onReady}
                    options={{
                        licenseKey: '6b3f94ce8ffc4f0794a677517987a886c60c479ad1fa40f6812f007b3f2387c0',
                        project: {
                            default: {
                                pages: [
                                    {
                                        name: 'Home',
                                        component: `<h1 style="padding: 2rem; text-align: center">
                      hiiii
                    </h1>`,
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