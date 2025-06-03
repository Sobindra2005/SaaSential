"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Container from '@/components/Layout/Container';
import Button from '@/components/Common/Buttons';
import Input from '@/components/Common/Input';
import { IoPeople } from 'react-icons/io5';
import { Notification } from '@/components/Common/notification';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

type LoginFormData = z.infer<typeof schema>;

const Login: React.FC = () => {
    const router = useRouter();
    const [notification, setNotification] = useState({ visible: false, message: '', type: 'error' as const });

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(schema)
    });

    const handleLogin: SubmitHandler<LoginFormData> = (data) => {
        console.log('Logging in with', data.email, data.password);
        router.push('/dashboard'); // Redirect to dashboard after login
    };

    // Show notification when errors occur
    React.useEffect(() => {
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
                <Button type="primary" className="w-full py-2">Login</Button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-secondary">
                    {"Don't have an account?"}
                    <a href="/signup" className="text-secondary hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
            <Button onClick={() => router.push("/home")} type="tertiary" className="w-fit py-2 mt-5 flex items-center gap-2 "><IoPeople size={22} />{"Login as Guest"} </Button>
        </Container>
    );
};

export default Login;