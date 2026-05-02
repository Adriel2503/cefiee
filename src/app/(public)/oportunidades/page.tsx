import type { Metadata } from "next";
import { OFERTAS } from "@/data/ofertas";
import { HeroBg } from "@/components/layout/HeroBg";

export const metadata: Metadata = {
  title: "Oportunidades",
  description: "Bolsa laboral y prácticas verificadas por el CEFIEE para estudiantes de la FIEE — UNI. Pasantías, prácticas pre y profesionales, y empleos en ingeniería.",
};

export default function OportunidadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 relative overflow-hidden">
        <HeroBg />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-400 mb-3">Portal Estudiantil</p>
          <h1 className="font-serif text-white mb-4" style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)" }}>
            Bolsa Laboral
          </h1>
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-xl">
            Pasantías, prácticas y empleos verificados por el CEFIEE para estudiantes de la FIEE.
          </p>
        </div>
      </section>

      {/* Bolsa Laboral */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Empleabilidad</p>
              <h2 className="font-serif text-[1.8rem] text-navy-900 flex items-center gap-3">
                <span className="material-symbols-outlined text-[28px] text-navy-900">work</span>
                Bolsa Laboral
              </h2>
              <p className="font-sans text-gray-500 text-sm mt-2">Oportunidades verificadas por el CEFIEE para estudiantes de la FIEE.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFERTAS.map((o) => (
              <div key={o.titulo} className="card-hover bg-white border border-gray-200 rounded-[10px] overflow-hidden flex flex-col"
                style={{ borderTop: `3px solid ${o.color}` }}>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-[4px] mb-2"
                        style={{ background: o.bg, color: o.color }}>
                        {o.tipo}
                      </span>
                      <h3 className="font-sans font-bold text-navy-900 text-[15px] leading-tight">{o.titulo}</h3>
                      <p className="font-sans text-gray-500 text-sm mt-0.5">{o.empresa}</p>
                    </div>
                    <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0" style={{ background: o.bg }}>
                      <span className="material-symbols-outlined text-[18px]" style={{ color: o.color }}>{o.icon}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-mono text-[10px] px-2 py-1 rounded-[4px] bg-gray-100 text-gray-600">{o.modalidad}</span>
                    {o.carreras.map((c) => (
                      <span key={c} className="font-mono text-[10px] px-2 py-1 rounded-[4px] bg-navy-50 text-navy-900">{c}</span>
                    ))}
                  </div>

                  <p className="font-sans text-gray-400 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">schedule</span>
                    Cierre: {o.limite}
                  </p>
                </div>
                <div className="px-6 pb-5">
                  <button className="btn-specialty w-full font-sans font-semibold text-sm py-2.5 rounded-[6px]"
                    style={{ "--btn": o.color } as React.CSSProperties}>
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
