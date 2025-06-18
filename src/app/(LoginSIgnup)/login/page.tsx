"use client";
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import Container from '@/components/Layout/Container';
import Button from '@/components/Common/Buttons';
import Input from '@/components/Common/Input';
import { IoPeople } from 'react-icons/io5';
import { Notification } from '@/components/Common/notification';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

type LoginFormData = z.infer<typeof schema>;

const Login: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: session, status } = useSession();
    const [notification, setNotification] = useState({ visible: false, message: '', type:'success'});
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(schema)
    });

    useEffect(() => {
        // Handle error from URL
        const error = searchParams.get('error');
        if (error) {
            let errorMessage = 'An error occurred during authentication';
            switch (error) {
                case 'AccessDenied':
                    errorMessage = 'Access denied. Please check your credentials.';
                    break;
                case 'Configuration':
                    errorMessage = 'There is a problem with the server configuration.';
                    break;
                case 'Verification':
                    errorMessage = 'The verification token has expired or has already been used.';
                    break;
                default:
                    errorMessage = `Authentication error: ${error}`;
            }
            setNotification({
                visible: true,
                message: errorMessage,
                type: 'error'
            });
        }
    }, [searchParams]);

    useEffect(() => {
        if (status === 'authenticated' && session) {
            const callbackUrl = searchParams.get('callbackUrl') || '/home';
            router.push(callbackUrl);
        }
    }, [status, session, router, searchParams]);

    const handleLogin: SubmitHandler<LoginFormData> = async (data) => {
        try {
            setIsLoading(true);

            // First try to login directly with the backend
            const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            const loginData = await loginResponse.json();

            if (!loginResponse.ok) {
                throw new Error(loginData.message || 'Login failed');
            }

            // If backend login successful, proceed with NextAuth
            const result = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });


            if (result?.error) {
                setNotification({
                    visible: true,
                    message: result.error,
                    type: 'error'
                });
            } else if (result?.ok) {
                setNotification({
                    visible: true,
                    message: "successfully authenticated",
                    type: 'success'
                });
                const callbackUrl = searchParams.get('callbackUrl') || '/home';
                router.push(callbackUrl);
            }
        } catch (error) {
            console.error('Login error:', error);
            setNotification({
                visible: true,
                message: error instanceof Error ? error.message : 'An error occurred during login',
                type: 'error'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignLogin = () => {
        const callbackUrl = searchParams.get('callbackUrl') || '/home';
        signIn('google', { callbackUrl });
    };

    const handleGithubSignLogin = () => {
        const callbackUrl = searchParams.get('callbackUrl') || '/home';
        signIn('github', { callbackUrl });
    };

    // Show notification when errors occur
    useEffect(() => {
        if (errors.email) {
            setNotification({
                visible: true,
                message: errors.email.message || 'Invalid email address',
                type: 'error'
            });
        } else if (errors.password) {
            setNotification({
                visible: true,
                message: errors.password.message || 'Invalid password',
                type: 'error'
            });
        }
    }, [errors.email, errors.password]);

    const handleCloseNotification = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    if (status === 'loading') {
        return (
            <Container className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
                    <p className="mt-4 text-secondary">Loading...</p>
                </div>
            </Container>
        );
    }

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen py-2">
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
            <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Login to Your Account</h2>
            <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-md bg-primary p-8 rounded-lg shadow-md">
                <Input placeholder='eg: example@gmail.com' label="Email" type="email" id="email" enabledSparkle={false} register={register} required />
                <Input placeholder='eg: example@726$Rfs' label="Password" type="password" id="password" enabledSparkle={false} register={register} required />
                <Button type="primary" className="w-full py-2">
                    {isLoading ? 'Logging in...' : 'Login'}
                </Button>
            </form>

            <div className="flex justify-center mt-4">
                <button onClick={handleGoogleSignLogin} className="flex items-center justify-center p-2 border border-gray-700 rounded bg-gray-800 text-white mr-2">
                    <FcGoogle className="mr-2" /> Continue with Google
                </button>
                <button onClick={handleGithubSignLogin} className="flex items-center justify-center p-2 border border-gray-700 rounded bg-gray-800 text-white">
                    <FaGithub className="mr-2" /> Continue with GitHub
                </button>
            </div>

            <div className="mt-4 text-center">
                <p className="text-secondary">
                    {"Don't have an account?"}
                    <a href="/signup" className="text-secondary hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
            <Button onClick={() => router.push("/home")} type="tertiary" className="w-fit py-2 mt-5 flex items-center gap-2">
                <IoPeople size={22} /> Login as Guest
            </Button>
        </Container>
    );
};

export default Login;