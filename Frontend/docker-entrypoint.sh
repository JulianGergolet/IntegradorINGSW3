#!/bin/bash
set -e

# Realizar la sustitución de variables en nginx.conf
envsubst '${PORT:-80}' < /etc/nginx/nginx.conf > /etc/nginx/conf.d/default.conf

# Iniciar Nginx
nginx -g 'daemon off;'
