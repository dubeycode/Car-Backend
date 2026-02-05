# Car API – Frontend & Backend (Learning Project)

This project is a Car API application built for learning and educational purposes only.
It demonstrates how a frontend and backend work together using PostgreSQL, an ORM, and Apache.

 This project is not intended for production use.
It exists purely to understand concepts, architecture, and data flow.

*  Purpose of the Project *

The main goal of this project is to learn and practice:

How a frontend communicates with a backend API

How to work with PostgreSQL as a relational database

How to use an ORM (Object-Relational Mapping) for database operations

How Apache can be used to serve and manage backend services

Basic CRUD operations (Create, Read, Update, Delete)

Project structure and API design fundamentals

* Project Structure *
Frontend

Consumes the Car API endpoints

Displays car-related data

Sends requests (GET, POST, PUT, DELETE) to the backend

Built only to understand API integration (not optimized for UI/UX)

Backend

Provides RESTful API endpoints

Handles business logic

Connects to PostgreSQL using an ORM

Processes and validates requests from the frontend

* Database *

PostgreSQL is used as the database

Stores car-related data such as:

Car name

Model

Brand

Year

Price (example fields)

Database interactions are handled through an ORM, reducing raw SQL usage

* Technologies Used *

Backend: (Express)

Frontend: (React)

Database: PostgreSQL

ORM: Used to map database tables to objects

Server: Apache

 Learning Outcomes

By working on this project, you will understand:

How APIs work internally

How PostgreSQL integrates with backend applications

How ORM simplifies database queries

How frontend and backend communicate

How Apache fits into the web application stack

 Disclaimer

This project is created only for learning and experimentation.
Security, performance, and scalability best practices are not fully implemented.