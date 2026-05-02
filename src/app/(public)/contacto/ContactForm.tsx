"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const ASUNTOS = [
  "Consulta general",
  "Propuesta de actividad",
  "Oferta laboral o pasantía",
  "Problema o queja",
  "Otro",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ nombre: "", correo: "", asunto: ASUNTOS[0], mensaje: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="border border-green-200 bg-green-50 rounded-[12px] p-10 text-center">
        <span className="material-symbols-outlined text-[48px] text-green-600">check_circle</span>
        <h3 className="font-sans font-bold text-navy-900 text-lg mt-3 mb-2">¡Mensaje enviado!</h3>
        <p className="font-sans text-gray-500 text-sm">
          Nos pondremos en contacto contigo en un plazo de 24–48 horas hábiles.
        </p>
        <button
          onClick={() => { setForm({ nombre: "", correo: "", asunto: ASUNTOS[0], mensaje: "" }); setState("idle"); }}
          className="mt-6 font-sans text-sm font-semibold text-navy-900 underline underline-offset-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1.5">
            Nombre completo <span className="text-red-400">*</span>
          </label>
          <input
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
            className="w-full h-11 px-4 rounded-[8px] border border-gray-200 bg-gray-50 font-sans text-sm text-navy-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition"
          />
        </div>
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1.5">
            Correo electrónico <span className="text-red-400">*</span>
          </label>
          <input
            name="correo"
            type="email"
            required
            value={form.correo}
            onChange={handleChange}
            placeholder="tu.correo@uni.edu.pe"
            className="w-full h-11 px-4 rounded-[8px] border border-gray-200 bg-gray-50 font-sans text-sm text-navy-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1.5">
          Asunto <span className="text-red-400">*</span>
        </label>
        <select
          name="asunto"
          value={form.asunto}
          onChange={handleChange}
          className="w-full h-11 px-4 rounded-[8px] border border-gray-200 bg-gray-50 font-sans text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition appearance-none"
        >
          {ASUNTOS.map((a) => <option key={a}>{a}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1.5">
          Mensaje <span className="text-red-400">*</span>
        </label>
        <textarea
          name="mensaje"
          required
          rows={6}
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full px-4 py-3 rounded-[8px] border border-gray-200 bg-gray-50 font-sans text-sm text-navy-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition resize-none"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="font-mono text-[10px] text-gray-300">
          <span className="text-red-400">*</span> Campos obligatorios
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="h-11 px-8 rounded-[8px] bg-navy-900 text-white font-sans text-sm font-semibold hover:bg-navy-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {state === "sending" ? (
            <>
              <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
              Enviando…
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[16px]">send</span>
              Enviar mensaje
            </>
          )}
        </button>
      </div>
    </form>
  );
}
