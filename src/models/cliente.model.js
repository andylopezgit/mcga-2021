import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const ClienteSchema = new Schema({
  descripcion: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Cliente', ClienteSchema);