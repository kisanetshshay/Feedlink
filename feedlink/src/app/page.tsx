
import Contacts from "./Contacts";
import FAQ from "./FAQ";
import Features from "./Features";
import HeroSection from "./components/hero";
import ImpactSection from "./components/impact-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <FAQ/>
    <Contacts/>
      <Features/>
    </>

  );
}