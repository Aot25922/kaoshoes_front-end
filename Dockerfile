FROM node:alpine 
WORKDIR /mysrc
COPY . /mysrc
RUN npm install
# RUN npm update
# RUN npm run build
EXPOSE 8080
CMD ["npm","run","build"]
CMD ["npm","run","serve"]