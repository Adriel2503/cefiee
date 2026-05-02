import Link from "next/link";
import type { CSSProperties } from "react";

type FlowVars = CSSProperties & {
  "--circuit-dur"?: string;
  "--circuit-delay"?: string;
};

const specialtyIcons = [
  { icon: "bolt", color: "#FCD34D", pos: "top-6 left-6", label: "ELÉCTRICA" },
  { icon: "memory", color: "#60A5FA", pos: "top-6 right-6", label: "ELECTRÓNICA" },
  { icon: "settings_input_antenna", color: "#FCA5A5", pos: "bottom-16 left-6", label: "TELECOM" },
  { icon: "lock", color: "#34D399", pos: "bottom-16 right-6", label: "CIBER" },
  { icon: "biotech", color: "#C4B5FD", pos: "bottom-6 left-1/2 -translate-x-1/2", label: "BIOMÉDICA" },
];

export function HeroSection() {
  return (
    <section className="bg-navy-950 min-h-[92vh] flex items-center pt-8 pb-20 relative overflow-hidden">

      {/* Circuit SVG background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="220" x2="380" y2="220" stroke="white" strokeWidth="1" />
        <line x1="380" y1="220" x2="380" y2="100" stroke="white" strokeWidth="1" />
        <line x1="380" y1="100" x2="680" y2="100" stroke="white" strokeWidth="1" />
        <circle cx="380" cy="220" r="4" fill="#E8A500" opacity="0.08" />
        <circle cx="380" cy="100" r="4" fill="#E8A500" opacity="0.08" />
        <line x1="680" y1="100" x2="680" y2="360" stroke="white" strokeWidth="1" />
        <line x1="200" y1="420" x2="200" y2="600" stroke="white" strokeWidth="1" />
        <line x1="200" y1="420" x2="480" y2="420" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="420" r="3" fill="#34D399" opacity="0.08" />
        <line x1="900" y1="0" x2="900" y2="300" stroke="white" strokeWidth="1" />
        <line x1="900" y1="300" x2="1100" y2="300" stroke="white" strokeWidth="1" />
        <circle cx="900" cy="300" r="4" fill="#60A5FA" opacity="0.08" />
      </svg>

      {/* Animated signal overlays — flowing through the circuit */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 220 L 380 220 L 380 100 L 680 100 L 680 360"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={{ color: "#E8A500", "--circuit-dur": "7s" } as FlowVars} />
        <path d="M 480 420 L 200 420 L 200 600"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={{ color: "#34D399", "--circuit-dur": "5.5s", "--circuit-delay": "1.5s" } as FlowVars} />
        <path d="M 900 0 L 900 300 L 1100 300"
          className="circuit-trace" stroke="currentColor" pathLength="100"
          style={{ color: "#60A5FA", "--circuit-dur": "8s", "--circuit-delay": "3s" } as FlowVars} />

        <circle cx="680" cy="360" r="7" fill="currentColor"
          className="circuit-node"
          style={{ color: "#E8A500", "--circuit-dur": "7s" } as FlowVars} />
        <circle cx="200" cy="600" r="7" fill="currentColor"
          className="circuit-node"
          style={{ color: "#34D399", "--circuit-dur": "5.5s", "--circuit-delay": "1.5s" } as FlowVars} />
        <circle cx="1100" cy="300" r="7" fill="currentColor"
          className="circuit-node"
          style={{ color: "#60A5FA", "--circuit-dur": "8s", "--circuit-delay": "3s" } as FlowVars} />
      </svg>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,134,10,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Text */}
        <div className="lg:col-span-6 flex flex-col gap-6 z-10">
          <div className="animate-fade-up inline-flex items-center gap-2 border border-white/20 text-white/60 text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Centro de Estudiantes · FIEE · UNI
          </div>

          <h1 className="animate-fade-up animate-delay-100 font-serif text-white leading-[1.05]" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)" }}>
            Potenciando la{" "}
            <span style={{ color: "#E8A500" }}>Excelencia</span>{" "}
            en Ingeniería.
          </h1>

          <p className="animate-fade-up animate-delay-200 font-sans text-white/55 text-base leading-relaxed max-w-md">
            El CEFIEE es el órgano representativo de los estudiantes de la FIEE. Gestionamos recursos, oportunidades y espacios para toda la comunidad universitaria.
          </p>

          <div className="animate-fade-up animate-delay-300 flex flex-wrap gap-3">
            <Link
              href="/oportunidades"
              className="flex items-center gap-2 font-sans font-semibold text-sm text-navy-950 px-6 py-3 rounded-[6px] transition-all hover:brightness-105 active:scale-95"
              style={{ background: "#E8A500", boxShadow: "var(--shadow-gold)" }}
            >
              <span className="material-symbols-outlined text-[18px]">explore</span>
              Explorar Portal
            </Link>
            <Link
              href="/nosotros"
              className="flex items-center gap-2 font-sans font-semibold text-sm text-white px-6 py-3 rounded-[6px] border border-white/25 hover:bg-white/10 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">groups</span>
              Junta Directiva
            </Link>
          </div>
        </div>

        {/* Visual card */}
        <div className="lg:col-span-6 relative h-[400px] rounded-[16px] overflow-hidden animate-fade-up animate-delay-200">
          <div
            className="absolute inset-0 rounded-[16px] border border-white/10"
            style={{ background: "linear-gradient(135deg, rgba(21,61,138,0.7) 0%, rgba(5,16,46,0.95) 100%)" }}
          >
            {/* Grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Pentagon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-15">
                  <polygon points="50,5 95,35 82,90 18,90 5,35" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
                <div className="text-center z-10">
                  <div className="font-serif text-white text-4xl leading-none">CEF</div>
                  <div className="font-serif text-white text-4xl leading-none">IEE</div>
                  <div className="font-mono text-white/40 text-[10px] tracking-widest mt-2">2026</div>
                </div>
              </div>
            </div>

            {/* Specialty icons */}
            {specialtyIcons.map(({ icon, color, pos, label }) => (
              <div key={icon} className={`absolute ${pos} flex flex-col items-center gap-1 opacity-60`}>
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center" style={{ background: `${color}18` }}>
                  <span className="material-symbols-outlined text-[20px]" style={{ color }}>{icon}</span>
                </div>
                <span className="font-mono text-[8px] text-white/40 tracking-widest">{label}</span>
              </div>
            ))}
          </div>

          {/* Status floating card */}
          <div className="glass-dark absolute bottom-5 left-5 right-5 rounded-[10px] p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0" style={{ background: "rgba(232,165,0,0.15)" }}>
              <span className="material-symbols-outlined text-[20px]" style={{ color: "#E8A500" }}>update</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-white/40 text-[9px] uppercase tracking-widest">Estado del Sistema</p>
              <p className="font-sans text-white text-sm font-medium mt-0.5">Todos los servicios estudiantiles operativos</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <span className="font-mono text-emerald-400 text-[10px] font-medium">EN LÍNEA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 animate-bounce pointer-events-none">
        <span className="font-mono text-[9px] uppercase tracking-widest">Explorar</span>
        <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
      </div>
    </section>
  );
}
