FROM php:8.3.6-apache

RUN apt-get update && apt-get install -y zip unzip

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Allow composer to run as super user
ENV COMPOSER_ALLOW_SUPERUSER 1

# apache2 configuration
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
RUN a2ensite 000-default.conf && a2enmod rewrite && service apache2 restart

COPY ./mnt /var/www/html

WORKDIR /var/www/html

RUN chown -R www-data:www-data ./storage/ \
    && chmod -R 775 /var/www/html/storage

RUN composer install
