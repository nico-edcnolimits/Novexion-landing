"use client";

import { GlobalNav } from "@/components/GlobalNav";
import { ProductSubNav } from "@/components/ProductSubNav";
import { HeroSection } from "@/components/HeroSection";
import { AwardsStrip } from "@/components/AwardsStrip";
import { TrialOfferSection } from "@/components/TrialOfferSection";
import { PowerGridSection } from "@/components/PowerGridSection";
import { GuinnessSection } from "@/components/GuinnessSection";
import { AnkerThusSection } from "@/components/AnkerThusSection";
import { CallQualitySection } from "@/components/CallQualitySection";
import { ANCSection } from "@/components/ANCSection";
import { SignatureSoundSection } from "@/components/SignatureSoundSection";
import { VoiceControlSection } from "@/components/VoiceControlSection";
import { ScreenControlSection } from "@/components/ScreenControlSection";
import { AIMeetingSection } from "@/components/AIMeetingSection";
import { MoreFeaturesSection } from "@/components/MoreFeaturesSection";
import { ColorOptionsSection } from "@/components/ColorOptionsSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <GlobalNav />
      <ProductSubNav />
      <main>
        <HeroSection />
        <AwardsStrip />
        <TrialOfferSection />
        <PowerGridSection />
        <GuinnessSection />
        <AnkerThusSection />
        <CallQualitySection />
        <ANCSection />
        <SignatureSoundSection />
        <VoiceControlSection />
        <ScreenControlSection />
        <AIMeetingSection />
        <MoreFeaturesSection />
        <ColorOptionsSection />
      </main>
      <FooterSection />
    </div>
  );
}
