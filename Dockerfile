FROM node:15-alpine

# directorio de aplicacion
WORKDIR /usr/src/app

COPY package*.json ./

RUN apk update && npm install
RUN npm install pm2 -g

COPY . .

ENTRYPOINT [ "pm2-runtime", "index.js" ]