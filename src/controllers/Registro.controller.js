import { json } from 'body-parser'
import Usuario from '../models/usuario.model'


let RegistroController = {
    getUsuarios: async (req, res) => {
        try {
            const usuarios = await Usuario.find();
            res
                .status(200)
                .json(usuarios);
        } catch (error) {
            res
            console.log(error)

        }
    },



    saveUsuario: async (req, res) => {
        const body = req.body
        console.log(body)
        try {
            const savedUsuario = await Usuario.create(body);
            res
                .status(201)
                .json(savedUsuario);
        } catch (error) {
            res
                .status(500)
                .json({
                    mensage: error
                })

        }
    }
}


export default RegistroController;