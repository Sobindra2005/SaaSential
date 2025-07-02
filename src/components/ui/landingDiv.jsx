'use client'

import { ChevronDown, Layout, Users, Database, BarChart3, Globe, FileCode, Palette, Settings } from 'lucide-react'
import Link from "next/link"

export default function LandingDiv() {
    return (
        <div

            className="flex insideBottomShadow rounded-xl w-full h-auto bg-gradient-to-b from-[#0a061e] to-[#030014]  ">
            <div className="min-w-[10rem] hidden md:block border-r border-gray-800">
                {/* Brand header */}
                <div className="flex items-center gap-2 p-4 border-b border-gray-800">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <div> {"Saa"}<span className='text-purple-400'>{"Sential"}</span></div>
                    <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
                </div>

                {/* Main navigation */}
                <div className="p-4  mask-image-linear-gradient">
                    <div className="text-sm  ">
                        <div className="text-sm font-medium text-gray-400 mb-4">My Workspace</div>
                        <Link
                            href=""
                            className="flex items-center gap-3 px-3 py-2 text-white rounded-lg bg-blue-500/10 border border-blue-500/20"
                        >
                            <Layout className="w-4 h-4" />
                            Projects
                        </Link>
                        <Link
                            href=""
                            className="flex items-center gap-3 px-3 py-2 text-gray-400 rounded-lg hover:bg-white/4"
                        >
                            <FileCode className="w-4 h-4" />
                            Templates
                        </Link>
                        <Link
                            href=""
                            className="flex items-center gap-3 px-3 py-2 text-gray-400 rounded-lg hover:bg-white/4"
                        >
                            <Palette className="w-4 h-4" />
                            Design System
                        </Link>
                        <Link
                            href=""
                            className="flex items-center gap-3 px-3 py-2 text-gray-400 rounded-lg hover:bg-white/4"
                        >
                            <Database className="w-4 h-4" />
                            Assets
                        </Link>
                        <Link
                            href=""
                            className="flex items-center gap-3 px-3 py-2 text-gray-400 rounded-lg hover:bg-white/4"
                        >
                            <BarChart3 className="w-4 h-4" />
                            Analytics
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex p-8 ">
                <div className="w-auto">
                    <div className="flex items-center gap-2 mb-8">
                        <Layout className="w-8 h-8 text-blue-500" />
                        <h1 className="text-2xl font-bold text-white">Projects</h1>
                    </div>

                    <div className="gap-2 text-sm mask-image-linear-gradient">
                        <div className="grid grid-col gap-1">
                            <div className="flex items-center gap-2 text-green-400">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white  ">Unlimited website projects</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-400">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">Custom domain hosting</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-400">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">Advanced page builder</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-400">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">SEO optimization tools</span>
                            </div>
                        </div>

                        <p className="text-gray-400 mt-5 ">
                            {"  With years of expertise in the industry, our website building SaaS application offers a seamless and intuitive platform to create stunning, fully-responsive websites with ease. Enjoy powerful features like customizable templates, drag-and-drop functionality, built-in SEO tools, and robust security to ensure your online presence is not only visually appealing but also highly effective."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

