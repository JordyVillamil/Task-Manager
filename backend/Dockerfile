# Usamos Node.js 20 (versión LTS estable)
FROM node:20-alpine

# Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json primero (para aprovechar la caché de Docker)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# El servidor escucha en el puerto 3000
EXPOSE 3000

# Comando para arrancar el servidor
CMD ["node", "src/app.js"]
