# Use the MySQL base image
FROM mysql

# Variables de entorno
ENV MYSQL_ROOT_PASSWORD=julian
ENV MYSQL_DATABASE=juliancito

# Copiar el archivo SQL al directorio de inicialización de la base de datos
COPY transacciones.sql /docker-entrypoint-initdb.d/transacciones.sql
