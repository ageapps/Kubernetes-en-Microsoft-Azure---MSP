# DEMO 1

## Instalar todos los paquetes necesarios de la aplicacion en /app
$ npm install
## Para arrancar la aplicación
$ npm start
## Construir la imagen con la aplicación
$ docker build -t demo-1 .
## Crear el contenedor y lanzarlo para que empieze el servidor
$ docker run -p 8080:3000 demo-1 npm start

# DEMO 2

## Instalar todos los paquetes necesarios de la aplicacion en /app
$ npm install
## Para arrancar los contenedores
$ docker-compose up