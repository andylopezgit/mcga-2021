import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RetiroSchema = new Schema({
  cliente: {
    type: String,
    requiered: true
  },
  descripcion: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Retiro", RetiroSchema);
