FROM node:latest 
WORKDIR /mysrc
COPY . /mysrc
RUN npm instal
EXPOSE 80
CMD ["npm","run","serve","-- --port 80"]