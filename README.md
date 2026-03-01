# Task Manager API

![Node.js](https://img.shields.io/badge/Node.js-16.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14.x-blueviolet)

## Description
Task Manager API is a robust, RESTful backend service built with Node.js, Express, and PostgreSQL. It provides seamless CRUD operations for managing tasks, complete with comprehensive input validation and error handling to ensure data integrity.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Full CRUD Capabilities:** Create, read, update, and delete tasks efficiently.
- **Robust Validation:** Strict input validation and standardized error handling.
- **Relational Database:** Integrated with PostgreSQL for reliable data storage.
- **Test-Ready:** Fully tested endpoints ready for Postman or Thunder Client.

---

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Configuration:** dotenv (for environment variable management)

---

## Project Structure

```text
TaskManagerAPI/
├── src/
│   ├── controllers/
│   ├── service/
│   ├── model/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .env.example              # Example of required environment variables
├── package.json
├── package-lock.json
├── README.md
├── .gitignore                # Excludes .env, node_modules/, etc.
```
## installation
```
1. git clone [https://github.com/yourusername/TaskManagerAPI.git](https://github.com/yourusername/TaskManagerAPI.git)
cd TaskManagerAPI

2. Install dependencies:
npm install

3. Configure environment variables:
Create a .env file in the root directory. You can use .env.example as a reference template for the required database credentials and server ports.

⚠️ Important: Make sure your .env file is created and properly configured before starting the server.

4. Start the server:

# For development with auto-reload (requires nodemon)
npm run dev   

# For production
npm start

```
## api-reference
```
Endpoints

| HTTP Method | Endpoint | Action | Status |
| :--- | :---: | :---: | ---: |
| GET | `/api/tasks` | Retrieve all tasks | Active |
| GET | `/api/tasks/:id` | Retrieve specific tasks | Active |
| POST | `/api/tasks` | Create a new task | Active |
| PUT | `/api/tasks/:id` | Update a task | Testing |
| DELETE | `/api/tasks/:id` | Delete a task | Planned |


Example Request Body (POST / PUT / PATCH)
When creating or updating a task, send a JSON payload in the request body:

JSON
{
  "title": "Finish Project",
  "description": "Complete backend API",
  "status": "pending"
}

```

## testing
```
Testing
Use Postman or Thunder Client (VS Code Extension) to test all endpoints.

```

## contributing
```
Contributing
Contributions are always welcome! Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
```

## license
```
license
This project is licensed under the MIT License.
```
