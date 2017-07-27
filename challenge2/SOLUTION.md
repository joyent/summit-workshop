## Solution to Challenge 2


### Dockerfile

Add the following lines to the end of the Dockerfile
```
RUN npm install
CMD ["node", "."]
```


### Run

Build the image
```sh
docker build -t frontend .
```

Create and run a container passing in the `PORT` environment variable.
```sh
docker run -e "PORT=8080" -p "8080:8080" -d --name frontend frontend
```

Point your browser to [http://localhost:8080](). You should see a chart, like the one shown here:

![image](../images/frontend.png)


### Clean

You can stop and remove the container by running the following:

```sh
docker rm -f frontend
```

Verify that the container has been stopped:

```sh
docker ps
```
