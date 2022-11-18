FROM node:16.17.1-alpine3.15

RUN mkdir app

WORKDIR /app

COPY ./package.json .

COPY ./ .

RUN yarn  

RUN yes | npm install webpack -D

RUN yes | npm install -D webpack-cli

RUN npm install --save-dev @types/html-webpack-plugin

RUN yarn build

RUN npm i -g http-server

EXPOSE 4000
CMD ["http-server", "dist", "-p", "4000"]
