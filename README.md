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

# install prisma
$ npm i -g prisma@3.14

# install PM2
$ npm i -g pm2@latest

# Clone Code Repository
$ git clone https://github.com/h918m/aloompa-coding-challenge.git
$ cd aloompa-coding-challenge
$ npm install

# Start Prisma Migration
$ prisma migrate dev --name init

# Build Project
$ npm run build

# Run Project
$ pm2 start dist/main.js
```

## Queries and Mutations

```bash
# Query to list all of the elements(apps, stages, events)
query {
  apps {
    id
    name
  }
  stages {
    id
    name
  }
  events {
    id
    name
    image
    ...
  }
}

# Query to get an element(app, stage, event) with an example
query {
  app(id: "b810bf6d-d81d-4104-bc1a-3b21d5154076") {
    id
    name
  }
  stage(id: "a4087686-ee6c-49d8-a4f0-d67f5931df3a") {
    id
    name
  }
  event(id: "b4781407-da92-475e-8d87-596aee0d7f2d") {
    id
    name
    image
    ...
  }
}

# Query to search elements by name(stages, events) with an example
query {
  searchStage(name: "Rizzle Stage") {
    id
    name
  }
  searchEvent(name: "Kanye West") {
    id
    name
    image
    ...
  }
}

# Query to search the events that occur between two dates with an example
query {
  searchEventBetween(dates: {from: 1577910000, to: 1577920000}) {
    id
    name
    image
    ...
  }
}

# Query to list all of the events in an app with an example
query {
  searchEventByAppId(appId: "b810bf6d-d81d-4104-bc1a-3b21d5154076") {
    id
    name
    image
    ...
  }
}

# Query to list all the stages in an app with an example
query {
  searchStageByAppId(appId: "b810bf6d-d81d-4104-bc1a-3b21d5154076") {
    id
    name
  }
}

# Query to get the stage in an event with an example
query {
  searchStageByEventId(eventId: "0161c438-21ca-4112-a166-91cff2a3e1b3") {
    id
    name
  }
}

# Query to list the events at a stage with an example
query {
  searchEventByStageId(stageId: "a4087686-ee6c-49d8-a4f0-d67f5931df3a") {
    id
    name
    image
    ...
  }
}

# Query to add an element(app, stage, event) with an example
mutation {
  createApp(input:{id:"app-1", name: "app1"}) {
    id
    name
  }
  createStage(input:{id:"stage-1", name: "stage1"}) {
    id
    name
  }
  createEvent(
    input:
    	{
        id: "event-1",
        appId: "app-1",
        stageId: "stage-1"
        name: "event1"
        ...
      }
  )
  {
    id
    appId
    stageId
    name
    ...
  }
}

# Query to remove an element(app, stage, event) with an example
mutation {
  deleteApp(id:"app-1") {
    id
    name
  }
  deleteStage(id:"stage-1") {
    id
    name
  }
  deleteEvent(id:"event-1") {
    id
    name
    ...
  }
}

# Query to update an element(app, stage, event) with an example
mutation {
  updateApp(input: {id:"app-1", name: "updated app"}) {
    id
    name
  }
  updateApp(input: {id:"stage-1", name: "updated stage"}) {
    id
    name
  }
  updateApp(input: {id:"event-1", name: "updated event", ...}) {
    id
    name
    ...
  }
}

