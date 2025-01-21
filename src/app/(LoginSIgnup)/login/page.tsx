"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Container from '@/components/Layout/Container';
import Button from '@/components/Common/Buttons';
import Input from '@/components/Common/Input';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

type LoginFormData = z.infer<typeof schema>;

const Login: React.FC = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(schema)
    });

    const handleLogin: SubmitHandler<LoginFormData> = (data) => {
        console.log('Logging in with', data.email, data.password);
        router.push('/dashboard'); // Redirect to dashboard after login
    };

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Login to Your Account</h2>
            <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-md bg-primary p-8 rounded-lg shadow-md">
                <Input label="Email" type="email" id="email" register={register} required />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <Input label="Password" type="password" id="password" register={register} required />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                <Button type="primary" className="w-full py-2">Login</Button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-secondary">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-secondary hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>

        </Container>
    );
};

export default Login;
