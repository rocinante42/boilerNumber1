// server.js
const jsonServer = require('json-server');
const passport  = require('passport');
const LocalS = require('passport-local').Strategy;
const auth = require('./Routes/auth');
const routes = require('./routes.json');

const server = jsonServer.create(routes);
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/echo', (req, res) => {
  res.send('Estoy dentro de la api :)');
});


server.use('/auth', router);
server.use('/api', router);
server.listen(3001, () => {
  console.log('JSON server is running');
});

