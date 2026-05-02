import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { HeroBg } from "@/components/layout/HeroBg";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Comunícate con la Junta Directiva del CEFIEE — FIEE UNI.",
};

const contactInfo = [
  { icon: "mail", label: "Correo General", valor: "cefiee@uni.edu.pe", href: "mailto:cefiee@uni.edu.pe" },
  { icon: "location_on", label: "Ubicación", valor: "Av. Túpac Amaru 210, Rímac, Lima — FIEE 3er Piso", href: "#" },
  { icon: "schedule", label: "Horario de Atención", valor: "Lun–Vie, 9:00 a.m. – 5:00 p.m.", href: "#" },
];

const redes = [
  {
    label: "Instagram", usuario: "@cefiee_uni",
    href: "https://www.instagram.com/cefiee_uni",
    svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook", usuario: "CEFIEE Oficial",
    href: "https://www.facebook.com/share/1FnhatA9wd/",
    svgPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "LinkedIn", usuario: "CEFIEE — FIEE UNI",
    href: "https://www.linkedin.com/company/cefiee-centro-de-estudiantes-fiee-uni/",
    svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 relative overflow-hidden">
        <HeroBg />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-400 mb-3">Atención Estudiantil</p>
          <h1 className="font-serif text-white mb-4" style={{ fontSize: "clamp(2.2rem,5vw,3.2rem)" }}>
            Contáctanos
          </h1>
          <p className="font-sans text-white/55 text-base leading-relaxed max-w-xl">
            La Junta Directiva del CEFIEE está disponible para atender consultas, propuestas y necesidades de cualquier estudiante de la FIEE.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Info */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <h2 className="font-sans font-bold text-navy-900 text-xl mb-5">Información de Contacto</h2>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <a key={c.label} href={c.href}
                    className={`flex items-start gap-3 group ${c.href === "#" ? "cursor-default" : ""}`}>
                    <div className="w-10 h-10 rounded-[8px] bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-900 transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-navy-900 group-hover:text-white transition-colors">{c.icon}</span>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-gray-400">{c.label}</p>
                      <p className="font-sans text-navy-900 text-sm font-medium mt-0.5 group-hover:text-gold-500 transition-colors">{c.valor}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="font-sans font-bold text-navy-900 text-base mb-4">Redes Sociales</h3>
              <div className="space-y-3">
                {redes.map((r) => (
                  <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-[8px] bg-gray-100 flex items-center justify-center group-hover:bg-navy-900 transition-colors shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-500 group-hover:fill-white transition-colors">
                        <path d={r.svgPath} />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-navy-900 text-sm font-medium">{r.label}</p>
                      <p className="font-mono text-[11px] text-gray-400">{r.usuario}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <h2 className="font-sans font-bold text-navy-900 text-xl mb-6">Enviar Mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
