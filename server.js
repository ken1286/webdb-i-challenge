const express = require('express');
const db = require('./data/accounts-model.js');
const server = express();

server.use(express.json());

server.get('/accounts', (req, res) => {

  db
    .find()
    .then( accounts => {
      res.status(200).json({ accounts });
    })
    .catch( err => {
      console.log(err);
    })
});

server.get('/accounts/:id', (req, res) => {

  db
    .findById(req.params.id)
    .then( account => {
      res.status(200).json({ account })
    })
    .catch( err => {
      console.log(err);
    })
})

server.post('/accounts', (req, res) => {
  console.log(req.body);

  db
    .add(req.body)
    .then(account => {
      res.status(200).json({ account });
    })
    .catch( err => {
      console.log(err);
    })
});

server.put('/accounts/:id', (req, res) => {
  updatedAccount = req.body;
  console.log(req.params.id);

  db
    .update(req.params.id, updatedAccount)
    .then( account => {
      res.status(200).json({ account });
    })
    .catch( err => {
      console.log(err);
    })
})

server.delete('/accounts/:id', (req, res) => {


  db
    .remove(req.params.id)
    .then( account => {
      res.status(200).json({ account });
    })
    .catch( err => {
      console.log(err);
    })
})

// your code here

module.exports = server;