# <h1 align="center">Tarefas em Background - Background Tasks</h1>

<p align="center">Uma aplicação que executa tarefas em background com filas, usando o Node.js e o Redis.</p>
<p align="center">An application that performs tasks in the background with queues, using Node.js and Redis.</p>

## Dependências - Dependencies

* Express.js
* Nodemon
* Bull
* BullBoard
* Nodemailer
* Password-Generator
* Redis
* Docker

## Instalação - Installation

1. Clone o repositório `git clone git@github.com:dev-mariana/projeto.git`.

   Use git clone in the repository `git clone git@github.com:dev-mariana/projeto.git`.
   
2. Entre no diretório e instale as dependências `npm install`.

   Access the directory of project and install the dependencies `npm install`.

3. Instale o [Docker](https://www.docker.com/get-started) para rodar o Redis, e depois execute o comando `$ docker run --name lab01redis -p 6379:6379 --detach redis`. 

   Install [Docker](https://www.docker.com/get-started) to run Redis, then run the command `$ docker run --name lab01redis -p 6379:6379 --detach redis`. 

## Ambiente Local - Development Server

- Use `npm start` para rodar a aplicação no localhost: `http://localhost:8080/`. 

  Run `npm start` for a development server, navigate to `http://localhost:8080/`. 

- E use `npm run queue` para iniciar o serviço de fila em background.

  And run `npm run queue` to start the queue service in the background. 
