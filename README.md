### Implementing a GraphQL API using Prisma, NestJS, and Sqlite.

This project is for the Aloompa Coding challenge.

#### Step by step guide
- Node.js installed.
- Then run `npm install -g typescript` to install typescript.

- Install the necessary dependencies:

  ```bash
  cd aloompa-coding-challenge
  ```

  ```bash
  npm install
  ```

- Start the project:

  ```bash
  npm run start:dev
  ```

- Explore the API using GraphQL playground from [here](http://localhost:3000/graphql)


## Description

[Aloompa](https://aloompa.com/) Full Stack Javascript developer coding challenge.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy the app

```bash
# Install Nest JS CLI
$ npm i -g @nestjs/cli

# install PM2
$ npm install pm2@latest -g

# Clone Code Repository
$ git clone https://github.com/h918m/aloompa-coding-challenge.git
$ cd aloompa-coding-challenge
$ npm install

# Build Project
$ npm run build

# Run Project
$ pm2 start dist/main.js
```
