import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import EventHighlights from "./sections/EventHighlights";
import EventDetails from "./sections/EventDetails";
import EventStructure from "./sections/EventStructure";

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
import GradualBlur from "./components/GradualBlur";

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

        <ParticipationSection />
        <WhyParticipate />
        <PreviousEdition />
        <AboutISOC />
        <OtherEvents />
        <SponsorshipSection />
        <ContactSection />
        <FinalCTA />
      </AuroraBackground>

      {/* Global Bottom-of-Screen Blur & Fade to Black */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: '12rem', 
          pointerEvents: 'none', 
          zIndex: 50,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.95) 100%)'
        }}
      >
        <GradualBlur
          target="parent"
          position="bottom"
          height="100%"
          strength={4}
          divCount={12}
          curve="bezier"
          exponential
          opacity={1}
        />
      </div>
    </>
  );
}

export default App;
