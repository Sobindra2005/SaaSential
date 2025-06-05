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

const VisualEditor = () => {
    const [editor, setEditor] = useState<Editor>();

    const onReady = (editor: Editor) => {
        console.log('Editor loaded', editor);
        setEditor(editor);
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
                        licenseKey: '6b3f94ce8ffc4f0794a677517987a886c60c479ad1fa40f6812f007b3f2387c0',
                        project: {
                            type: 'web',
                            default: {
                                pages: [
                                    { 
                                        name: 'Home', 
                                        component: `
                                            <header class="hero-section" style="background: linear-gradient(135deg, #6366F1, #8B5CF6); color: white; padding: 120px 0; text-align: center;">
                                                <h1 style="font-size: 3.5rem; margin-bottom: 20px;">Welcome to Our Platform</h1>
                                                <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto 30px;">The all-in-one solution for your business needs with powerful tools and intuitive design.</p>
                                                <div>
                                                    <button style="background: white; color: #6366F1; border: none; padding: 12px 28px; font-size: 1rem; border-radius: 30px; font-weight: bold; margin: 0 10px; cursor: pointer;">Get Started</button>
                                                    <button style="background: transparent; color: white; border: 2px solid white; padding: 12px 28px; font-size: 1rem; border-radius: 30px; font-weight: bold; cursor: pointer;">Learn More</button>
                                                </div>
                                            </header>
                                            <section style="padding: 80px 20px; text-align: center; background: #f8f9fa;">
                                                <h2 style="font-size: 2.5rem; margin-bottom: 50px; color: #333;">Our Features</h2>
                                                <div style="display: flex; justify-content: space-around; flex-wrap: wrap; max-width: 1200px; margin: 0 auto;">
                                                    <div style="flex: 1; min-width: 250px; margin: 20px; padding: 30px; background: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                                        <div style="font-size: 2.5rem; color: #6366F1; margin-bottom: 20px;">🚀</div>
                                                        <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #333;">Lightning Fast</h3>
                                                        <p style="color: #666;">Experience unmatched speed and performance with our optimized platform.</p>
                                                    </div>
                                                    <div style="flex: 1; min-width: 250px; margin: 20px; padding: 30px; background: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                                        <div style="font-size: 2.5rem; color: #6366F1; margin-bottom: 20px;">🛡️</div>
                                                        <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #333;">Secure</h3>
                                                        <p style="color: #666;">Your data is protected with enterprise-grade security measures.</p>
                                                    </div>
                                                    <div style="flex: 1; min-width: 250px; margin: 20px; padding: 30px; background: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                                        <div style="font-size: 2.5rem; color: #6366F1; margin-bottom: 20px;">📱</div>
                                                        <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #333;">Responsive</h3>
                                                        <p style="color: #666;">Perfect experience on every device, from mobile to desktop.</p>
                                                    </div>
                                                </div>
                                            </section>
                                        `
                                    },
                                    { 
                                        name: 'About', 
                                        component: `
                                            <section class="about-hero" style="background: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80') center/cover; height: 500px; position: relative;">
                                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6);"></div>
                                                <div style="position: relative; z-index: 2; color: white; text-align: center; padding: 150px 20px;">
                                                    <h1 style="font-size: 3.5rem; margin-bottom: 20px;">Our Story</h1>
                                                    <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto;">We're on a mission to transform how businesses operate in the digital age.</p>
                                                </div>
                                            </section>
                                            <section style="padding: 100px 20px; max-width: 1200px; margin: 0 auto;">
                                                <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 40px;">
                                                    <div style="flex: 1; min-width: 300px;">
                                                        <h2 style="font-size: 2rem; margin-bottom: 25px; color: #333;">Who We Are</h2>
                                                        <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 20px;">Founded in 2020, our company has quickly grown from a small startup to an industry leader. We believe in creating products that not only solve problems but delight users.</p>
                                                        <p style="font-size: 1.1rem; line-height: 1.7; color: #555;">Our team of experts brings decades of combined experience in technology, design, and business strategy to create solutions that stand out in today's competitive market.</p>
                                                    </div>
                                                    <div style="flex: 1; min-width: 300px;">
                                                        <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80" style="width: 100%; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);" alt="Team collaboration">
                                                    </div>
                                                </div>
                                            </section>
                                            <section style="background: #f8f9fa; padding: 80px 20px;">
                                                <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
                                                    <h2 style="font-size: 2rem; margin-bottom: 50px; color: #333;">Our Values</h2>
                                                    <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                                                        <div style="flex: 1; min-width: 200px; margin: 20px; padding: 30px;">
                                                            <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #6366F1;">Innovation</h3>
                                                            <p style="color: #666;">We constantly push the boundaries of what's possible.</p>
                                                        </div>
                                                        <div style="flex: 1; min-width: 200px; margin: 20px; padding: 30px;">
                                                            <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #6366F1;">Quality</h3>
                                                            <p style="color: #666;">We never compromise on the excellence of our products.</p>
                                                        </div>
                                                        <div style="flex: 1; min-width: 200px; margin: 20px; padding: 30px;">
                                                            <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #6366F1;">Integrity</h3>
                                                            <p style="color: #666;">We build trust through transparent and ethical practices.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        `
                                    },
                                    { 
                                        name: 'Contact', 
                                        component: `
                                            <section style="background: linear-gradient(135deg, #4F46E5, #7C3AED); color: white; padding: 80px 20px; text-align: center;">
                                                <h1 style="font-size: 3rem; margin-bottom: 20px;">Get In Touch</h1>
                                                <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto 30px;">We'd love to hear from you. Our team is always ready to help with any questions you may have.</p>
                                            </section>
                                            <section style="padding: 80px 20px; max-width: 1200px; margin: 0 auto;">
                                                <div style="display: flex; flex-wrap: wrap; gap: 40px;">
                                                    <div style="flex: 1; min-width: 300px;">
                                                        <h2 style="font-size: 2rem; margin-bottom: 25px; color: #333;">Contact Us</h2>
                                                        <form style="display: flex; flex-direction: column; gap: 20px;">
                                                            <div>
                                                                <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 500;">Name</label>
                                                                <input type="text" placeholder="Your name" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                                                            </div>
                                                            <div>
                                                                <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 500;">Email</label>
                                                                <input type="email" placeholder="Your email" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
                                                            </div>
                                                            <div>
                                                                <label style="display: block; margin-bottom: 8px; color: #555; font-weight: 500;">Message</label>
                                                                <textarea placeholder="Your message" rows="5" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;"></textarea>
                                                            </div>
                                                            <button type="submit" style="background: #6366F1; color: white; border: none; padding: 14px; font-size: 1rem; border-radius: 6px; cursor: pointer; font-weight: 500;">Send Message</button>
                                                        </form>
                                                    </div>
                                                    <div style="flex: 1; min-width: 300px;">
                                                        <h2 style="font-size: 2rem; margin-bottom: 25px; color: #333;">Our Information</h2>
                                                        <div style="margin-bottom: 25px;">
                                                            <h3 style="font-size: 1.3rem; color: #6366F1; margin-bottom: 10px;">Address</h3>
                                                            <p style="color: #666; line-height: 1.6;">123 Business Avenue, Suite 100<br>San Francisco, CA 94107</p>
                                                        </div>
                                                        <div style="margin-bottom: 25px;">
                                                            <h3 style="font-size: 1.3rem; color: #6366F1; margin-bottom: 10px;">Email</h3>
                                                            <p style="color: #666; line-height: 1.6;">info@company.com<br>support@company.com</p>
                                                        </div>
                                                        <div>
                                                            <h3 style="font-size: 1.3rem; color: #6366F1; margin-bottom: 10px;">Phone</h3>
                                                            <p style="color: #666; line-height: 1.6;">+1 (555) 123-4567<br>+1 (555) 765-4321</p>
                                                        </div>
                                                        <div style="margin-top: 30px;">
                                                            <h3 style="font-size: 1.3rem; color: #6366F1; margin-bottom: 15px;">Follow Us</h3>
                                                            <div style="display: flex; gap: 15px;">
                                                                <a href="#" style="display: inline-block; padding: 10px; background: #f5f5f5; border-radius: 50%; color: #6366F1;">FB</a>
                                                                <a href="#" style="display: inline-block; padding: 10px; background: #f5f5f5; border-radius: 50%; color: #6366F1;">TW</a>
                                                                <a href="#" style="display: inline-block; padding: 10px; background: #f5f5f5; border-radius: 50%; color: #6366F1;">IG</a>
                                                                <a href="#" style="display: inline-block; padding: 10px; background: #f5f5f5; border-radius: 50%; color: #6366F1;">LI</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        `
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