import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import JoinUsSection from "@/components/sections/JoinUsSection";
import LocationSection from "@/components/sections/LocationSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";
import TimelineSection from "@/components/sections/TimelineSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />

      <WorkshopsSection />
      <JoinUsSection />
      <LocationSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
