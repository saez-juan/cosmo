FROM node:22-alpine

WORKDIR /app

COPY ./services ./services
COPY ./packages ./packages
COPY ./types ./types
COPY package.json .

RUN yarn install