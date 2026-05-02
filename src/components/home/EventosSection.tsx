import Link from "next/link";
import type { Evento } from "@/types";

interface Props {
  eventos: Evento[];
}

export function EventosSection({ eventos }: Props) {
  return (
    <section id="eventos" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-2">Agenda Académica</p>
            <h2 className="font-serif text-[2rem] text-navy-900 leading-tight">Próximos Eventos</h2>
            <p className="font-sans text-gray-500 text-base mt-3">
              Talleres, competencias y actividades organizadas por el CEFIEE y las escuelas de la FIEE.
            </p>
          </div>
          <Link href="/oportunidades" className="font-sans text-sm font-semibold text-navy-900 flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0">
            Ver Agenda Completa
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventos.map((ev) => (
            <div key={ev.titulo} className="card-hover bg-white rounded-[10px] overflow-hidden border border-gray-200"
              style={{ borderTop: `3px solid ${ev.color}` }}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-[8px] flex flex-col items-center justify-center border shrink-0"
                    style={{ background: ev.bg, borderColor: `${ev.color}25` }}>
                    <span className="font-sans font-bold text-lg leading-none" style={{ color: ev.color }}>{ev.dia}</span>
                    <span className="font-mono font-bold text-[9px] uppercase" style={{ color: ev.color }}>{ev.mes}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: ev.bg, color: ev.color }}>
                    <span className="material-symbols-outlined text-[12px]">{ev.icon}</span>
                    {ev.escuela}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-navy-900 text-[15px] leading-tight mb-2">{ev.titulo}</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4">{ev.descripcion}</p>

                <div className="flex items-center justify-between">
                  <span className="font-sans text-gray-400 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {ev.lugar}
                  </span>
                  <Link href="/oportunidades"
                    className="font-sans text-xs font-semibold flex items-center gap-1 hover:underline"
                    style={{ color: ev.color }}>
                    Registrarse
                    <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
