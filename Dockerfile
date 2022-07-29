FROM node:latest

WORKDIR .

COPY package.json /app/apackage.json

RUN cd /app && npm install

COPY . /app/

EXPOSE 8282

WORKDIR /app

CMD ["npm", "start"]
CMD ["node", "adhmed.js"]