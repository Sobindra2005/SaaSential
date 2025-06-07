import React from "react";
import Feature from "../../components/Layout/Feature";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Layout/HeroSection";
import TrustedByAll from "../../components/Layout/TrustedByAll";
import Pricing from "../../components/Layout/Pricing";
import Footer from "../../components/Footer";
import {LoadingWrapper} from "../../components/wrapper/loadingwrapper"

export default function LandingPage() {
    return (
        <LoadingWrapper>
            <main className="w-full min-h-screen ">
                <header>
                    <Header />
                </header>
                <section>
                    <HeroSection />
                </section>
                <section>
                    <Feature />
                </section>
                <section>
                    <TrustedByAll />
                </section>

                <section>
                    <Pricing />
                </section>
                <footer>
                    <Footer />
                </footer>
            </main>
        </LoadingWrapper>
    );
}