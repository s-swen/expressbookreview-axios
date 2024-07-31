# Express Book Review API

## Project Overview

This project is an **Express.js** based RESTful API for managing book reviews. It includes routes for user authentication, book data handling, and general purpose routes. The API also demonstrates the use of **Axios** for HTTP requests.

## Features

- **User Authentication**: Secure routes for login and signup.
- **Book Management**: Create, read, update, and delete book records.
- **Review System**: Users can submit and manage book reviews.
- **Axios Integration**: Demonstrates the use of Axios for HTTP requests.

## Project Structure
expressbookreview-axios-main/
│
├── final_project/
│ ├── index.js # Main entry point for the Express server
│ ├── package.json # Project dependencies and scripts
│ ├── package-lock.json # Lockfile for dependencies
│ ├── router/
│ │ ├── auth_users.js # Routes for user authentication
│ │ ├── booksdb.js # Routes for book-related operations
│ │ └── general.js # General routes and middlewares
│ └── README.md # Project-specific documentation
│
├── .gitignore # Files and directories to be ignored by git
├── LICENSE # Project license
└── README.md # Project overview and instructions (You are reading this)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/expressbookreview-axios.git
    cd expressbookreview-axios/final_project
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Usage

1. **Start the server**:
    ```bash
    npm start
    ```

2. **Access the API**:
   - By default, the API will be available at `http://localhost:3000/`.
   - Use a tool like **Postman** to interact with the API routes.

## API Endpoints

- **User Authentication**:
  - `POST /auth/register`: Register a new user
  - `POST /auth/login`: Login an existing user

- **Books**:
  - `GET /books`: Get a list of all books
  - `POST /books`: Add a new book
  - `PUT /books/:id`: Update a book
  - `DELETE /books/:id`: Delete a book

- **Reviews**:
  - `POST /books/:id/review`: Add a review to a book
  - `GET /books/:id/reviews`: Get all reviews for a book

## Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
