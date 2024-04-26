FROM node:20

WORKDIR /auth

COPY . /auth/

RUN apt-get update \
    && apt-get install -y vim \
    && npm install

EXPOSE 80

CMD [ "npm", "run", "serve" ]