## Solution to Challenge 3

### URLs

Add the following lines to the gateway/gateway.config.yml file
```
urls:
  - 'http://frontend1:8080'
  - 'http://frontend2:8080'
```

Update the docker-compose gateway `links` section with the following entries
```sh
links:
  - frontend1
  - frontend2
```

### Run

Update/build the containers with
```sh
docker-compose build
```

Start the containers with
```sh
docker-compose up
```

Point your browser to [http://localhost:8080](). You should see a chart, like the one shown here:

![image](../images/frontend.png)


### Clean

You can stop and remove the containers by running the following:

```sh
docker-compose down
```

Verify that the containers have been stopped:

```sh
docker ps
```
