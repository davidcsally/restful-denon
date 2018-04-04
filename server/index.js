const express = require('express');
const Denon = require('./Denon');
const routes = require('./routes');


const app = express();
const port = process.env.PORT || 2222;

const denon = new Denon();
denon.connect();
if (process.env.NODE_ENV === 'DEBUG') denon.logData();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(
  '/',
  (req, res, next) => {
    res.locals.denon = denon;
    next();
  },
  routes,
);

app.listen(port, () => {
  console.log(`server listening @ ${port}`);
});
