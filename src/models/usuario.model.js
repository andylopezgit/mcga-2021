import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    nombre: {
        type: String,
        required: true
    },

    pass: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)