
"use client";
import React from 'react';
import Link from 'next/link';

import Logo from "./Common/Logo";

export default function Footer() {
    return (
        <footer className="bg-primary border-t border-gray-800 py-8 mt-[5rem] ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <Logo/>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-400 text-sm">
                    <div className="flex flex-col">
                        <h5 className="text-white mb-2">Quick Links</h5>
                        <Link href="/#home" className="hover:text-purple-500">Home</Link>
                        <Link href="/#Service&facilities" className="hover:text-purple-500">Services</Link>
                        <Link href="/#pricing" className="hover:text-purple-500">Pricing</Link>
                        <Link href="/#trainers" className="hover:text-purple-500">Trainers</Link>
                        <Link href="/#gallery" className="hover:text-purple-500">Gallery</Link>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-white mb-2">Contact Us</h5>
                        <p>Address: 123 Main St, Anytown, USA</p>
                        <p>Phone: 555-555-5555</p>
                        <p>Email: <a href="mailto:info@example.com" className="hover:text-purple-500">info@example.com</a></p>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-white mb-2">Careers</h5>
                        <Link href="/careers" className="hover:text-purple-500">Job Openings</Link>
                        <Link href="/careers#benefits" className="hover:text-purple-500">Benefits</Link>
                        <Link href="/careers#culture" className="hover:text-purple-500">Company Culture</Link>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-white mb-2">Site Map</h5>
                        <Link href="/sitemap" className="hover:text-purple-500">View Site Map</Link>
                        <Link href="/rss" className="hover:text-purple-500">RSS Feed</Link>
                        <Link href="/accessibility" className="hover:text-purple-500">Accessibility Statement</Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} SaaSential. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
