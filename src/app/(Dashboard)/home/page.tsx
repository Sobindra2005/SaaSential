"use client"
import React, { useState } from 'react';
import Container from '@/components/Layout/Container';
import ProjectCard from '@/components/ui/cards/projectCrad';
import ProjectWizard from '@/components/forms/CreateProject';
import AfterLoginHeader from '../../../components/Layout/AfterLogin/Dashboard/header';
import { AnimatePresence } from 'framer-motion';
import { Notification } from '@/components/Common/notification';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
    const [showWizard, setShowWizard] = useState(false);
    const [notification, setNotification] = useState({ visible: false });
    const router = useRouter()
    const [projects, setProjects] = useState([
        {
            id: '1',
            projectName: 'Company Website',
            description: 'Main company website with product information and contact details',
            lastModified: '2024-02-20',
            projectImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: '2',
            projectName: 'Portfolio',
            description: 'Personal portfolio showcasing recent work and achievements',
            lastModified: '2024-02-18',
            projectImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: '3',
            projectName: 'Blog',
            description: 'Technical blog with articles and tutorials',
            lastModified: '2024-02-15',
            projectImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80'
        }
    ]);


    const handleCreateProject = (projectData: { template: string, name: string; templateDesign: string; templateId: string | null; description: string }) => {
        console.log(projectData)
        const newProject = {
            id: (projects.length + 1).toString(),
            template: projectData.template,
            projectName: projectData.name,
            description: projectData.description,
            templateDesign: projectData.templateDesign,
            templateId: projectData.templateId,
            lastModified: new Date().toISOString().split('T')[0],
            projectImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
        };
        setNotification({ visible: true, });
        setProjects([newProject, ...projects]);
        setShowWizard(false);
        projectData.templateDesign === 'ai' ? router.push('/visualEditor') : router.push(`/template/${projectData.template}`);
    };

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    return (
        <>
            <AfterLoginHeader onCreate={() => setShowWizard(true)} />
            <Container className="min-h-screen p-10 w-full mt-24  ml-24 ">
                <div className="fixed top-5 right-5 z-50">
                    <Notification
                        type={'success'}
                        message={'Project created successfully!'}
                        isVisible={notification.visible}
                        onClose={handleCloseNotification}
                        autoClose={true}
                        autoCloseTime={4000}
                    />
                </div>
                <AnimatePresence mode='wait'>
                    {showWizard && (
                        <div >
                            <ProjectWizard
                                onClose={() => setShowWizard(false)}
                                onComplete={handleCreateProject}
                            />
                        </div>
                    )}
                </AnimatePresence>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            projectName={project.projectName}
                            projectImage={project.projectImage}
                            description={project.description}
                            lastModified={project.lastModified}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Home;