FROM mhart/alpine-node:10 as base
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc
WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn
COPY . .
RUN yarn --production

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
CMD ["node", "src/main.js"]
