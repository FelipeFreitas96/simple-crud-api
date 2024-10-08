# Simple CRUD API

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/felipefreitas96/simple-crud-api/blob/master/README-EN.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/felipefreitas96/simple-crud-api/blob/master/README.md)

This project is a simple CRUD API, developed with the goal of assessing my technical skills. The entire process was documented, tested, and applied.

## Objective

The application aims to manage tasks, allowing the user to create, edit, mark as completed, and delete tasks from a list. The application is containerized to ensure portability, allowing it to run on any machine with Docker. The project also includes documentation using Swagger.

## Architecture

The project follows clean architecture principles, organized into layers, adhering to the model:

![alt text](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## Requirements

- Docker
- Docker Compose

## Installation

#### 1. Clone the repository:

```sh
git clone https://github.com/FelipeFreitas96/simple-crud-api.git
cd simple-crud-api
```

#### 2. Run the project by executing the following command:

```sh
docker-compose up -d
```

#### 3. After that, the project will be accessible at:

- Application: [http://localhost:3000](http://localhost:3000)

- Swagger: [http://localhost:3000/swagger](http://localhost:3000/swagger)

![alt text](https://i.imgur.com/MJwzKvl.png)

## Technologies Used

- MongoDB
- JavaScript
- Node@v20.14.0
- Nest@^10.0.0
- Docker

## MongoDB Schema

```js
{
  "_id": new ObjectId(),
  "title": "string",
  "description": "string"
}
```