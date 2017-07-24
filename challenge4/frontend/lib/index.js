'use strict';

// Load modules

const Path = require('path');
const Brule = require('brule');
const Hapi = require('hapi');
const Inert = require('inert');
const WebStream = require('./webStream');

function main () {
  const serverConfig = {
    connections: {
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'public')
        }
      }
    }
  };

  const server = new Hapi.Server(serverConfig);
  server.connection({ port: process.env.PORT });
  server.register([Brule, Inert], () => {
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
          index: true
        }
      }
    });

    server.start(() => {
      console.log(`listening at http://localhost:${server.info.port}`);
      startReading(WebStream(server.listener));
    });
  });
}
main();

function startReading (webStream) {
  let lastEmitted = 0;
  setInterval(() => {
    const points = [
      { type: 'humidity', value: (50 * Math.random()), time: Date.now() },
      { type: 'motion', value: Math.floor((2 * Math.random())), time: Date.now() },
      { type: 'temperature', value: (100 * Math.random()), time: Date.now() },
    ];
    webStream.emit(points);
  }, 1000);
}
