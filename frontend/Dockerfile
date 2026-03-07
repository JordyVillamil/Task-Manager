# ETAPA 1: Compilar la aplicación Angular
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos package.json e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el código y compilamos
COPY . .
RUN npx ng build --configuration=production

# ETAPA 2: Servir con Nginx
FROM nginx:alpine

# Copiamos los archivos compilados al servidor Nginx
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Configuración de Nginx para Angular (redirige todas las rutas a index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
