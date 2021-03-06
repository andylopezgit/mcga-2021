import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const express = require("express")

export default (app) => {
  app.disable('x-powered-by');  

  app.use(express.json())
  app.use(cors());
  app.use(morgan("dev"));

}