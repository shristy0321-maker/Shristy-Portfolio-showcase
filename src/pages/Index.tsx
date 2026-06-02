import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProductThinkingSection from "@/components/ProductThinkingSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <ProductThinkingSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
