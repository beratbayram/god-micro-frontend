FROM node:16.17.1-alpine3.15

RUN mkdir app

WORKDIR /app

COPY ./package.json .

RUN yarn  

COPY ./ .

RUN yarn build

RUN npm i -g http-server

EXPOSE 3003
CMD ["http-server", "dist","-p","3003"]
