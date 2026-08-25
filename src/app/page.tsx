import Hero from "@/components/home/Hero";
import EngineeringSection from "@/components/home/EngineeringSection";
import TeachingSection from "@/components/home/TeachingSection";
import PhotographySection from "@/components/home/PhotographySection";
import FieldNotesSection from "@/components/home/FieldNotesSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import AboutTeaser from "@/components/home/AboutTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <EngineeringSection />
      <TeachingSection />
      <PhotographySection />
      <FieldNotesSection />
      <SelectedWorkSection />
      <AboutTeaser />
    </>
  );
}
