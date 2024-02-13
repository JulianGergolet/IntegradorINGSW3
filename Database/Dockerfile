FROM mysql

# Variables de entorno para configurar la base de datos
ENV MYSQL_ROOT_PASSWORD=julian
ENV MYSQL_DATABASE=juliancito

# Copiar el archivo SQL a la carpeta de inicialización del MySQL
COPY transacciones.sql /docker-entrypoint-initdb.d/transacciones.sql
