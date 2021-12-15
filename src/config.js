const cors = require('cors');
import bodyParser from 'body-parser';
import morgan from 'morgan';
const express = require("express")

export default (app) => {
  app.use(cors())
  app.disable('x-powered-by');  
  app.use(express.json())
  app.use(morgan("dev"));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


}