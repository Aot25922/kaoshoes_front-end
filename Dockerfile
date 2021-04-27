FROM node:latest 
WORKDIR /mysrc
COPY . /mysrc
RUN npm instal
RUN npm update
RUN npm run build
EXPOSE 80
CMD ["npm","run","serve"]