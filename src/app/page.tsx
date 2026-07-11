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

export default function Home() {
  return (
    <div className="text-white min-h-screen" style={{ backgroundColor: "#0A1F44" }}>
      <GlobalNav />
      <main>
        {/* Hook + pain point */}
        <HeroSection />
        {/* Para quién es (segmentación) */}
        <AwardsStrip />
        {/* Beneficios clave */}
        <PowerGridSection />
        {/* Cómo funciona la traducción IA */}
        <AnkerThusSection />
        {/* Cómo usar en 3 pasos (Descarga / Conecta / Conversa) */}
        <HowToUseSection />
        {/* Funciona en cualquier ambiente (calle / local) */}
        <CallQualitySection />
        {/* Prueba visual del filtro de reducción de ruido (Sin/Con Novexion) */}
        <NoiseReductionSection />
        {/* Fácil de usar, manos libres */}
        <VoiceControlSection />
        {/* Prueba social */}
        <GuinnessSection />
        {/* Garantía + Mercado Pago (reversión de riesgo) */}
        <TrialOfferSection />
        {/* Objeciones finales */}
        <FaqSection />
        {/* Cierre de conversión */}
        <ColorOptionsSection />
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
}
