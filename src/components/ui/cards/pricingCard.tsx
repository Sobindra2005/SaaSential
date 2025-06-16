"use client"

import React, { useState, useRef, useEffect } from "react"
import { Check } from "lucide-react"
import Container from "@/components/Layout/Container"

export function PricingCard() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
    const monthlyBtnRef = useRef<HTMLButtonElement>(null)
    const yearlyBtnRef = useRef<HTMLButtonElement>(null)
    const animatedBorderRef = useRef<HTMLDivElement>(null)
    const [isAnimating, setIsAnimating] = useState(false)

    const features = [
        "Access to 500+ design templates",
        "Dedicated design expert",
        "Unlimited revisions per project",
        "Brand asset library creation",
        "Priority delivery within 48 hours",
    ]

    const pricing = {
        monthly: { price: "Rs 0.00", period: "Billed Monthly" },
        yearly: { price: "Rs 0.00", period: "Billed Yearly" },
    }

    const handleBillingChange = (period: "monthly" | "yearly") => {
        if (period !== billingPeriod && !isAnimating) {
            setIsAnimating(true)
            const animatedBorder = animatedBorderRef.current
            const targetBtn = period === "monthly" ? monthlyBtnRef.current : yearlyBtnRef.current
            const currentBtn = period === "monthly" ? yearlyBtnRef.current : monthlyBtnRef.current
            
            if (animatedBorder && targetBtn && currentBtn) {
                animatedBorder.style.width = '10px'
                
                setTimeout(() => {
                    const newPosition = period === "monthly" ? 0 : currentBtn.offsetWidth
                    animatedBorder.style.transform = `translateX(${newPosition}px)`
                    
                    setTimeout(() => {
                        animatedBorder.style.width = `${targetBtn.offsetWidth}px`
                        setBillingPeriod(period)
                        

                        setTimeout(() => {
                            setIsAnimating(false)
                        }, 300)
                    }, 150)
                }, 150)
            }
        }
    }

    // Initialize the border position and width
    useEffect(() => {
        const targetBtn = billingPeriod === "monthly" ? monthlyBtnRef.current : yearlyBtnRef.current
        const animatedBorder = animatedBorderRef.current
        
        if (targetBtn && animatedBorder && !isAnimating) {
            animatedBorder.style.width = `${targetBtn.offsetWidth}px`
            animatedBorder.style.transform = `translateX(${billingPeriod === "monthly" ? 0 : monthlyBtnRef.current?.offsetWidth || 0}px)`
        }
    }, [])

    return (
        <Container padding="0px" className="flex items-center justify-center">
            <div className="w-full max-w-3xl h-full">
                <div className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-3xl">
                    <div className="bg-gray-900 rounded-3xl w-full h-full p-10 border hover:border-blue-700 border-primary flex flex-row justify-between">
                        <div className="items-center justify-center">
                            <div className="flex items-center justify-center mb-8">
                                <div className="bg-gray-800 rounded-full p-1 flex relative">
                                    
                                    <div 
                                        ref={animatedBorderRef}
                                        className="absolute top-1 left-1 h-[calc(100%-8px)] border border-blue-500 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                                    />
                                    
                                    <button
                                        ref={monthlyBtnRef}
                                        onClick={() => handleBillingChange("monthly")}
                                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 ${
                                            billingPeriod === "monthly" ? "text-white" : "text-gray-400 hover:text-white"
                                        }`}
                                        disabled={isAnimating}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        ref={yearlyBtnRef}
                                        onClick={() => handleBillingChange("yearly")}
                                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 ${
                                            billingPeriod === "yearly" ? "text-white" : "text-gray-400 hover:text-white"
                                        }`}
                                        disabled={isAnimating}
                                    >
                                        Yearly
                                    </button>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-5xl text-left font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    {pricing[billingPeriod].price}
                                </div>
                                <div className="text-gray-400 text-sm text-left">{pricing[billingPeriod].period}</div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="text-gray-500 text-xl font-medium mb-4">Features +</div>
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 py-1">
                                    <div className="flex-shrink-0">
                                        <div className="w-5 h-5 rounded-full border bg-secondary border-gray-500 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-black stroke-[3]" />
                                        </div>
                                    </div>
                                    <span className="text-gray-400 text-lg">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}