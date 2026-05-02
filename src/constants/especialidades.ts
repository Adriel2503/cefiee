import type { Especialidad } from "@/types";

export const ESPECIALIDADES: Especialidad[] = [
  {
    id: "electrica",
    nombre: "Ingeniería Eléctrica",
    sigla: "EP-EE",
    icon: "bolt",
    color: "#92400E",
    bg: "#FEF3CD",
    descripcion: "Sistemas de potencia, máquinas eléctricas, control y automatización industrial.",
  },
  {
    id: "electronica",
    nombre: "Ingeniería Electrónica",
    sigla: "EP-ELT",
    icon: "memory",
    color: "#1E3A8A",
    bg: "#EFF6FF",
    descripcion: "Sistemas embebidos, procesamiento de señales, diseño de hardware y robótica.",
  },
  {
    id: "telecom",
    nombre: "Telecomunicaciones",
    sigla: "EP-TC",
    icon: "settings_input_antenna",
    color: "#7F1D1D",
    bg: "#FEF2F2",
    descripcion: "Redes de comunicaciones, antenas, propagación de ondas y sistemas satelitales.",
  },
  {
    id: "ciberseguridad",
    nombre: "Ciberseguridad",
    sigla: "EP-CS",
    icon: "lock",
    color: "#064E3B",
    bg: "#ECFDF5",
    descripcion: "Seguridad de sistemas, análisis forense digital, criptografía y protección de redes.",
  },
  {
    id: "biomedica",
    nombre: "Ingeniería Biomédica",
    sigla: "EP-BM",
    icon: "biotech",
    color: "#4C1D95",
    bg: "#F5F3FF",
    descripcion: "Dispositivos médicos, imágenes diagnósticas, biomecánica y tecnología aplicada a la salud.",
  },
];
