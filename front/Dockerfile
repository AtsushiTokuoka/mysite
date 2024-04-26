FROM node:20

WORKDIR /front

COPY . /front/

RUN apt-get update \
    && apt-get install -y vim \
    && npm install

EXPOSE 80

CMD [ "npm", "start" ]