export interface Especialidad {
  id: string;
  nombre: string;
  sigla: string;
  icon: string;
  color: string;
  bg: string;
  descripcion: string;
}

export interface MiembroJunta {
  nombre: string;
  cargo: string;
  escuela: string;
  ciclo: string;
  iniciales: string;
  color: string;
  email: string;
  quote?: string;
}

export interface MiembroJuntaSimple {
  nombre: string;
  cargo: string;
  escuela: string;
  iniciales: string;
  color: string;
}

export interface Espacio {
  id: string;
  nombre: string;
  ubicacion: string;
  horario: string;
  icon: string;
  accentColor: string;
  status: string;
  info?: string;
  cta?: string;
  ctaIcon?: string;
  capacidad?: string;
  servicios?: string[];
}

export interface Evento {
  titulo: string;
  descripcion: string;
  dia: string;
  mes: string;
  lugar: string;
  tipo: string;
  escuela: string;
  color: string;
  bg: string;
  icon: string;
}

export interface Oferta {
  titulo: string;
  empresa: string;
  tipo: string;
  modalidad: string;
  carreras: string[];
  color: string;
  bg: string;
  icon: string;
  limite: string;
}

export interface AgendaItem {
  titulo: string;
  fecha: string;
  hora: string;
  lugar: string;
  tipo: string;
}

export interface Comunicado {
  titulo: string;
  categoria: string;
  hace: string;
  icon: string;
  descripcion?: string;
}

export interface Taller {
  titulo: string;
  tipo: string;
  fecha: string;
  lugar: string;
  cupos: string;
  descripcion: string;
  color: string;
  bg: string;
  icon: string;
  destacado: boolean;
}
