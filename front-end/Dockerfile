FROM node:latest 
WORKDIR /mysrc
COPY . /mysrc
RUN npm instal
RUN npm install -g npm@7.11.1
EXPOSE 8080
CMD ["npm","run","serve"]