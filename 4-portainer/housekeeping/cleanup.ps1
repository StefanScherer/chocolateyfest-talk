docker kill $(docker ps -q)
docker rm $(docker ps -qa)
docker rmi chocolateyfest/appetizer:1.0.0
docker rmi chocolateyfest/appetizer:1.1.0
docker rmi chocolateyfest/chocolatey:latest
docker rmi chocolateyfest/node:latest
docker rmi chocolateyfest/node:pure
docker rmi chocolateyfest/node:runtime
docker rmi chocolateyfest/portainer:latest
docker system prune -f
