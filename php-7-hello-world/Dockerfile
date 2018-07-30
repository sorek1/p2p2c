FROM alpine:edge
WORKDIR /www
RUN apk add --no-cache nginx php7-fpm
COPY conf/nginx.conf /etc/nginx/
COPY *.php ./
CMD ["sh", "-c", "php-fpm7 -F -R & nginx & wait"]
