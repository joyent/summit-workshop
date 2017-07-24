FROM node:8-alpine

RUN apk update && \
    apk add --update curl bash build-base python && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /opt/app/lib
COPY package.json /opt/app/
COPY *.yml /opt/app/
COPY lib/ /opt/app/lib/
COPY server.js /opt/app/
WORKDIR /opt/app
RUN npm install && npm install cookie-parser

CMD ["node", "server.js"]
