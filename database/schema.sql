CREATE DATABASE IF NOT EXISTS task_manager;
USE task_manager;

CREATE TABLE IF NOT EXISTS tasks (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  titulo         VARCHAR(150)  NOT NULL,
  descripcion    TEXT,
  estado         VARCHAR(50)   NOT NULL DEFAULT 'pendiente',
  fecha_creacion DATETIME      DEFAULT CURRENT_TIMESTAMP
);
