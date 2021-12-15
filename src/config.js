const cors = require('cors');
import bodyParser from 'body-parser';
import morgan from 'morgan';
const express = require("express")

export default (app) => {
  app.use(cors())
  app.disable('x-powered-by');  
  app.use(express.json())
  app.use(morgan("dev"));

}