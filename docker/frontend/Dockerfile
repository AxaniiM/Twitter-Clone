FROM node:16

WORKDIR /app

RUN npm install --global pm2

COPY ./website/package.json .

RUN npm install 

COPY ./website .

RUN npm run build

EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "start"]