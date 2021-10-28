import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const RetiroSchema = new Schema({
  descripcion: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  }
});




module.exports = mongoose.model('Retiro', RetiroSchema);