import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import RecognitionSection from "@/components/RecognitionSection";
import WhatIBringSection from "@/components/WhatIBringSection";
import EducationSection from "@/components/EducationSection";
import FinalCTASection from "@/components/FinalCTASection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CaseStudiesSection />
      <RecognitionSection />
      <ExperienceSection />
      <WhatIBringSection />
      <EducationSection />
      <FinalCTASection />
      <Footer />
    </>
  );
};

export default Index;
