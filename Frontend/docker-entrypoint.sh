#!/bin/bash
set -e

# Reemplaza ${PORT} por el número de puerto proporcionado por Heroku al ejecutar el contenedor
sed -i -e 's/\${PORT}/'"$PORT"'/g' /etc/nginx/nginx.conf

# Iniciar Nginx
nginx -g 'daemon off;'
