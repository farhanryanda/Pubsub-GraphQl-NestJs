
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

## GraphQL Documentation

- endpoint : http://localhost:3000/graphql-api

## 1. Query to Get All Messages


To retrieve a list of all messages, you can use the following query:

```graphql
query {
  getMessages {
    id
    message
  }
}
```

Explanation:

- getMessages: Returns a list of all messages.
- id: The ID of the message.
- message: The content of the message.

#### Example Response:


```
{
  "data": {
    "getMessages": [
      {
        "id": 1,
        "message": "Hello World!"
      },
      {
        "id": 2,
        "message": "Farhan"
      }
    ]
  }
}
```

## 2. Mutation to Add a New Message

To add a new message, use the following mutation:

```graphql
mutation {
  addMessage(message: "This is a new message") {
    id
    message
  }
}
```

Explanation:

- addMessage: Adds a new message with the provided content.
- message: The content of the message to be added.
- id: The ID of the newly added message.
- message: The content of the newly added message.

#### Example Response:


```
{
  "data": {
    "addMessage": {
      "id": 3,
      "message": "This is a new message"
    }
  }
}

```

## 3. Subscription to Receive New Messages in Real-Time

To receive notifications about new messages in real-time, use the following subscription:

```graphql
subscription {
  messageAdded {
    id
    message
  }
}
```

Explanation:

- messageAdded: Notification received when a new message is added.
- id: The ID of the newly added message.
- message: The content of the newly added message.


#### Example Response:


```
{
  "data": {
    "messageAdded": {
      "id": 3,
      "message": "This is a new message"
    }
  }
}
```