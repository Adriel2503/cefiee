import type { Espacio } from "@/types";

export const ESPACIOS: Espacio[] = [
  {
    id: "centrito",
    nombre: "El Centrito",
    ubicacion: "3er Piso, Pabellón Principal",
    horario: "Lun–Vie, 9:00–17:00",
    icon: "support_agent",
    accentColor: "#0A2052",
    status: "abierto",
    capacidad: "15 personas",
    info: "Centro de atención estudiantil para trámites de certificados, constancias de matrícula y consultas generales con la junta directiva. Atención personalizada.",
    cta: "Agendar Cita",
    ctaIcon: "calendar_month",
    servicios: ["Trámites y certificados", "Constancias de matrícula", "Préstamo de materiales", "Atención de la Junta Directiva"],
  },
  {
    id: "aula",
    nombre: "Aula de Estudio",
    ubicacion: "3er Piso, Ala Estudiantil",
    horario: "Lun–Sáb, 7:00–20:00",
    icon: "school",
    accentColor: "#C8860A",
    status: "abierto",
    capacidad: "40 personas",
    info: "Espacio colaborativo con internet de alta velocidad, mesas grupales e individuales y ambiente climatizado. Ideal para proyectos y preparación de exámenes.",
    cta: "Ver Disponibilidad",
    ctaIcon: "event_seat",
    servicios: ["Wi-Fi de alta velocidad", "Mesas grupales e individuales", "Enchufes en cada puesto", "Ambiente climatizado"],
  },
];
