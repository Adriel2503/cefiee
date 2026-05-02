import type { MiembroJunta, MiembroJuntaSimple } from "@/types";

export const JUNTA: MiembroJunta[] = [
  {
    nombre: "Carlos Mendoza Quispe",
    cargo: "Presidente",
    escuela: "Ing. Eléctrica",
    ciclo: "9no Ciclo",
    iniciales: "CM",
    color: "#92400E",
    email: "presidente@cefiee.uni.edu.pe",
    quote: "Nuestro compromiso es construir una FIEE más transparente, conectada y llena de oportunidades para cada uno de sus estudiantes.",
  },
  { nombre: "Ana Torres Huamán", cargo: "Vicepresidenta", escuela: "Ing. Electrónica", ciclo: "8vo Ciclo", iniciales: "AT", color: "#1E3A8A", email: "vicepresidenta@cefiee.uni.edu.pe" },
  { nombre: "Luis Vargas Ccopa", cargo: "Secretario General", escuela: "Telecomunicaciones", ciclo: "7mo Ciclo", iniciales: "LV", color: "#7F1D1D", email: "secretario@cefiee.uni.edu.pe" },
  { nombre: "Diana Rojas Condori", cargo: "Tesorera", escuela: "Ciberseguridad", ciclo: "8vo Ciclo", iniciales: "DR", color: "#064E3B", email: "tesorera@cefiee.uni.edu.pe" },
  { nombre: "Miguel Quispe Flores", cargo: "Delegado — Eléctrica", escuela: "Ing. Eléctrica", ciclo: "6to Ciclo", iniciales: "MQ", color: "#92400E", email: "delegado.ee@cefiee.uni.edu.pe" },
  { nombre: "Valeria Chávez Mamani", cargo: "Delegada — Electrónica", escuela: "Ing. Electrónica", ciclo: "6to Ciclo", iniciales: "VC", color: "#1E3A8A", email: "delegada.elt@cefiee.uni.edu.pe" },
  { nombre: "Roberto Huanca Pinto", cargo: "Delegado — Telecom", escuela: "Telecomunicaciones", ciclo: "7mo Ciclo", iniciales: "RH", color: "#7F1D1D", email: "delegado.tc@cefiee.uni.edu.pe" },
  { nombre: "Sofía Mamani Lazo", cargo: "Delegada — Ciberseguridad", escuela: "Ciberseguridad", ciclo: "5to Ciclo", iniciales: "SM", color: "#064E3B", email: "delegada.cs@cefiee.uni.edu.pe" },
  { nombre: "Gabriela Ramos Vega", cargo: "Delegada — Biomédica", escuela: "Ing. Biomédica", ciclo: "6to Ciclo", iniciales: "GR", color: "#4C1D95", email: "delegada.bm@cefiee.uni.edu.pe" },
];

// Subset curatorial para el card grid del home (VP + Sec + Tes + 2 Delegados)
export const JUNTA_HOME_MIEMBROS: MiembroJuntaSimple[] = [
  { nombre: "Ana Torres Huamán", cargo: "Vicepresidenta", escuela: "Electrónica", iniciales: "AT", color: "#1E3A8A" },
  { nombre: "Luis Vargas Ccopa", cargo: "Secretario", escuela: "Telecomunicaciones", iniciales: "LV", color: "#7F1D1D" },
  { nombre: "Diana Rojas Condori", cargo: "Tesorera", escuela: "Ciberseguridad", iniciales: "DR", color: "#064E3B" },
  { nombre: "Miguel Quispe Flores", cargo: "Delegado", escuela: "Eléctrica", iniciales: "MQ", color: "#92400E" },
  { nombre: "Sofía Mamani Lazo", cargo: "Delegada", escuela: "Ciberseguridad", iniciales: "SM", color: "#064E3B" },
];
