const cors = require('cors');
const express = require("express")

export default (app) => {
  app.use(cors())
  app.use(express.json())

}