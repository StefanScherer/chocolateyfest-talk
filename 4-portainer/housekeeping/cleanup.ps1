docker kill $(docker ps -q)
docker rm $(docker ps -qa)
docker rmi chocolateyfest/appetizer:1.0.0
docker rmi chocolateyfest/appetizer:1.1.0
docker rmi chocolateyfest/chocolatey:latest
docker rmi chocolateyfest/node:latest
docker rmi chocolateyfest/node:pure
docker rmi chocolateyfest/node:runtime
docker rmi chocolateyfest/portainer:latest
docker rmi chocolateyfest/portainer:1.19.2
docker rmi chocolateyfest/node:10.11.0-runtime
docker rmi chocolateyfest/node:10.11.0
docker rmi chocolateyfest/chocolatey:0.10.11
docker system prune -f
