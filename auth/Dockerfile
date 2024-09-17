FROM node:20

WORKDIR /auth

COPY ./mount /auth

RUN apt-get update \
    && apt-get install -y vim \
    && npm install

EXPOSE 80

CMD [ "npm", "run", "serve" ]