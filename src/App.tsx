import { useState } from 'react';
import { BackgroundStorm } from './components/BackgroundStorm';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RealClientShowcase } from './components/RealClientShowcase';
import { GuaranteeCapsule } from './components/GuaranteeCapsule';
import { PricingSection } from './components/PricingSection';
import { PresentationAdvantage } from './components/PresentationAdvantage';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProcessCapsules } from './components/ProcessCapsules';
import { EmailContactCapsule } from './components/EmailContactCapsule';
import { FaqCapsules } from './components/FaqCapsules';
import { Footer } from './components/Footer';
import { CampusCraftChatbot } from './components/CampusCraftChatbot';
import { PackageId } from './types';
import { sirenAudio } from './utils/sirenAudioEngine';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageId>('pro');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId: PackageId) => {
    setSelectedPackage(catId);
    scrollToSection('packages');
  };

  const handleToggleSound = async () => {
    if (isPlayingAudio) {
      sirenAudio.stop();
      setIsPlayingAudio(false);
    } else {
      const ok = await sirenAudio.start();
      setIsPlayingAudio(ok);
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Constant Background: 3D Lighthouse Storm Waves WebGL Scene */}
      <BackgroundStorm
        isPlayingAudio={isPlayingAudio}
        onToggleSound={handleToggleSound}
      />

      {/* Floating Apple Glass Top Navigation Bar with AI Chatbot Access */}
      <Navbar
        onContactClick={() => scrollToSection('contact')}
        isPlayingAudio={isPlayingAudio}
        onToggleSound={handleToggleSound}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1 w-full relative z-10">
        {/* Hero Section */}
        <HeroSection
          onSelectCategory={handleSelectCategory}
          onExploreWorkClick={() => scrollToSection('our-work')}
          onEmailDeskClick={() => scrollToSection('contact')}
        />

        {/* Real Student Work Showcase (Arachne & MICP Lab) */}
        <RealClientShowcase />

        {/* Zero-Risk Guarantee: 1st View Your Work, Then Only Pay */}
        <GuaranteeCapsule onStartDraftClick={() => scrollToSection('contact')} />

        {/* The 3 Packages & Pricing (₹500 / ₹600 / ₹700 Upcoming) */}
        <PricingSection
          selectedPackage={selectedPackage}
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onContinueToForm={() => scrollToSection('contact')}
        />

        {/* Competitive Edge: Why Live Websites Outperform PowerPoint */}
        <PresentationAdvantage />

        {/* Interactive School Project Simulator (Projector / Mobile View + QR Code) */}
        <ProjectShowcase />

        {/* 4-Step Effortless Process Flow */}
        <ProcessCapsules onStartClick={() => scrollToSection('contact')} />

        {/* Enhanced Email-Only Contact Capsule with Creative Twist */}
        <EmailContactCapsule selectedPackage={selectedPackage} />

        {/* Frequently Asked Questions */}
        <FaqCapsules />
      </main>

      {/* Apple Glass Capsule Footer */}
      <Footer />

      {/* Embedded Client-Side CampusCraft AI Chatbot */}
      <CampusCraftChatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onOpen={() => setIsChatbotOpen(true)}
      />
    </div>
  );
}
