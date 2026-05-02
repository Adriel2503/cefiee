import Link from "next/link";
import type { Espacio } from "@/types";

interface Props {
  espacios: Espacio[];
}

export function EspaciosSection({ espacios }: Props) {
  return (
    <section id="espacios" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Infraestructura</p>
            <h2 className="font-serif text-[2rem] text-navy-900 leading-tight">Nuestros Espacios</h2>
            <p className="font-sans text-gray-500 text-base mt-3 max-w-md">
              Instalaciones gestionadas por el CEFIEE para el desarrollo académico y bienestar de toda la comunidad FIEE.
            </p>
          </div>
          <Link href="/nosotros" className="font-sans text-sm font-semibold text-navy-900 flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">
            Ver todos los espacios
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {espacios.map((esp) => (
            <div
              key={esp.id}
              className="card-hover bg-white border border-gray-200 rounded-[10px] overflow-hidden"
            >
              <div className="h-[3px]" style={{ background: esp.accentColor }} />
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[8px] flex items-center justify-center" style={{ background: `${esp.accentColor}10` }}>
                      <span className="material-symbols-outlined text-[24px]" style={{ color: esp.accentColor }}>{esp.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-navy-900 text-xl">{esp.nombre}</h3>
                      <p className="font-sans text-gray-400 text-sm flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[13px]">location_on</span>
                        {esp.ubicacion}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                    style={{ background: "#ECFDF5", color: "#064E3B" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
                    {esp.status === "abierto" ? "Abierto" : "Cerrado"}
                  </span>
                </div>

                <p className="font-sans text-gray-600 text-sm leading-relaxed mb-6">{esp.info}</p>

                <div className="border-t border-gray-50 pt-5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-sans text-gray-400 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-gray-300">schedule</span>
                      Horario
                    </span>
                    <span className="font-mono text-navy-900 font-medium text-[13px]">{esp.horario}</span>
                  </div>
                </div>

                <button
                  className="btn-specialty mt-6 w-full font-sans font-semibold text-sm py-3 rounded-[6px] flex items-center justify-center gap-2"
                  style={{ "--btn": esp.accentColor } as React.CSSProperties}
                >
                  <span className="material-symbols-outlined text-[16px]">{esp.ctaIcon}</span>
                  {esp.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
