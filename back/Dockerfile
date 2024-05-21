FROM php:8.3.6-apache

RUN apt-get update && apt-get install -y zip unzip

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Allow composer to run as super user
ENV COMPOSER_ALLOW_SUPERUSER 1

COPY var/www/html /var/www/html

WORKDIR /var/www/html

RUN composer install
