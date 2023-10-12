# PracticaApiRestNodeDocker
Practica API REST desarrollada con NodeJS, MongoDB y desplegada en contenedor Docker Para la materia de Laboratorio de Despliegue de Aplicaciones Empresariales.

Mi nombre es Luis Eduardo Cervantes Jaramillo.

## Cómo ejecutar la API REST

## Clonar repositorio de Github en máquina local
Lo primero que se va a hacer es clonar lo que es el repositorio en nuestra máquina local con el comando:

```
git clone <url del repositorio>
```

## Instalar modulos necesarios para que se funcione la aplicación
Necesitamos instalar los paquetes que utilizamos si queremos que nuestras imágenes y contenedor se creen con todo lo necesario para funcionar, con el siguiente comando:

```
npm install
```

## Ejecutamos los archivos de docker para poder generar las imagenes y el contenedor
Para poder crear lo que es el contenedor con sus imágenes primero construimos lo que es el Dockerfile con el siguiente comando:

```
docker build -t <Nombre de la imagen>
```

## Construimos lo que es el contenedor con las dos imágenes que se utilizarán con la ayuda del docker-compose
Para construir el contenedor con ayuda del docker-compose se ejecutará el siguiente comando:

```
docker-compose build
```

Si no tienes la imagen de mongodb descargada la descargará automáticamente en el proceso de construcción.

## Ejecutamos lo que es nuestro contenedor una vez construido
Una vez que ya se haya terminado de construir lo que es nuestro contenedor ahora toca ejecutarlo para que la API funcione, esto lo hacemos con el siguiente comando:

```
docker-compose up
```
