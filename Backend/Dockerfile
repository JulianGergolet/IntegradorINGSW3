FROM node:18

WORKDIR /myapp

# Copia el archivo package.json e instala las dependencias
COPY package.json /myapp
RUN npm install



# Copia todo el resto de los archivos
COPY . .

# Espera a que la base de datos esté disponible y luego inicia el backend
CMD ["sh", "-c", "sleep 25 && node index.js"]

