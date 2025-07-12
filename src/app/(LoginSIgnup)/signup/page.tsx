"use client";
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Container from '@/components/Layout/Container';
import Button from '@/components/Common/Buttons';
import Input from '@/components/Common/Input';
import { Notification } from '@/components/Common/notification';
import { signIn, useSession } from 'next-auth/react';

const schema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof schema>;

const Signup: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: session, status } = useSession();
    const [notification, setNotification] = useState({ visible: false, message: '', type: 'error' as const });
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
        resolver: zodResolver(schema)
    });

    useEffect(() => {
        if (status === 'authenticated' && session) {
            const callbackUrl = searchParams.get('callbackUrl') || '/home';
            router.push(callbackUrl);
        }
    }, [status, session, router, searchParams]);

    const handleSignup: SubmitHandler<SignupFormData> = async (data) => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Registration failed');
            }

            // Sign in the user after successful registration
            const signInResult = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            if (signInResult?.error) {
                throw new Error(signInResult.error);
            }

            const callbackUrl = searchParams.get('callbackUrl') || '/home';
            router.push(callbackUrl);
        } catch (error) {
            setNotification({
                visible: true,
                message: error instanceof Error ? error.message : 'An error occurred during registration',
                type: 'error'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        const callbackUrl = searchParams.get('callbackUrl') || '/home';
        signIn('google', { callbackUrl });
    };

    const handleGithubSignIn = () => {
        const callbackUrl = searchParams.get('callbackUrl') || '/home';
        signIn('github', { callbackUrl });
    };

    // Show notification when errors occur
    useEffect(() => {
        if (errors.name) {
            setNotification({
                visible: true,
                message: errors.name.message || 'Invalid name',
                type: 'error'
            });
        } else if (errors.email) {
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
        } else if (errors.confirmPassword) {
            setNotification({
                visible: true,
                message: errors.confirmPassword.message || 'Passwords do not match',
                type: 'error'
            });
        }
    }, [errors.name, errors.email, errors.password, errors.confirmPassword]);

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
            <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Create Your Account</h2>
            <form onSubmit={handleSubmit(handleSignup)} className="w-full max-w-md bg-primary p-8 rounded-lg shadow-md">
                <Input placeholder='eg: John Doe' label="Name" type="text" id="name" enabledSparkle={false} register={register} required />
                <Input placeholder='eg: example@gmail.com' label="Email" type="email" id="email" enabledSparkle={false} register={register} required />
                <Input placeholder='eg: example@726$Rfs' label="Password" type="password" id="password" enabledSparkle={false} register={register} required />
                <Input placeholder='eg: example@726$Rfs' label="Confirm Password" type="password" id="confirmPassword" enabledSparkle={false} register={register} required />
                <Button ButtonType="primary" className="w-full py-2">
                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                </Button>
            </form>

            <div className="flex justify-center mt-4">
                <button onClick={handleGoogleSignIn} className="flex items-center justify-center p-2 border border-gray-700 rounded bg-gray-800 text-white mr-2">
                    <FcGoogle className="mr-2" /> Sign in with Google
                </button>
                <button onClick={handleGithubSignIn} className="flex items-center justify-center p-2 border border-gray-700 rounded bg-gray-800 text-white">
                    <FaGithub className="mr-2" /> Sign in with GitHub
                </button>
            </div>

            <div className="mt-4 text-center">
                <p className="text-secondary">
                    Already have an account?
                    <a href="/login" className="text-secondary hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </Container>
    );
};

export default Signup;
