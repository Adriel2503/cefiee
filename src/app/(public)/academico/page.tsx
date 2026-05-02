import type { Metadata } from "next";
import Link from "next/link";
import type { Taller } from "@/types";
import { ACTIVIDADES } from "@/data/actividades";
import { HeroBg } from "@/components/layout/HeroBg";

export const metadata: Metadata = {
  title: "Académico",
  description: "Talleres, cursos, seminarios, ponencias y congresos del CEFIEE — FIEE UNI.",
};

const esDestacado  = (t: Taller): boolean => t.destacado;
const esSecundario = (t: Taller): boolean => !t.destacado;

export default function FormacionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 relative overflow-hidden">
        <HeroBg />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-400 mb-3">FIEE · UNI</p>
          <h1 className="font-serif text-white mb-4" style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)" }}>
            Formación Académica
          </h1>
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-xl">
            Talleres, cursos, seminarios, ponencias y congresos organizados por el CEFIEE y las escuelas de la FIEE.
          </p>
        </div>
      </section>

      {/* Talleres y Eventos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Próximos</p>
            <h2 className="font-serif text-[1.8rem] text-navy-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-[28px] text-navy-900">school</span>
              Talleres &amp; Eventos Académicos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Destacado */}
            {ACTIVIDADES.filter(esDestacado).map((t) => (
              <div key={t.titulo} className="lg:col-span-5 card-hover bg-navy-900 rounded-[16px] overflow-hidden flex flex-col">
                <div className="p-8 flex-1">
                  <span className="inline-block font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] mb-4"
                    style={{ background: t.bg, color: t.color }}>
                    ★ Destacado — {t.tipo}
                  </span>
                  <h3 className="font-sans font-bold text-white text-xl leading-tight mb-3">{t.titulo}</h3>
                  <p className="font-sans text-white/60 text-sm leading-relaxed mb-5">{t.descripcion}</p>
                  <div className="space-y-2">
                    {[
                      { icon: "calendar_today", val: t.fecha },
                      { icon: "location_on", val: t.lugar },
                      { icon: "group", val: t.cupos },
                    ].map(({ icon, val }) => (
                      <p key={val} className="font-sans text-white/50 text-xs flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px]">{icon}</span>
                        {val}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="px-8 pb-7">
                  <button className="w-full font-sans font-semibold text-sm py-3 rounded-[6px] transition-all hover:brightness-105"
                    style={{ background: "#C8860A", color: "#05102E" }}>
                    Inscribirse Ahora
                  </button>
                </div>
              </div>
            ))}

            {/* Resto */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {ACTIVIDADES.filter(esSecundario).map((t) => (
                <div key={t.titulo} className="card-hover bg-white border border-gray-200 rounded-[10px] p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0" style={{ background: t.bg }}>
                    <span className="material-symbols-outlined text-[18px]" style={{ color: t.color }}>{t.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider" style={{ color: t.color }}>{t.tipo}</span>
                        <h3 className="font-sans font-semibold text-navy-900 text-[14px] leading-tight mt-0.5">{t.titulo}</h3>
                      </div>
                    </div>
                    <p className="font-sans text-gray-500 text-xs leading-relaxed mt-1.5 line-clamp-2">{t.descripcion}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="font-mono text-[10px] text-gray-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">calendar_today</span>{t.fecha}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">group</span>{t.cupos}
                      </span>
                    </div>
                  </div>
                  <button className="btn-specialty font-sans text-xs font-semibold px-3 py-1.5 rounded-[6px] shrink-0 self-start"
                    style={{ "--btn": t.color } as React.CSSProperties}>
                    Registrarse
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[1.8rem] text-navy-900 mb-4">¿Tienes una propuesta académica?</h2>
          <p className="font-sans text-gray-500 text-base max-w-md mx-auto mb-8">
            El CEFIEE apoya iniciativas de talleres, ponencias y cursos organizados por estudiantes de la FIEE.
          </p>
          <Link href="/contacto"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-navy-950 px-8 py-3.5 rounded-[6px] transition-all hover:brightness-105"
            style={{ background: "#C8860A", boxShadow: "var(--shadow-gold)" }}>
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Proponer Actividad
          </Link>
        </div>
      </section>
    </>
  );
}
