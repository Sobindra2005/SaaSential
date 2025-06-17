"use client"
import React, { Suspense, useState, useEffect } from 'react';
import Container from '@/components/Layout/Container';
import ProjectCard from '@/components/ui/cards/projectCrad';
import ProjectWizard from '@/components/forms/CreateProject';
import AfterLoginHeader from '../../../components/Layout/AfterLogin/Dashboard/header';
import { AnimatePresence } from 'framer-motion';
import { Notification } from '@/components/Common/notification';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Loader from '@/components/Common/loading/loader';
import { templates } from '@/entities/templates';

interface Project {
    _id: string;
    projectName: string;
    projectImage: string;
    description: string;
    lastModified: string;
}

const Home: React.FC = () => {
    const [showWizard, setShowWizard] = useState(false);
    const [notification, setNotification] = useState({ visible: false });
    const router = useRouter();
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/userProjects');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                const simplifiedProjects = data.map((project: any) => ({
                    _id: project._id,
                    projectName: project.projectName,
                    projectImage: project.projectImage,
                    description: project.description,
                    lastModified: project.lastModified
                }));
                console.log(response)
                setProjects(simplifiedProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);



    const handleCreateProject = async (projectData: { template: string, name: string; templateDesign: string; templateId: string | null; description: string }) => {
        try {
            const response = await fetch('/api/userProjects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectName: projectData.name,
                    description: projectData.description,
                    template: projectData.template,
                    templateDesign: projectData.templateDesign,
                    templateId: projectData.templateId,
                    projectImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create project');
            }

            const newProject = await response.json();
            // Only keep the fields we need for display
            const simplifiedProject = {
                _id: newProject._id,
                projectName: newProject.projectName,
                projectImage: newProject.projectImage,
                description: newProject.description,
                lastModified: newProject.lastModified
            };
            setProjects(prevProjects => [simplifiedProject, ...prevProjects]);
            setNotification({ visible: true });
            setShowWizard(false);

            if (projectData.templateDesign === 'ai') {
                router.push(`/visualEditor/${newProject._id}`);
            } else {
                router.push(`/template/${projectData.template}`);
            }
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    return (
        <>
            <Suspense fallback={<Loader />}>
                <AfterLoginHeader onCreate={() => setShowWizard(true)} />
                <Container className={`${projects.length === 0 ? '' : 'min-h-screen'} p-10 w-full mt-24  ml-24 `}>
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
                    {projects.length === 0 ? (
                        <div className="flex flex-col items-center justify-center w-full h-[70vh] bg-transparent rounded-xl shadow-none">
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center flex-col justify-center items-center"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">No Projects Yet</h2>
                                <p className="text-gray-500 mb-1 text-base">Your creative journey starts here</p>
                                <p className="text-gray-400 mb-8 text-sm text-center">
                                    Build amazing applications without writing code. Drag, drop, <br />
                                    and deploy your ideas in minutes.
                                </p>
                                <div className="flex items-center justify-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setShowWizard(true)}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg font-medium shadow hover:from-blue-700 hover:to-purple-600 transition-colors"
                                    >
                                        + Create Your First Project
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project._id}
                                    projectId={project._id}
                                    projectName={project.projectName}
                                    projectImage={project.projectImage}
                                    description={project.description}
                                    lastModified={new Date(project.lastModified).toLocaleDateString()}
                                />
                            ))}
                        </div>
                    )}
                </Container>
            </Suspense>
        </>
    );
};

export default Home;