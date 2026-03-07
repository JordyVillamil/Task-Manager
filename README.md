# Task Manager - Prueba Técnica Full Stack

Aplicación de gestión de tareas (CRUD) desarrollada con Angular, Node.js, Express y MySQL.

## Tecnologías utilizadas

- **Frontend:** Angular 20 + Angular Material
- **Backend:** Node.js + Express
- **Base de datos:** MySQL 8.4
- **Control de versiones:** Git

## Estructura del proyecto

```
task-manager/
├── backend/                 # API REST con Node.js + Express
│   └── src/
│       ├── app.js           # Punto de entrada del servidor
│       ├── config/
│       │   └── db.js        # Conexión a MySQL
│       ├── routes/
│       │   └── task.routes.js
│       ├── controllers/
│       │   └── task.controller.js
│       └── services/
│           └── task.service.js
├── frontend/                # Aplicación Angular
│   └── src/app/
│       ├── components/
│       │   ├── task-list/   # Tabla de tareas (CRUD)
│       │   ├── task-dialog/ # Modal para crear/editar tareas
│       │   └── user-list/   # Consumo de API pública
│       ├── models/          # Interfaces TypeScript
│       └── services/        # Servicios HTTP
└── database/
    └── schema.sql           # Script para crear la base de datos
```

## Requisitos previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [MySQL](https://www.mysql.com/) (v8.0 o superior)
- [Angular CLI](https://angular.dev/) (`npm install -g @angular/cli`)

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd task-manager
```

### 2. Crear la base de datos

Ejecutar el script SQL en MySQL:

```bash
mysql -u root -p < database/schema.sql
```

Esto crea la base de datos `task_manager` y la tabla `tasks`.

### 3. Configurar el backend

```bash
cd backend
npm install
```

Crear un archivo `.env` en la carpeta `backend/` con las credenciales de MySQL:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=task_manager
DB_PORT=3306
PORT=3000
```

### 4. Iniciar el backend

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`.

### 5. Configurar e iniciar el frontend

En otra terminal:

```bash
cd frontend
npm install
ng serve
```

La aplicación se abrirá en `http://localhost:4200`.

## Ejecución con Docker (Opcional)

Con Docker instalado, puedes levantar todo el proyecto con un solo comando:

```bash
docker-compose up --build
```

Esto levanta automáticamente:
- **MySQL** en el puerto 3307
- **Backend** en `http://localhost:3000`
- **Frontend** en `http://localhost:4200`

Para detener los contenedores:

```bash
docker-compose down
```

## API REST - Endpoints

| Método | Ruta           | Descripción              |
|--------|----------------|--------------------------|
| GET    | `/tasks`       | Listar todas las tareas  |
| GET    | `/tasks/:id`   | Obtener una tarea por ID |
| POST   | `/tasks`       | Crear una nueva tarea    |
| PUT    | `/tasks/:id`   | Actualizar una tarea     |
| DELETE | `/tasks/:id`   | Eliminar una tarea       |

### Modelo de tarea

```json
{
  "id": 1,
  "titulo": "Ejemplo de tarea",
  "descripcion": "Descripción de la tarea",
  "estado": "pendiente",
  "fecha_creacion": "2026-03-07T12:00:00.000Z"
}
```

Los estados posibles son: `pendiente`, `en progreso`, `completada`.

## API Pública consumida

Se consume el endpoint `GET https://jsonplaceholder.typicode.com/users` para obtener una lista de usuarios, mostrada en un componente separado al de las tareas.

## Funcionalidades

- Listar tareas en una tabla de Angular Material
- Crear nuevas tareas mediante un formulario en un diálogo/modal
- Editar tareas existentes
- Eliminar tareas con confirmación
- Mostrar estado de las tareas con chips de colores
- Consumo de API pública (JSONPlaceholder) en un componente independiente
