import Feature from "../../components/Layout/Feature";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Layout/HeroSection";
import TrustedByAll from "../../components/Layout/TrustedByAll";
import Pricing from "../../components/Layout/Pricing";

export default function LandingPage() {
    return (
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

            </footer>
        </main>
    );
}