import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { Loader } from "@/components/loader";
import { SiteHeader } from "@/components/site-header";
import { TrustSection } from "@/components/trust-section";
import { VideoSection } from "@/components/video-section";
import { WorksSection } from "@/components/works-section";

export default function Home() {
  return (
    <main>
      <Loader />
      <SiteHeader />
      <Hero />
      <VideoSection />
      <AboutSection />
      <WorksSection />
      <TrustSection />
      <ContactSection />
    </main>
  );
}
