import http.server
import socketserver

# Establece el puerto en el que se ejecutará el servidor
port = 8080

# Crea un manejador SimpleHTTPRequestHandler
handler = http.server.SimpleHTTPRequestHandler

# Inicia el servidor
with socketserver.TCPServer(("", port), handler) as httpd:
    print(f"Servidor en el puerto {port}")
    httpd.serve_forever()
