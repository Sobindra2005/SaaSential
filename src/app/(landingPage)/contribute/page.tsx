"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '@/components/Layout/Container';
import AfterLoginHeader from '@/components/Layout/AfterLogin/Dashboard/header';
import Input, { TextArea } from '@/components/Common/Input';
import { Notification } from '@/components/Common/notification';


type FormData = {
    email: string;
    projectName: string;
    ProjectType: string;
    htmlCode: string;
    cssCode: string;
    thumbnail: FileList;
};

const ContributePage = () => {
    const { register, handleSubmit,reset} = useForm<FormData>();
    const [notification, setNotification] = useState({ visible: false, message: '', type: 'sucess' });

    const onSubmit = (data: FormData) => {
        const loadTemplatesinBackend = async () => {
            try {
                const response = await fetch('/api/availableTemplates', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        projectName: data.projectName,
                        projectType: data.ProjectType,
                        html: data.htmlCode,
                        css: data.cssCode,
                        thumbnailImage: "https://res.cloudinary.com/dz7oo3hci/image/upload/v1750249752/undraw_user-account_fvqa_nmu6do.png"
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to create template');
                }

                setNotification({
                    visible: true,
                    message: 'Your template has been submitted. Stay tuned!',
                    type: 'success'
                });

                reset({
                    ProjectType: '',
                    cssCode: '',
                    email: '',
                    projectName: '',
                    htmlCode:''
                });

            } catch (error) {
                console.error('Error fetching projects:', error);
            }


        }
        loadTemplatesinBackend()
    };

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    return (
        <>
            <AfterLoginHeader render={false} />
            <Container className="min-h-screen p-10 w-full mt-24 text-center flex flex-col items-center">
                <div className="fixed top-5 right-5 z-50">
                    <Notification
                        type={notification.type}
                        message={notification.message}
                        isVisible={notification.visible}
                        onClose={handleCloseNotification}
                        autoClose={true}
                        autoCloseTime={4000}
                    />
                </div>
                <h1 className="text-3xl font-bold mb-8">Contribute to SaaSential</h1>
                <form className="space-y-6 text-left" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        id="email"
                        label="Your Email"
                        type="email"
                        placeholder="email@example.com"
                        register={register}
                        enabledSparkle={false}
                        required
                    />

                    <Input
                        id="projectName"
                        label="Project Name"
                        type="text"
                        placeholder="eg:folio"
                        register={register}
                        enabledSparkle={false}
                        required
                    />

                    <Input
                        id="ProjectType"
                        label="Project Type"
                        type="text"
                        placeholder="eg:folio"
                        register={register}
                        enabledSparkle={false}
                        required
                    />

                    <div className="space-y-2">
                        <TextArea
                            id="htmlCode"
                            label="HTML Code"
                            placeholder="<div>Your HTML code here...</div>"
                            isGenerating={false}
                            required
                            register={register}
                            enabledSparkle={false}

                        />
                    </div>

                    <div className="space-y-2">
                        <TextArea
                            id="cssCode"
                            label="CSS Code"
                            placeholder=""
                            isGenerating={false}
                            required
                            register={register}
                            enabledSparkle={false}

                        />
                    </div>

                    {/* <div className="space-y-2">
                        <label htmlFor="thumbnail" className="block text-sm font-medium">
                            Thumbnail Image
                        </label>
                        <div
                            className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center cursor-pointer"
                            onClick={() => document.getElementById('thumbnail')?.click()}
                            onDrop={(e) => {
                                e.preventDefault();
                                const files = e.dataTransfer.files;
                                if (files.length > 0 && files[0].type.startsWith('image/')) {
                                    const fileInput = document.getElementById('thumbnail') as HTMLInputElement;
                                    if (fileInput) {
                                        fileInput.files = files;
                                        // Trigger change event to update form state
                                        const event = new Event('change', { bubbles: true });
                                        fileInput.dispatchEvent(event);
                                    }
                                }
                            }}
                            onDragOver={(e) => {
                                e.preventDefault();
                            }}
                        >
                        
                            {watch('thumbnail') && watch('thumbnail')[0] ? (
                                <>
                                    <Image
                                        src={URL.createObjectURL(watch('thumbnail')[0])}
                                        alt="Thumbnail preview"
                                        width={160}
                                        height={160}
                                        className="max-h-40 object-contain mb-2"
                                    />

                                    <p className="text-sm text-gray-500">Click or drop to change image</p>
                                </>
                            ) : (
                                <>
                                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="mt-2 text-sm text-gray-500">Drag and drop an image or click to browse</p>
                                </>
                            )}
                            <input
                                type="file"
                                id="thumbnail"
                                className="hidden" // Hide the input
                                accept="image/*"
                                required
                                {...register('thumbnail', { required: 'Thumbnail is required' })}
                            />
                            {errors.thumbnail && (
                                <p className="mt-1 text-sm text-red-600">{errors.thumbnail.message?.toString()}</p>
                            )}
                        </div>
                    </div> */}

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {'Submit Contribution'}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                        {"Thank you for contributing to SaaSential! We'll review your submission and get back to you soon."}
                    </p>
                </form>
            </Container>
        </>
    );
};

export default ContributePage;
