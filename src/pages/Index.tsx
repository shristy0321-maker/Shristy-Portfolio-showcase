import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import RecognitionSection from "@/components/RecognitionSection";
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
      <RecognitionSection />
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
