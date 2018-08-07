FROM zeit/wait-for:0.2 as wait

FROM alpine:edge
COPY --from=wait /bin/wait-for /bin/wait-for
WORKDIR /www
RUN apk add --no-cache nginx php7-fpm bash
COPY conf/nginx.conf /etc/nginx/
COPY conf/www.conf /etc/php7/php-fpm.d/
COPY *.php ./
CMD ["/bin/bash", "-c", "php-fpm7 -F & (wait-for /tmp/php7-fpm.sock && nginx) & wait -n"]
