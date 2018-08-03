FROM alpine:edge as base
WORKDIR /usr/src/app
RUN apk --update --no-cache add curl libstdc++ libgcc && \
    curl -LO https://github.com/zeit/now-cli/releases/download/12.0.0-canary.70/now-alpine.gz && \
    gunzip now-alpine.gz && \
    chmod +x now-alpine && \
    mv now-alpine /bin/now
ARG NOW_TOKEN
COPY . .
RUN find ./ -maxdepth 1 -type d '!' -path './' '!' -path './.*' -exec ./.now/deploy '{}' $NOW_TOKEN ';' && \
    echo "</ul></body></html>" >> .now/index.html

FROM jtyr/asmttpd
COPY --from=base /usr/src/app/.now/index.html /data
COPY --from=base /usr/src/app/.now/css /data/css
COPY --from=base /usr/src/app/.now/images /data/images
