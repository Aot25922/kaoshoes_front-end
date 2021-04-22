FROM node:15.14.0-alpine3.10
 
WORKDIR /app
 
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm instal
RUN npm install -g npm@7.10.0

COPY . .