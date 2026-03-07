import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Módulos de Angular Material para el formulario
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-dialog',
  imports: [
    CommonModule,
    FormsModule,           // Para usar [(ngModel)] en los inputs
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss',
})
export class TaskDialogComponent {

  // Los datos del formulario
  task: Task;

  // ¿Es edición o creación?
  isEdit: boolean;

  // Lista de estados posibles para el select
  estados: string[] = ['pendiente', 'en progreso', 'completada'];

  constructor(
    // Referencia al diálogo (para poder cerrarlo)
    private dialogRef: MatDialogRef<TaskDialogComponent>,

    // Datos que se pasan al abrir el diálogo
    // Si viene una tarea = editar, si viene null = crear
    @Inject(MAT_DIALOG_DATA) public data: Task | null
  ) {
    this.isEdit = !!data; // true si hay datos, false si es null

    // Si es edición, copiamos los datos. Si es creación, formulario vacío
    this.task = data
      ? { ...data }  // Copia de la tarea (para no modificar la original)
      : { titulo: '', descripcion: '', estado: 'pendiente' };
  }

  // Al hacer click en "Guardar", cerramos el diálogo y devolvemos la tarea
  onSave(): void {
    this.dialogRef.close(this.task);
  }

  // Al hacer click en "Cancelar", cerramos sin devolver nada
  onCancel(): void {
    this.dialogRef.close();
  }
}
