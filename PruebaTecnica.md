# Prueba Técnica – Desarrollador Full Stack Junior

## Objetivo

Evaluar habilidades básicas de desarrollo Full Stack utilizando Angular 20, Angular Material, Node.js con Express y MySQL. Se evaluará estructura de proyecto, buenas prácticas, manejo de API REST y conexión con base de datos.

---

## Tecnologías requeridas

- **Frontend:** Angular 20, Angular Material
- **Backend:** Node.js + Express
- **Base de datos:** MySQL
- **Control de versiones:** Git
- **Opcional:** Docker

---

## Descripción del problema

Se debe desarrollar una pequeña aplicación de gestión de tareas **(Task Manager)** donde los usuarios puedan crear, visualizar, editar y eliminar tareas.

---

## Requerimientos Backend (Node.js + Express)

Crear una API REST con las siguientes rutas:

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/tasks` | Listar todas las tareas |
| GET | `/tasks/:id` | Obtener una tarea por ID |
| POST | `/tasks` | Crear una nueva tarea |
| PUT | `/tasks/:id` | Actualizar una tarea |
| DELETE | `/tasks/:id` | Eliminar una tarea |

### Modelo de tarea

| Campo | Tipo |
|-------|------|
| `id` | INT, PK, AUTO_INCREMENT |
| `titulo` | VARCHAR |
| `descripcion` | TEXT |
| `estado` | `pendiente` / `en progreso` / `completada` |
| `fecha_creacion` | DATETIME |

### Requisitos

- Usar Express
- Conectar con MySQL
- Usar estructura básica por capas (`routes`, `controllers`, `services` o similar)
- Manejo básico de errores *(Opcional)*

---

## Requerimientos Base de Datos (MySQL)

Crear una base de datos llamada `task_manager`.

```sql
CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE tasks (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  titulo         VARCHAR(150)  NOT NULL,
  descripcion    TEXT,
  estado         VARCHAR(50)   NOT NULL DEFAULT 'pendiente',
  fecha_creacion DATETIME      DEFAULT CURRENT_TIMESTAMP
);
```

---

## Requerimientos Frontend (Angular 20 + Angular Material)

Crear una aplicación Angular que consuma la API.

### API Pública adicional

**URL base:** `https://jsonplaceholder.typicode.com/`

> Consultar la documentación para los endpoints disponibles. Se debe consumir **al menos un GET** de esta API y mostrar la información en un **componente separado** al del Task Manager.

### Funcionalidades

1. Listar tareas en una tabla (**Angular Material Table**)
2. Crear nueva tarea mediante un formulario (**Angular Material Form**)
3. Editar tareas existentes
4. Eliminar tareas
5. Mostrar estado con **chips o badges** de Angular Material
6. Usar **servicios** para consumir la API

### Diseño UI

Debe usarse Angular Material. Incluir:

- Toolbar superior
- Tabla de tareas
- Botón **"Nueva tarea"**
- Modal o diálogo para crear/editar tareas

---

## Entregables

- [ ] Repositorio en GitHub
- [ ] Script SQL para crear la base de datos
- [ ] README con instrucciones para ejecutar el proyecto
- [ ] Capturas de pantalla o video demostrando el funcionamiento

---

## Criterios de evaluación

| Criterio | Descripción |
|----------|-------------|
| Estructura del proyecto | Organización de carpetas y separación de responsabilidades |
| Funcionamiento del CRUD | Crear, leer, actualizar y eliminar tareas correctamente |
| Uso de Angular y Angular Material | Componentes, servicios, formularios y UI correctamente implementados |
| Conexión con la API | Consumo correcto del backend y de la API pública |
| Buenas prácticas | Código limpio, legible y mantenible |
| Claridad del README | Instrucciones claras para ejecutar el proyecto |