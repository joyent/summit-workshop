## Solution to Challenge 7

Add the following metric to the serializer/containerpilot.json5 file.
```
,
{
  namespace: 'example',
  subsystem: 'process',
  name: 'event_delay',
  help: 'Node.js event loop delay',
  type: 'gauge'
}
```

Start the containers with
```sh
docker-compose up -d
```

Point your browser to [http://localhost:9090](). Run the event delay metric.

You can stop and remove the containers by running the following:

```sh
docker-compose down
```
