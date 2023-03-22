FROM node:19.2-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npx", "nx", "serve", "mhw-board-companion-api" ]
