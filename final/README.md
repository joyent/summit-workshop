### Production

When deploying to Triton, first setup your environment then run `docker-compose`. Below is an example of setting your environment variables then pushing the code to production.

You can either set your local environment variables and use `docker-compose` or if you prefer a simpler workflow with Triton you can use [`triton-compose`](https://github.com/joyent/triton-docker-cli).


```sh
$ ./setup.sh
```

```sh
# docker-compose method
$ eval "$(triton env)"
$ docker-compose up -d
```

```sh
# triton-compose method
$ triton-compose up -d
```
