import { GlobalNav } from "@/components/GlobalNav";
import { HeroSection } from "@/components/HeroSection";
import { AwardsStrip } from "@/components/AwardsStrip";
import { PowerGridSection } from "@/components/PowerGridSection";
import { AnkerThusSection } from "@/components/AnkerThusSection";
import { HowToUseSection } from "@/components/HowToUseSection";
import { CallQualitySection } from "@/components/CallQualitySection";
import { NoiseReductionSection } from "@/components/NoiseReductionSection";
import { VoiceControlSection } from "@/components/VoiceControlSection";
import { GuinnessSection } from "@/components/GuinnessSection";
import { TrialOfferSection } from "@/components/TrialOfferSection";
import { FaqSection } from "@/components/FaqSection";
import { ColorOptionsSection } from "@/components/ColorOptionsSection";
import { FooterSection } from "@/components/FooterSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <div className="text-white min-h-screen" style={{ backgroundColor: "#0A1F44" }}>
      <GlobalNav />
      <main>
        {/* Hook + pain point */}
        <Reveal>
          <HeroSection />
        </Reveal>
        {/* Para quién es (segmentación) */}
        <Reveal>
          <AwardsStrip />
        </Reveal>
        {/* Cómo funciona la traducción IA */}
        <Reveal>
          <AnkerThusSection />
        </Reveal>
        {/* Beneficios clave */}
        <Reveal>
          <PowerGridSection />
        </Reveal>
        {/* Cómo usar en 3 pasos (Descarga / Conecta / Conversa) */}
        <Reveal>
          <HowToUseSection />
        </Reveal>
        {/* Funciona en cualquier ambiente (calle / local) */}
        <Reveal>
          <CallQualitySection />
        </Reveal>
        {/* Prueba visual del filtro de reducción de ruido (Sin/Con Novexion) */}
        <Reveal>
          <NoiseReductionSection />
        </Reveal>
        {/* Fácil de usar, manos libres */}
        <Reveal>
          <VoiceControlSection />
        </Reveal>
        {/* Prueba social */}
        <Reveal>
          <GuinnessSection />
        </Reveal>
        {/* Garantía + Mercado Pago (reversión de riesgo) */}
        <Reveal>
          <TrialOfferSection />
        </Reveal>
        {/* Objeciones finales */}
        <Reveal>
          <FaqSection />
        </Reveal>
        {/* Cierre de conversión */}
        <Reveal>
          <ColorOptionsSection />
        </Reveal>
      </main>
      <Reveal>
        <FooterSection />
      </Reveal>
      <WhatsAppFloat />
    </div>
  );
}
