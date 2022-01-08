import express from "express";
import config from "./config";
import router from './router'
import "./database"
import Jwt  from "jsonwebtoken";
const app = express();

// Config
config(app);

// Router
router(app);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000

app.listen(port, host, () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT}`)
);