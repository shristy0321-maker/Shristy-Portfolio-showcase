import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LabsmartSection from "@/components/LabsmartSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import RecognitionSection from "@/components/RecognitionSection";
import WhatIBringSection from "@/components/WhatIBringSection";
import EducationSection from "@/components/EducationSection";
import FinalCTASection from "@/components/FinalCTASection";



const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LabsmartSection />
      <CaseStudiesSection />
      <RecognitionSection />
      <ExperienceSection />
      <WhatIBringSection />
      <EducationSection />
      <FinalCTASection />
    </>
  );
};

export default Index;
