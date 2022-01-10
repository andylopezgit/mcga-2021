import cors from 'cors';
import express from "express";
import config from "./config";
import router from './router'
import "./database"
import Jwt  from "jsonwebtoken";
import prueba from '../src/middleware/pruebaMiddleware.js'

const app = express();

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOptions))
app.use(prueba)

// Config
config(app);

// Router
router(app);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000

app.listen(port, host, () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT}`)
);