const cors = require('cors');
import bodyParser from 'body-parser';
import morgan from 'morgan';
const express = require("express")

export default (app) => {
  app.use(cors())
  app.disable('x-powered-by');  
  app.use(express.json())
  app.use(morgan("dev"));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
  });

}