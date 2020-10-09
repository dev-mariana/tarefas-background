# Tarefas em Background - Background Tasks

Uma aplicação que executa tarefas em background com filas, usando o Node.js e o Redis.

An application that performs tasks in the background with queues, using Node.js and Redis.

## Instalação - Installation

1. Clone o repositório `git clone git@github.com:dev-mariana/projeto.git`.
2. Entre no diretório e instale as dependências `npm install`.
3. Instale o Express.js `npm install express`.
4. Instale o Nodemon `npm install nodemon`.
5. Instale o Bull `npm install bull`.
6. Instale o Dontenv `npm install dotenv`.
7. Instale o BullBoard `npm install bull-board`.
8. Instale o Nodemailer  `npm install nodemailer`.
9. Instale o Password-Gerenerator `npm install password-gerenerator -g`. 
10. Instale o Redis  `npm install redis`.
11. Instale o Docker para rodar o Redis, e depois execute o comando `$ docker run --name lab01redis -p 6379:6379 --detach redis`. 


1. Use git clone in the repository `git clone git@github.com:dev-mariana/projeto.git`.
2. Access the directory of project and install the dependencies `npm install`.
3. This project requires the installation of Express.js `npm install express`.
4. Install the Nodemon `npm install nodemon`.
5. Install the Bull `npm install bull`.
6. Install the Dontenv `npm install dotenv`.
7. Install the BullBoard `npm install bull-board`.
8. Install the Nodemailer  `npm install nodemailer`.
9. Install the Password-Gerenerator `npm install password-gerenerator -g`. 
10. Install the Redis  `npm install redis`.
11. Install Docker to run Redis, then run the command `$ docker run --name lab01redis -p 6379:6379 --detach redis`. 

## Ambiente Local - Development Server

Use `npm start` para rodar a aplicação no localhost: `http://localhost:8080/`. 

Run `npm start` for a development server, navigate to `http://localhost:8080/`. 

And run `npm run queue` to start the queue service in the background. 
