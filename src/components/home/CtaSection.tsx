import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-500 mb-4">¿Tienes alguna consulta?</p>
        <h2 className="font-serif text-[2rem] text-navy-900 mb-4">Estamos aquí para ayudarte</h2>
        <p className="font-sans text-gray-500 text-base max-w-md mx-auto mb-8">
          Comunícate con la Junta Directiva del CEFIEE para cualquier consulta, propuesta o necesidad estudiantil.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-navy-950 px-8 py-3.5 rounded-[6px] transition-all hover:brightness-105 active:scale-95"
          style={{ background: "#C8860A", boxShadow: "var(--shadow-gold)" }}
        >
          <span className="material-symbols-outlined text-[18px]">mail</span>
          Contactar CEFIEE
        </Link>
      </div>
    </section>
  );
}
