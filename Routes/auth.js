const express = require('express');
const parser = require('body-parser');
const request = require('request');
const path = require('path');
const JsonDB = require('node-json-db');
const axios = require('axios');
var db = new JsonDB("database", true, false);
const db2 = require('./../db.json');

db.push('/users', db2.users);

const router = express.Router();

router.use(parser.json());

router.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const respuesta = db.getData('/users/' + username);
  respuesta ? res.status(200) : res.status(401).send();
});


module.exports = router;
