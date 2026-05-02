import type { Metadata } from "next";
import { ESPECIALIDADES } from "@/constants/especialidades";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Portal oficial del CEFIEE — Centro de Estudiantes de la FIEE, UNI. Bolsa laboral, talleres, comunicados y vida universitaria para más de 1,500 estudiantes.",
  openGraph: {
    title: "CEFIEE — Centro de Estudiantes FIEE · UNI",
    description: "Portal oficial del CEFIEE — bolsa laboral, talleres, comunicados y vida universitaria para más de 1,500 estudiantes de la FIEE.",
    url: "https://cefiee.uni.edu.pe",
  },
};
import { ESPACIOS } from "@/constants/espacios";
import { JUNTA, JUNTA_HOME_MIEMBROS } from "@/data/junta";
import { EVENTOS } from "@/data/eventos";
import { HeroSection } from "@/components/home/HeroSection";
import { EspaciosSection } from "@/components/home/EspaciosSection";
import { EscuelasSection } from "@/components/home/EscuelasSection";
import { JuntaSection } from "@/components/home/JuntaSection";
import { EventosSection } from "@/components/home/EventosSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EspaciosSection espacios={ESPACIOS} />
      <EscuelasSection especialidades={ESPECIALIDADES} />
      <JuntaSection presidente={JUNTA[0]} miembros={JUNTA_HOME_MIEMBROS} />
      <EventosSection eventos={EVENTOS} />
      <CtaSection />
    </>
  );
}
