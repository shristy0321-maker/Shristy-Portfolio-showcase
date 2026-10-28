import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import LabSmartSection from "@/components/LabSmartSection";
import LabSmartExperience from "@/components/LabSmartExperience";
import RecognitionSection from "@/components/RecognitionSection";
import WhatIBringSection from "@/components/WhatIBringSection";
import EducationSection from "@/components/EducationSection";
import FinalCTASection from "@/components/FinalCTASection";



const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CaseStudiesSection />
      <LabSmartSection />
      <LabSmartExperience />
      <RecognitionSection />
      <ExperienceSection />
      <WhatIBringSection />
      <EducationSection />
      <FinalCTASection />
    </>
  );
};

export default Index;
