import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
    return (
        <div className="site-root">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <WhyChoose />
                <HowItWorks />
                <Gallery />
                <Reviews />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
}
