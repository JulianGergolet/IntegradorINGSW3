# Usa una imagen de nginx para servir el frontend
FROM nginx:latest

# Elimina la configuración predeterminada de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de tu frontend al directorio de nginx
COPY index.html /usr/share/nginx/html
COPY scripts.js /usr/share/nginx/html
