import Link from "next/link";
import type { MiembroJunta, MiembroJuntaSimple } from "@/types";

interface Props {
  presidente: MiembroJunta;
  miembros: MiembroJuntaSimple[];
}

export function JuntaSection({ presidente, miembros }: Props) {
  return (
    <section id="junta" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Gobierno Estudiantil</p>
            <h2 className="font-serif text-[2rem] text-navy-900 leading-tight">Junta Directiva 2024–2026</h2>
            <p className="font-sans text-gray-500 text-base mt-3 max-w-md">
              Comprometidos con representar y defender los derechos de todos los estudiantes de la FIEE.
            </p>
          </div>
          <Link href="/nosotros" className="font-sans text-sm font-semibold text-navy-900 flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">
            Ver organigrama
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {/* President */}
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
            {presidente.quote && (
              <p className="font-sans text-white/60 text-sm mt-4 leading-relaxed max-w-md">
                &ldquo;{presidente.quote}&rdquo;
              </p>
            )}
          </div>
          <a href={`mailto:${presidente.email}`}
            className="font-sans text-white/40 hover:text-white text-xs flex items-center gap-1.5 transition-colors shrink-0">
            <span className="material-symbols-outlined text-[14px]">mail</span>
            {presidente.email}
          </a>
        </div>

        {/* Other members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {miembros.map((m) => (
            <div key={m.nombre} className="card-hover bg-white border border-gray-200 rounded-[10px] p-5 text-center">
              <div className="w-14 h-14 rounded-[10px] mx-auto mb-4 flex items-center justify-center font-sans font-bold text-lg border"
                style={{ background: `${m.color}0D`, color: m.color, borderColor: `${m.color}25` }}>
                {m.iniciales}
              </div>
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider block">{m.cargo}</span>
              <p className="font-sans font-semibold text-navy-900 text-sm mt-1 leading-tight">{m.nombre}</p>
              <p className="font-sans text-[12px] mt-1" style={{ color: m.color }}>{m.escuela}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
