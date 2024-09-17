FROM node:20

COPY ./mount /var/www/html

WORKDIR /var/www/html

RUN apt-get update \
    && apt-get install -y vim \
    && npm install

CMD [ "npm", "start" ]