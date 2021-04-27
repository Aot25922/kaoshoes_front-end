FROM node:latest 
WORKDIR /mysrc
COPY . /mysrc
RUN npm instal
EXPOSE 8080
CMD ["npm","run","serve","-- --port 80"]