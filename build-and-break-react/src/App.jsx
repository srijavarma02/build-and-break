import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import EventHighlights from "./sections/EventHighlights";
import EventDetails from "./sections/EventDetails";
import EventStructure from "./sections/EventStructure";
import CTASection from "./sections/CTASection";
import ParticipationSection from "./sections/ParticipationSection";
import WhyParticipate from "./sections/WhyParticipate";
import PreviousEdition from "./sections/PreviousEdition";
import AboutISOC from "./sections/AboutISOC";
import OtherEvents from "./sections/OtherEvents";
import SponsorshipSection from "./sections/SponsorshipSection";
import ContactSection from "./sections/ContactSection";
import FinalCTA from "./sections/FinalCTA";
import FloatingNavbar from "./components/FloatingNavbar";
import AuroraBackground from "./components/aurora-background";

function App() {
  return (
    <>
      <FloatingNavbar />
      <Hero />
      <AuroraBackground>
        <AboutSection />
        <EventHighlights />
        <EventDetails />
        <EventStructure />
        <CTASection />
        <ParticipationSection />
        <WhyParticipate />
        <PreviousEdition />
        <AboutISOC />
        <OtherEvents />
        <SponsorshipSection />
        <ContactSection />
        <FinalCTA />
      </AuroraBackground>
    </>
  );
}

export default App;
