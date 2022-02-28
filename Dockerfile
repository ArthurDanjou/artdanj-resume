FROM node:16-alpine3.11

RUN mkdir -p /usr/src/resume

WORKDIR /usr/src/resume

COPY . /usr/src/resume

RUN yarn install

RUN yarn build

EXPOSE 3344

CMD ["yarn", "preview --port 3344"]
