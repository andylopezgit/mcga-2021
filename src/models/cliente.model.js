import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const ClienteSchema = new Schema({
  descripcion: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('cliente', ClienteSchema);