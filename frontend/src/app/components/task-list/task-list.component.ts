import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos de Angular Material que usaremos
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-list',
  // "standalone" por defecto en Angular 20 — cada componente importa lo que necesita
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  // Array donde guardaremos las tareas que vienen del backend
  tasks: Task[] = [];

  // Las columnas que mostrará la tabla
  displayedColumns: string[] = ['id', 'titulo', 'descripcion', 'estado', 'fecha_creacion', 'acciones'];

  // Inyectamos el servicio de tareas y el diálogo de Material
  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

  // ngOnInit se ejecuta cuando el componente se carga — aquí pedimos las tareas
  ngOnInit(): void {
    this.loadTasks();
  }

  // Pedir las tareas al backend
  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error('Error al cargar tareas', err)
    });
  }

  // Devuelve un color según el estado (para los chips)
  getStatusColor(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'warn';
      case 'en progreso': return 'accent';
      case 'completada': return 'primary';
      default: return '';
    }
  }

  // Abrir diálogo para CREAR una tarea
  openCreateDialog(): void {
    // Abrimos el diálogo sin datos (null = modo creación)
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: null
    });

    // Cuando el diálogo se cierra, recibimos la tarea creada
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si el usuario hizo click en "Crear" (no en cancelar)
        this.taskService.createTask(result).subscribe({
          next: () => this.loadTasks(),  // Recargamos la tabla
          error: (err) => console.error('Error al crear tarea', err)
        });
      }
    });
  }

  // Abrir diálogo para EDITAR una tarea existente
  openEditDialog(task: Task): void {
    // Abrimos el diálogo CON los datos de la tarea (modo edición)
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: task
    });

    // Cuando el diálogo se cierra, recibimos la tarea actualizada
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.updateTask(task.id!, result).subscribe({
          next: () => this.loadTasks(),  // Recargamos la tabla
          error: (err) => console.error('Error al actualizar tarea', err)
        });
      }
    });
  }

  // Eliminar tarea con confirmación
  deleteTask(id: number): void {
    // Preguntamos al usuario si está seguro
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      // Si dice que sí, llamamos al backend para eliminarla
      this.taskService.deleteTask(id).subscribe({
        next: () => this.loadTasks(),  // Recargamos la tabla
        error: (err) => console.error('Error al eliminar tarea', err)
      });
    }
  }
}
