# Utiliza una imagen de Python para construir el contenedor
FROM python:3.9-slim

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos frontend al directorio de trabajo /app
COPY index.html scripts.js /app/

# Exponer el puerto proporcionado por Heroku
EXPOSE $PORT

# Ejecuta el servidor web Python al iniciar el contenedor
CMD ["python", "-m", "http.server", $PORT]
