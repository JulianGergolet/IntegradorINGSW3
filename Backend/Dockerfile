FROM node:18

WORKDIR /myapp

# Copia el archivo package.json e instala las dependencias
COPY package.json /myapp
RUN npm install

# Copia el script wait-for.sh
COPY wait-for.sh /myapp
RUN chmod +x /myapp/wait-for.sh

# Copia todo el resto de los archivos
COPY . .

# Espera a que la base de datos esté disponible y luego inicia el backend
CMD ["/myapp/wait-for.sh", "database", "node", "index.js"]

