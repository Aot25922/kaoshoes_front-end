FROM node:alpine 
WORKDIR /mysrc
COPY . /mysrc
RUN npm instal
RUN npm update
RUN npm run build
EXPOSE 8080
CMD ["npm","run","serve"]