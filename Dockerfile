
FROM node:14.17.0-alpine as build

WORKDIR /opt/web

ENV SCRIPTS_FOLDER /docker

COPY client/package.json client/package-lock.json ./

COPY ./docker $SCRIPTS_FOLDER/

RUN npm ci

ENV PATH="./node_modules/.bin:$PATH"

COPY client ./

RUN ng build --configuration production

FROM nginx:alpine

RUN apk --no-cache add \
	bash \
	ca-certificates \
	supervisor \
	openjdk8-jre 
    
ENV SCRIPTS_FOLDER /docker

COPY etc/nginx/conf.d/nginx.conf /etc/nginx/conf.d/default.conf

COPY docker $SCRIPTS_FOLDER/

COPY --from=build /opt/web/dist/demo /usr/share/nginx/html/

COPY server/build/libs/*.jar /app/spring-boot-application.jar

ENTRYPOINT $SCRIPTS_FOLDER/entrypoint.sh