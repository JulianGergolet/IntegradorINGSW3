# Usa una imagen de nginx para servir el frontend
FROM nginx:latest

# Elimina la configuración predeterminada de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de tu frontend al directorio de nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY frontend/index.html /usr/share/nginx/html
COPY frontend/scripts.js /usr/share/nginx/html

# Comando para reemplazar las variables de entorno
CMD /bin/bash -c "envsubst '$$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
