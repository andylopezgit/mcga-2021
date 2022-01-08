import express from "express";
import config from "./config";
import router from './router'
import "./database"
import Jwt  from "jsonwebtoken";
import cors from 'cors'
const app = express();


// Config
config(app);
// app.use(cors())
//app.use(() => {
  //console.log('abajo de cors')
//})


// Router
router(app);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000

app.listen(port, host, () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT}`)
);