docker stop hackyeah-ui
docker rm hackyeah-ui
docker rmi hackyeah-ui
docker build -t hackyeah-ui .
docker run -d -p 4200:80 --name hackyeah-ui hackyeah-ui