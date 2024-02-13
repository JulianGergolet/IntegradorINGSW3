FROM node:18

WORKDIR /myapp

COPY package.json /myapp
RUN npm install

COPY . .

CMD ["sh", "-c", "sleep 25 && node index.js"]

