FROM openjdk:16-alpine as build
RUN apk add --no-cache maven
WORKDIR /mysrc
COPY ./back-end /mysrc
RUN mvn clean package
RUN apk del maven
EXPOSE 8081
ENTRYPOINT ["java","-jar","/mysrc/target/int221-project-0.0.1-SNAPSHOT.jar"]

FROM node:latest 
WORKDIR /mysrc
COPY ./front-end /mysrc
RUN npm instal

EXPOSE 8080
CMD ["npm","run","serve"]