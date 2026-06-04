import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhatIBringSection from "@/components/WhatIBringSection";
import EducationSection from "@/components/EducationSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <ExperienceSection />
      <WhatIBringSection />
      <EducationSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
