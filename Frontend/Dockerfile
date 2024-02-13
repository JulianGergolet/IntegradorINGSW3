# Utiliza una imagen de Python para construir el contenedor
FROM python:3.9-slim

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos frontend al directorio de trabajo /app
COPY index.html scripts.js style.css /app/

# Copia el archivo del servidor web Python al directorio de trabajo /app
COPY server.py /app/

# Expone el puerto 8000
EXPOSE 8080

# Ejecuta el servidor web Python al iniciar el contenedor
CMD ["python", "-u", "server.py"]

