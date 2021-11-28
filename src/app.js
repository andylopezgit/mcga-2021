import express from "express";
import config from "./config";
import router from './router'
import "./database"
const app = express();

// Config
config(app);

// Router
router(app);

app.listen(process.env.PORT || '0.0.0.0', () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT}`)
);