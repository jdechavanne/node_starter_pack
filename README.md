# node_starter_pack

Simple node folder with docker-compose file for mongodb

## How to use

### Prerequisite

In order to begin, you need some dependencies installed on your computer.
First, install docker and docker-compose:

- https://docs.docker.com/get-docker/
- https://docs.docker.com/compose/install/

Then you need to install npm (i prefer nvm in order to manage many versions of them.)

- https://www.npmjs.com/
- https://github.com/nvm-sh/nvm

## Install dependencies.

Simply run `npm install` in this directory

## Install mongodb and mongo-express

Always in this folder, run `docker-compose up -d` to install mongo and mongodb docker images and containers.
Go to `127.0.0.1:8081` to manage your databases !

You are now ready to code some NodeJS apps !
