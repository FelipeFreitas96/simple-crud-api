# Simple CRUD API

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/felipefreitas96/simple-crud-api/blob/master/README-EN.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/felipefreitas96/simple-crud-api/blob/master/README.md)

Este projeto é uma API simples de CRUD, desenvolvida com o objetivo de avaliar minhas habilidades técnicas. Todo o processo foi documentado, testado e aplicado.

## Objetivo

A aplicação visa gerenciar tarefas, permitindo ao usuário criar, editar, marcar como concluída e excluir tarefas de uma lista. A aplicação está conteinerizada para garantir portabilidade, permitindo que seja executada em qualquer máquina com Docker. O projeto também conta com uma documentação utilizando o Swagger.

## Arquitetura

O projeto utiliza conceitos de arquitetura limpa dividido em camadas, seguindo o modelo:

![alt text](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## Requisitos

- Docker
- Docker Compose

## Instalação

#### 1. Clone o repositório:

```sh
git clone https://github.com/FelipeFreitas96/simple-crud-api.git
cd simple-crud-api
```

#### 2. Execute o projeto rodando o comando:
```sh
docker-compose up -d
```

#### 3. Após isso, o projeto estará acessível em:

- Aplicaçao: [http://localhost:3000](http://localhost:3000)

- Swagger: [http://localhost:3000/swagger](http://localhost:3000/swagger)

![alt text](https://i.imgur.com/MJwzKvl.png)

## Tecnologias Utilizadas

- MongoDB
- JavaScript
- Node@v20.14.0
- Nest@^10.0.0
- Docker

## Schema MongoDB

```js
{
  "_id": new ObjectId(),
  "title": "string",
  "description": "string"
}
```