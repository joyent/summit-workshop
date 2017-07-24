## Solution to Challenge 5

Add the following job to the sensor/lib/index.js file
```js
const serializer = Piloted.service('serializer');

if (!serializer) {
  console.error('Serializer not found');
  return setTimeout(() => { writeData(data); }, 1000);
}
```

Add the following job to the sensor/containerpilot.json5 file
```
{
  name: 'onchange-serializer',
  exec: 'pkill -SIGHUP node',
  when: {
    source: 'watch.serializer',
    each: 'changed'
  }
},
```

Add the following watch to the sensor/containerpilot.json5 file
```
{
  name: 'serializer',
  interval: 1
},
```

Start the containers with
```sh
docker-compose up -d
```

Point your browser to [http://localhost:8500](). You should see all of the services as healthy.

Point your browser to [http://localhost:8080]().

You can stop and remove the containers by running the following:

```sh
docker-compose down
```
