FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8282

CMD ["node", "adhmed.js"]
