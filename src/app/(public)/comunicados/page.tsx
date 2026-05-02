import type { Metadata } from "next";
import { COMUNICADOS } from "@/data/comunicados";
import { HeroBg } from "@/components/layout/HeroBg";

export const metadata: Metadata = {
  title: "Comunicados",
  description: "Avisos y comunicados oficiales de la Junta Directiva del CEFIEE — FIEE UNI.",
};

export default function ComunicadosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 relative overflow-hidden">
        <HeroBg />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-400 mb-3">Junta Directiva</p>
          <h1 className="font-serif text-white mb-4" style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)" }}>
            Comunicados
          </h1>
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-xl">
            Avisos oficiales de la Junta Directiva del CEFIEE para toda la comunidad estudiantil de la FIEE.
          </p>
        </div>
      </section>

      {/* Comunicados */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Últimos Avisos</p>
            <h2 className="font-serif text-[1.8rem] text-navy-900">Últimos Comunicados</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMUNICADOS.map((c) => (
              <div key={c.titulo} className="card-hover bg-white border border-gray-200 rounded-[10px] p-6 flex gap-4 cursor-pointer">
                <div className="w-12 h-12 rounded-[8px] bg-navy-50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px] text-navy-900">{c.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded-[4px] bg-navy-50 text-navy-700">
                      {c.categoria}
                    </span>
                    <span className="font-mono text-[10px] text-gray-300">· {c.hace}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-navy-900 text-[15px] leading-snug">{c.titulo}</h3>
                  {c.descripcion && (
                    <p className="font-sans text-gray-500 text-sm mt-2 leading-relaxed">{c.descripcion}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
