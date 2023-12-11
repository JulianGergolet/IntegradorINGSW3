#!/bin/bash
set -e

# Reemplazar la cadena ${PORT} en nginx.conf con el valor proporcionado por Heroku
sed -i 's/${PORT}/'"$PORT"'/g' /etc/nginx/nginx.conf

# Iniciar Nginx
nginx -g 'daemon off;'
