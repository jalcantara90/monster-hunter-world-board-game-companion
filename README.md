# MhwboardCompanion

Monorepo where we will can manage all related with the Monster hunter world board game

## Prerequisites

1. Do you need to have installed [Docker](https://www.docker.com/)
2. Do you need to have installed [Nodejs](https://nodejs.org/en)

## Run MHW Companion API
We have several ways to run it locally, with docker, running manually and in debug mode
1. Running with docker
 - Build API image running the next command in the project root.
 ```bash
  docker build --tag mhw-api .
 ```
 - Running the whole application once the build finish
 ```bash
  docker compose up
 ```
> With this you should get a postgres db instance running on port: 5432, PGAdmin if you need to access o the database on port 8080 and the API in 3099
2. Running manually
note: the easy way is start comment in docker-compose.yml the block of mhw-api then start the database and PGAdmin running
```bash
  docker compose up
```
  - In project root run
  ```bash
    npm install
  ```
  or
  ```bash
    yarn
  ```
  - Then run
  ```bash
    npx nx serve mhw-board-companion-api
  ```
This should run your API in port 3099

3. Running in debug mode
note: the easy way is start comment in docker-compose.yml the block of mhw-api then start the database and PGAdmin running
```bash
  docker compose up
```
  - In project root run
  ```bash
    npm install
  ```
  or
  ```bash
    yarn
  ```
  - In your vscode you can go into debug section and click on play button or just press F5 to start the API in debug mode.

> We have documentation via swagger and we can access from http://localhost:3099/docs


## Running webapp
1. We must install the dependencies

  - In project root run
  ```bash
    npm install
  ```
  or
  ```bash
    yarn
  ```
2. Launch the webapp running:

```bash
  npx nx serve webapp
```
