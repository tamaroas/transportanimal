FROM php:7-apache

RUN a2enmod rewrite

COPY . /var/www/html/

EXPOSE 80

CMD ["apache2-foreground"]
