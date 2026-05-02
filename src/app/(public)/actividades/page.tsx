import type { Metadata } from "next";
import { AGENDA } from "@/data/agenda";
import { HeroBg } from "@/components/layout/HeroBg";

export const metadata: Metadata = {
  title: "Actividades",
  description: "Agenda cultural, deportiva y comunitaria del CEFIEE — eventos, torneos, cine y vida universitaria en la FIEE UNI.",
};

const tipoBadge: Record<string, { bg: string; color: string }> = {
  Cultural:  { bg: "#F5F3FF", color: "#4C1D95" },
  Deportivo: { bg: "#ECFDF5", color: "#064E3B" },
  Académico: { bg: "#EFF6FF", color: "#1E3A8A" },
};

export default function ActividadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 relative overflow-hidden">
        <HeroBg />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-400 mb-3">Comunidad</p>
          <h1 className="font-serif text-white mb-4" style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)" }}>
            Actividades & Vida Universitaria
          </h1>
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-xl">
            Cine, torneos, ferias y eventos organizados por el CEFIEE para toda la comunidad estudiantil de la FIEE.
          </p>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Próximos Eventos</p>
            <h2 className="font-serif text-[1.8rem] text-navy-900">Agenda Cultural</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AGENDA.map((a) => {
              const badge = tipoBadge[a.tipo] ?? { bg: "#F3F4F6", color: "#374151" };
              return (
                <div key={a.titulo} className="card-hover bg-white border border-gray-200 rounded-[10px] p-6 flex gap-4">
                  <div className="w-14 h-14 rounded-[10px] bg-navy-50 flex flex-col items-center justify-center shrink-0">
                    <span className="font-sans font-bold text-navy-900 text-lg leading-none">{a.fecha.split(" ")[0]}</span>
                    <span className="font-mono text-[10px] uppercase text-navy-700 mt-0.5">{a.fecha.split(" ")[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-[4px] mb-2"
                      style={{ background: badge.bg, color: badge.color }}>
                      {a.tipo}
                    </span>
                    <h3 className="font-sans font-semibold text-navy-900 text-[15px] leading-snug">{a.titulo}</h3>
                    <p className="font-sans text-gray-400 text-xs mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">location_on</span>
                      {a.lugar} · {a.hora}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
