const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        return res.status(404).send("Please provide a valid username or password");
    }
    if (isValid(username)) {
        const new_user = {
            "username": username,
            "password": password
        };
        users.push(new_user);
        return res.status(200).send("User Registered");
    } else {
        return res.status(404).send("User already exists");
    }
});

public_users.get('/',function (req, res) {
  return res.status(200).send(JSON.stringify(books, null, 4));
});

public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).send(JSON.stringify(books[isbn], null, 4));
 });
  
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  let return_books = []
  for (let [num, book] of Object.entries(books)) {
    if (book['author'] === author) {
        return_books.push(book);
    }
  }
  return res.status(200).send(JSON.stringify(return_books, null, 4));
});

public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = req.params.title;
  for (let [num, book] of Object.entries(books)) {
    if (book["title"] === title) {
        return res.status(200).send(JSON.stringify(book, null, 4));
    }
  }
  return res.status(404).json({message: "Not found"});
});

public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    for (let [num, book] of Object.entries(books)) {
        if (num === isbn) {
            return res.status(200).send(JSON.stringify(book["reviews"], null, 4));
        }
    }
  return res.status(404).json({message: "Not found"});
});

module.exports.general = public_users;
