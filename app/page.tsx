import { AmbientMesh } from "@/components/ui/AmbientMesh";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { NonCompete } from "@/components/sections/NonCompete";
import { Process } from "@/components/sections/Process";
import { ScopeCTA } from "@/components/sections/ScopeCTA";
import { ServiceStack } from "@/components/sections/ServiceStack";
import { AdditionalServices } from "@/components/sections/AdditionalServices";
import { friendServicesEnabled } from "@/lib/featureFlags";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <AmbientMesh />
      <Nav />
      <main className="relative z-[2]">
        <Hero />
        <ServiceStack />
        {friendServicesEnabled ? <AdditionalServices /> : null}
        <Process />
        <NonCompete />
        <FAQ />
        <ScopeCTA />
      </main>
      <Footer />
    </>
  );
}
