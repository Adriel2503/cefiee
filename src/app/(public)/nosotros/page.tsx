import type { Metadata } from "next";
import Link from "next/link";
import { ESPACIOS } from "@/constants/espacios";
import { JUNTA } from "@/data/junta";
import { HeroBg } from "@/components/layout/HeroBg";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y visión del CEFIEE — Centro de Estudiantes de la Facultad de Ingeniería Eléctrica y Electrónica de la UNI.",
};

const mision =
  "Representar, defender y promover los derechos e intereses de los estudiantes de la FIEE, gestionando recursos, espacios y oportunidades que potencien su desarrollo académico, profesional y personal.";

const vision =
  "Ser el referente de liderazgo estudiantil en la UNI, reconocido por su transparencia, innovación y compromiso con la excelencia académica de la Facultad de Ingeniería Eléctrica y Electrónica.";

const valores = [
  { icon: "verified", label: "Transparencia", desc: "Gestión abierta y rendición de cuentas permanente ante la comunidad estudiantil." },
  { icon: "diversity_3", label: "Representatividad", desc: "Voz activa de todos los estudiantes de las cinco escuelas profesionales." },
  { icon: "emoji_objects", label: "Innovación", desc: "Promovemos soluciones creativas a los retos académicos y sociales de la facultad." },
  { icon: "handshake", label: "Compromiso", desc: "Dedicación real a la mejora continua de la experiencia universitaria en la FIEE." },
];

export default function NosotrosPage() {
  const [presidente, ...miembros] = JUNTA;
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <HeroBg />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-400 mb-3">Quiénes Somos</p>
          <h1 className="font-serif text-white mb-6" style={{ fontSize: "clamp(2.4rem,5vw,3.5rem)" }}>
            CEFIEE
          </h1>
          <p className="font-sans text-white/55 text-lg leading-relaxed max-w-2xl">
            Centro de Estudiantes de la Facultad de Ingeniería Eléctrica y Electrónica de la
            Universidad Nacional de Ingeniería. Representamos a más de 1,500 estudiantes de cinco
            escuelas profesionales desde 1978.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-navy-900 rounded-[16px] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 pointer-events-none"
              style={{ background: "#E8A500", transform: "translate(30%,-30%)" }} />
            <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6" style={{ background: "rgba(232,165,0,0.15)" }}>
              <span className="material-symbols-outlined text-[24px]" style={{ color: "#E8A500" }}>flag</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">Misión</p>
            <p className="font-sans text-white/80 text-base leading-relaxed">{mision}</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-[16px] p-10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6 bg-navy-50">
              <span className="material-symbols-outlined text-[24px] text-navy-900">visibility</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-3">Visión</p>
            <p className="font-sans text-gray-700 text-base leading-relaxed">{vision}</p>
          </div>
        </div>
      </section>


      {/* Junta Directiva */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">2024–2026</p>
              <h2 className="font-serif text-[2rem] text-navy-900">Junta Directiva Completa</h2>
            </div>
            <a href="mailto:cefiee@uni.edu.pe"
              className="font-sans text-sm font-semibold text-navy-900 flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">
              Contactar Junta
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Presidente destacado */}
          <div className="mb-6 bg-navy-900 rounded-[16px] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
              style={{ background: "#E8A500", transform: "translate(40%,-40%)" }} />
            <div className="w-20 h-20 rounded-[12px] flex items-center justify-center font-sans font-bold text-2xl shrink-0 border border-white/20"
              style={{ background: "rgba(232,165,0,0.15)", color: "#E8A500" }}>
              {presidente.iniciales}
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ background: "rgba(232,165,0,0.2)", color: "#E8A500" }}>
                {presidente.cargo}
              </span>
              <h3 className="font-sans font-bold text-white text-2xl">{presidente.nombre}</h3>
              <p className="font-mono text-white/40 text-sm mt-1">{presidente.escuela} · {presidente.ciclo}</p>
            </div>
            <a href={`mailto:${presidente.email}`}
              className="font-sans text-white/40 hover:text-white text-xs flex items-center gap-1.5 transition-colors shrink-0">
              <span className="material-symbols-outlined text-[14px]">mail</span>
              {presidente.email}
            </a>
          </div>

          {/* Resto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {miembros.map((m) => (
              <div key={m.nombre} className="card-hover bg-white border border-gray-200 rounded-[10px] p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-[8px] flex items-center justify-center font-sans font-bold shrink-0 border"
                  style={{ background: `${m.color}0D`, color: m.color, borderColor: `${m.color}25` }}>
                  {m.iniciales}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-gray-400">{m.cargo}</p>
                  <p className="font-sans font-semibold text-navy-900 text-sm leading-tight mt-0.5">{m.nombre}</p>
                  <p className="font-sans text-[12px] mt-0.5" style={{ color: m.color }}>{m.escuela} · {m.ciclo}</p>
                </div>
                <a href={`mailto:${m.email}`} className="text-gray-300 hover:text-navy-900 transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Espacios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Infraestructura</p>
            <h2 className="font-serif text-[2rem] text-navy-900">Nuestros Espacios</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ESPACIOS.map((esp) => (
              <div key={esp.id} className="card-hover bg-white border border-gray-200 rounded-[10px] overflow-hidden">
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
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase px-3 py-1.5 rounded-full"
                      style={{ background: "#ECFDF5", color: "#064E3B" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {esp.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-[6px] px-3 py-2.5">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gray-400">Horario</p>
                      <p className="font-sans text-navy-900 text-sm font-semibold mt-0.5">{esp.horario}</p>
                    </div>
                    <div className="bg-gray-50 rounded-[6px] px-3 py-2.5">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-gray-400">Capacidad</p>
                      <p className="font-sans text-navy-900 text-sm font-semibold mt-0.5">{esp.capacidad}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {(esp.servicios ?? []).map((s) => (
                      <li key={s} className="flex items-center gap-2 font-sans text-sm text-gray-600">
                        <span className="material-symbols-outlined text-[14px]" style={{ color: esp.accentColor }}>check_circle</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[1.8rem] text-navy-900 mb-4">¿Tienes alguna propuesta?</h2>
          <p className="font-sans text-gray-500 text-base max-w-md mx-auto mb-8">
            La Junta Directiva está abierta a escuchar ideas, proyectos y necesidades de cualquier estudiante de la FIEE.
          </p>
          <Link href="/contacto"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-navy-950 px-8 py-3.5 rounded-[6px] transition-all hover:brightness-105"
            style={{ background: "#C8860A", boxShadow: "var(--shadow-gold)" }}>
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Enviar Propuesta
          </Link>
        </div>
      </section>
    </>
  );
}
