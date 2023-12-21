# Usa una imagen de nginx para servir el frontend
FROM nginx:latest

# Elimina la configuración predeterminada de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de tu frontend al directorio de nginx
COPY /ruta/a/tu/frontend /usr/share/nginx/html

# Define la variable de entorno PORT para que el servidor use el puerto asignado por Heroku
ENV PORT=80

# Comando para iniciar el servidor cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]
