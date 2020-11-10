# BASE
FROM node:14.15.0-alpine as base

MAINTAINER AHDesigns

ENV APP_HOME=/app
ENV PORT=3000

RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY package.json $APP_HOME
COPY yarn.lock $APP_HOME

RUN yarn install --prod
RUN cp -R node_modules prod_modules
RUN yarn install

# UNIT TEST
FROM base as unit-test
WORKDIR $APP_HOME

COPY . .

RUN yarn lint:ts
RUN yarn lint
RUN yarn test

# BUILD
FROM unit-test as build
WORKDIR $APP_HOME

RUN yarn build:client
RUN yarn build:server

# PROD
FROM node:14.15.0-alpine

COPY --from=base /app/prod_modules ./node_modules
COPY --from=build /app/build ./build

CMD ["node", "build/server/index.js"]
