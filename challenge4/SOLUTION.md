## Solution to Challenge 4

Add the following job to the gateway/etc/containerpilot.json5 file
```
{
  name: 'preStart',
  exec: 'generate-config'
},
```

Add the following to the gateway job in the gateway/etc/containerpilot.json5 file
```
when: {
  source: "preStart",
  once: "exitSuccess"
},
```

Add the following job to the gateway/etc/containerpilot.json5 file
```
{
  name: 'onchange-frontend',
  exec: 'generate-config',
  when: {
    source: 'watch.frontend',
    each: 'changed'
  }
}
```

Start the containers with
```sh
docker-compose up -d
```

Scale the frontend instances
```sh
docker-compose scale frontend=3
```

Point your browser to [http://localhost:8500](). You should see more instances of the frontend service as healthy.

Point your browser to [http://localhost:8080](). You should see a chart, like the one shown here:

![image](../images/frontend.png)

You can stop and remove the containers by running the following:

```sh
docker-compose down
```
