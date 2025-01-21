"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Container from '@/components/Layout/Container';
import Button from '@/components/Common/Buttons';
import Input from '@/components/Common/Input';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

type SignupFormData = z.infer<typeof schema>;

const Signup: React.FC = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<SignupFormData>({
        resolver: zodResolver(schema)
    });
  

    const handleSignup: SubmitHandler<SignupFormData> = (data) => {
        console.log('Signing up with', data.email, data.password);
        router.push('/dashboard'); // Redirect to dashboard after signup
    };

    const handleGoogleSignIn = () => {
        // Add your Google sign-in logic here
        console.log('Signing in with Google');
    };

    const handleGithubSignIn = () => {
        // Add your GitHub sign-in logic here
        console.log('Signing in with GitHub');
    };

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen py-2">

            <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Create Your Account</h2>
            <form onSubmit={handleSubmit(handleSignup)} className="w-full max-w-md bg-primary p-8 rounded-lg shadow-md">
                <Input placeholder='eg:example@gmail.com' label="Email" type="email" id="email" register={register} required />
                <Input placeholder='eg:Example#42$56' label="Password" type="password" id="password" register={register} required />
                <Input placeholder='eg:Example#42$56' label="Confirm Password" type="password" id="confirmPassword" register={register} required />
                <Button type="primary" className="w-full py-2">Sign Up</Button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-secondary">
                    Already have an account?{' '}
                    <a href="/login" className="text-secondary hover:underline">
                        Login
                    </a>
                </p>
            </div>

            <div className="flex justify-center mt-4">
                <button onClick={handleGoogleSignIn} className="flex items-center justify-center p-2 border border-gray-700 rounded bg-gray-800 text-white mr-2">
                    <FcGoogle className="mr-2" /> Sign in with Google
                </button>
                <button onClick={handleGithubSignIn} className="flex items-center justify-center p-2 border border-gray-700 rounded bg-gray-800 text-white">
                    <FaGithub className="mr-2" /> Sign in with GitHub
                </button>
            </div>
        </Container>
    );
};

export default Signup;
