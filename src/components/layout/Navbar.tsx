"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ESPECIALIDADES } from "@/constants/especialidades";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/oportunidades", label: "Oportunidades" },
  { href: "/comunicados", label: "Comunicados" },
  { href: "/actividades", label: "Actividades" },
  { href: "/academico", label: "Académico" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 rounded-[6px] bg-navy-900 flex items-center justify-center shrink-0">
            <span className="text-white font-serif text-[13px] select-none">C</span>
          </div>
          <div className="leading-none">
            <span className="font-sans font-bold text-navy-900 text-[17px] block tracking-tight">CEFIEE</span>
            <span className="font-mono text-[10px] text-gray-400">FIEE · UNI</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-sans text-sm px-4 py-2 rounded-[6px] transition-colors ${
                  active
                    ? "font-semibold text-navy-900 bg-navy-50"
                    : "font-medium text-gray-600 hover:text-navy-900 hover:bg-navy-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {ESPECIALIDADES.map((e) => (
              <span
                key={e.id}
                className="material-symbols-outlined text-[16px] cursor-default"
                style={{ color: e.color }}
                title={e.nombre}
              >
                {e.icon}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-[6px] text-navy-900 hover:bg-navy-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-sans text-sm font-medium text-gray-700 px-4 py-3 rounded-[6px] hover:bg-navy-50 hover:text-navy-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
