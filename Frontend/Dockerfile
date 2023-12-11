# Usa una imagen de nginx para servir el frontend
FROM nginx:latest

# Elimina la configuración predeterminada de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de tu frontend al directorio de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY frontend/index.html /usr/share/nginx/html
COPY frontend/scripts.js /usr/share/nginx/html

# Configura el puerto de Nginx para que sea dinámico
ENV PORT=80  
RUN sed -i -e 's/listen\s*80/listen $PORT/' /etc/nginx/conf.d/default.conf

# Comando para ejecutar Nginx, utilizando el puerto proporcionado por Heroku
CMD ["nginx", "-g", "daemon off;"]
