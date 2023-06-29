FROM node:16

WORKDIR /app

RUN npm install --global pm2

COPY ./api/package.json .

RUN npm install 

COPY ./api .

EXPOSE 8000

CMD [ "node", "app.js" ]