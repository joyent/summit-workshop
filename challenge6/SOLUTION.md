## Solution to Challenge 6

Add the following job to the docker-compose.yml file
```
humidity:
  build: ./sensor
  links:
    - consul:consul
  environment:
    - SENSOR_TYPE=humidity
    - CONSUL=consul
    - NATS_USER=ruser
    - NATS_PASSWORD=password
  restart: always
motion:
  build: ./sensor
  links:
    - consul:consul
  environment:
    - SENSOR_TYPE=motion
    - CONSUL=consul
    - NATS_USER=ruser
    - NATS_PASSWORD=password
  restart: always
```

Start the containers with
```sh
docker-compose up -d
```

Point your browser to [http://localhost:8080](). You should now see humidity and motion data.

You can stop and remove the containers by running the following:

```sh
docker-compose down
```
