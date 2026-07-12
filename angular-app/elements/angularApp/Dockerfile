FROM node:16.17.1-alpine3.15

RUN mkdir app

WORKDIR /app

COPY ./angularApp/package.json ./angularApp/

RUN cd angularApp && npm install

COPY ./ .

RUN cd angularApp && npm run build

RUN npm i -g http-server

EXPOSE 3004
CMD ["http-server", "angularApp/dist", "-p", "3004"]
