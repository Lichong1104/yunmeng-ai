import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import CloudDreamSection from "@/components/CloudDreamSection";
import VideoSection from "@/components/VideoSection";
import AccessSection from "@/components/AccessSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoursesSection />
      <CloudDreamSection />
      <VideoSection />
      <AccessSection />
      <FooterSection />
    </div>
  );
};

export default Index;
