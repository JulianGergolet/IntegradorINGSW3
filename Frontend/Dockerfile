# Usa una imagen de nginx para servir el frontend
FROM nginx:latest

# Elimina la configuración predeterminada de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de tu frontend al directorio de nginx
COPY index.html /usr/share/nginx/html

# Define una variable de entorno para el puerto y expone ese puerto
EXPOSE $PORT

# Comando para iniciar el servidor cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]
