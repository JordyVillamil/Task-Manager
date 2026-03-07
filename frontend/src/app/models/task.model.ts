export interface Task {
  id?: number;                // Opcional al crear (el backend lo genera)
  titulo: string;
  descripcion: string;
  estado: 'pendiente' | 'en progreso' | 'completada';
  fecha_creacion?: string;    // Opcional al crear (el backend lo genera)
}
