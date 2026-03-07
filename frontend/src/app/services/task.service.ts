import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment';

// @Injectable = "este servicio puede ser inyectado en cualquier componente"
// providedIn: 'root' = "disponible en toda la aplicación"
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // La URL viene del archivo de environment
  // En desarrollo: http://localhost:3000/tasks
  // En Docker (producción): /tasks (Nginx lo redirige al backend)
  private apiUrl = environment.apiUrl;

  // Inyectamos HttpClient (la herramienta para hacer peticiones HTTP)
  constructor(private http: HttpClient) {}

  // GET /tasks → Obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // GET /tasks/:id → Obtener una tarea por su ID
  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  // POST /tasks → Crear una nueva tarea
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // PUT /tasks/:id → Actualizar una tarea existente
  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  // DELETE /tasks/:id → Eliminar una tarea
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
