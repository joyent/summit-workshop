FROM node:8-alpine

# Install our application
RUN mkdir -p /opt/app/lib/public
COPY package.json /opt/app/
COPY lib/*.js /opt/app/lib/
COPY lib/public /opt/app/lib/public
WORKDIR /opt/app
