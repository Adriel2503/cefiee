import type { Especialidad } from "@/types";

interface Props {
  especialidades: Especialidad[];
}

export function EscuelasSection({ especialidades }: Props) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Especialidades</p>
          <h2 className="font-serif text-[2rem] text-navy-900 leading-tight">Escuelas Profesionales</h2>
          <p className="font-sans text-gray-500 text-base mt-3">Cinco escuelas de ingeniería de vanguardia en la FIEE — UNI.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {especialidades.map((e) => (
            <div
              key={e.sigla}
              className="card-hover bg-white rounded-[10px] p-6 border border-gray-200 relative overflow-hidden group cursor-pointer"
              style={{ borderLeft: `3px solid ${e.color}` }}
            >
              <div className="w-12 h-12 rounded-[8px] mb-5 flex items-center justify-center" style={{ background: e.bg }}>
                <span className="material-symbols-outlined text-[24px]" style={{ color: e.color }}>{e.icon}</span>
              </div>
              <p className="font-sans font-bold text-navy-900 text-[15px] leading-tight mb-2">{e.nombre}</p>
              <p className="font-sans text-gray-500 text-sm leading-relaxed">{e.descripcion}</p>
              <div className="mt-5 flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider" style={{ color: e.color }}>{e.sigla}</span>
                <span className="material-symbols-outlined text-[14px] text-gray-300 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
