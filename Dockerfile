FROM node:8.11.1

RUN mkdir -p app

WORKDIR /app

COPY . /app

RUN yarn install

ENV PORT=80

EXPOSE 80