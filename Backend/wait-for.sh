#!/bin/sh
# Script wait-for.sh

set -e

host="$1"
shift
cmd="$@"

until node -e "const mysql = require('mysql2/promise'); (async () => { try { const connection = await mysql.createConnection({ host: '$host', user: 'root', password: 'julian', database: 'juliancito', port: 3306 }); console.log('Conexión a la base de datos establecida correctamente'); await connection.end(); process.exit(0); } catch (error) { console.error('Error al conectar a la base de datos:', error.message); process.exit(1); } })()"
do
  >&2 echo "La base de datos no está lista - esperando..."
  sleep 10
done

>&2 echo "La base de datos está lista - continuando..."
exec $cmd
