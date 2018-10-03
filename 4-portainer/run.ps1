Write-Output "Running Portainer container"

docker run `
  -d `
  -p 9000:9000 `
  -v //./pipe/docker_engine://./pipe/docker_engine `
  chocolateyfest/portainer

Write-Output "Opening a browser with Portainer UI"
start http://localhost:9000
