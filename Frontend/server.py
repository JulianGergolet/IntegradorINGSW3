import os
import http.server
import socketserver

# Utiliza el puerto proporcionado por Heroku o el puerto 8080 de manera predeterminada
port = int(os.environ.get('PORT', 8080))

# Resto del código sin cambios
handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", port), handler) as httpd:
    print(f"Servidor en el puerto {port}")
    httpd.serve_forever()
