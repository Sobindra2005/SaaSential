"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Logo from "./Common/Logo";

export default function Footer() {
    // Nepal-focused content data
    const footerData = {
        quickLinks: [
            { name: "Home", href: "/#home" },
            { name: "Services", href: "/#services" },
            { name: "Pricing", href: "/#pricing" },
            { name: "About Us", href: "/#about" },
            { name: "Contact", href: "/#contact" }
        ],
        contact: {
            address: "Thamel, Kathmandu, Nepal",
            phone: "+977-01-4123456",
            email: "info@saasential.com.np"
        },
        resources: [
            { name: "Blog", href: "/blog" },
            { name: "Documentation", href: "/docs" },
            { name: "Support Center", href: "/support" }
        ],
        legalLinks: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" }
        ],
        socialLinks: [
            { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
            { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
            { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
            { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" }
        ]
    };
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary border-t border-gray-800 pt-10 pb-6 mt-[5rem]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section with logo and social links */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div className="mb-4 sm:mb-0">
                        <Logo />
                    </div>
                    
                    {/* Social links */}
                    <div className="flex space-x-4">
                        {footerData.socialLinks.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-800 my-6" />
                
                {/* Footer links - responsive grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-400 text-sm">
                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h5 className="text-white font-medium text-base mb-3">Quick Links</h5>
                        <ul className="space-y-2">
                            {footerData.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="hover:text-purple-500 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div className="flex flex-col">
                        <h5 className="text-white font-medium text-base mb-3">Contact Us</h5>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="flex-shrink-0 mt-1" />
                                <span>{footerData.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="flex-shrink-0" />
                                <span>{footerData.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="flex-shrink-0" />
                                <a 
                                    href={`mailto:${footerData.contact.email}`}
                                    className="hover:text-purple-500 transition-colors duration-200"
                                >
                                    {footerData.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Resources */}
                    <div className="flex flex-col">
                        <h5 className="text-white font-medium text-base mb-3">Resources</h5>
                        <ul className="space-y-2">
                            {footerData.resources.map((resource, index) => (
                                <li key={index}>
                                    <Link 
                                        href={resource.href} 
                                        className="hover:text-purple-500 transition-colors duration-200"
                                    >
                                        {resource.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div className="flex flex-col">
                        <h5 className="text-white font-medium text-base mb-3">Legal</h5>
                        <ul className="space-y-2">
                            {footerData.legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="hover:text-purple-500 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Nepal-specific messaging */}
                <div className="mt-10 border-t border-gray-800 pt-6">
                    <div className="text-center text-xs sm:text-sm text-gray-400 space-y-3">
                        <p className="max-w-2xl mx-auto">
                            Proudly made in Nepal, SaaSential is committed to empowering businesses with cutting-edge 
                            digital solutions, reflecting the innovative spirit of Nepal's growing tech industry.
                        </p>
                        <p>&copy; {currentYear} SaaSential. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}