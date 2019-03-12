# Traefik + Portainer in Swarm mode

You need Docker Engine EE 19.03 or the latest master build from
as this version supports the npipe volumes in stack yml files.

```
curl.exe -o docker.zip https://master.dockerproject.com/windows/x86_64/docker.zip
```

Stop Docker Engine and replace binaries. Do this in a demo VM.

Adjust the domain names in all yml files and your email address for the Let's Encrypt certificates.

## Create a single node swarm

This saves us from installing `docker-compose.exe`, I prefer the built-in features.

```
docker swarm init --advertise-addr=10.0.2.5
```

## Create Traefik service

```
docker stack deploy -c traefik.yml appetizer
```

## Create Portainer service

```
docker stack deploy -c portainer.yml appetizer
```

Now you can access https://portainer.yourdomain.com

Create the password for the admin user.

## Create other services

```
docker stack deploy -c appetizer.yml appetizer
```
