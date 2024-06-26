FROM node:22-alpine

WORKDIR /app

COPY ./scripts ./scripts
COPY ./services ./services
COPY ./packages ./packages
COPY ./types ./types
COPY ./package.json .

RUN apk add --no-cache bash
RUN corepack enable && yarn set version stable && yarn install