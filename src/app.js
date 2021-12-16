import express from "express";
import config from "./config";
import router from './router'
import "./database"
import Jwt  from "jsonwebtoken";
const app = express();
const cors = require('cors');


// Config
config(app);
app.use(cors())
app.use((req, res, next) => {
  console.log('desde middleware')
  res.header('Access-Control-Allow-Origin','http://localhost:8080', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  console.log('estoy desde los headers')
  next();
})
app.use((req, res, next) => {
  console.log('estoy desde los headers')
  res.header('Access-Control-Allow-Origin','http://localhost:8080', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  console.log('estoy desde los headers')
  next();
});


// Router
router(app);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000

app.listen(port, host, () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT}`)
);