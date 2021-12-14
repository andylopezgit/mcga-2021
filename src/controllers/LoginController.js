import { json } from "body-parser";
import Jwt from "jsonwebtoken";
import Usuario from '../models/usuario.model'
import key from '../config/config.js'


let LoginController = {
    getToken: async (req, res) => {
        const user = {}
        user.nombre = req.body.nombre
        user.pass = req.body.pass

        try {
            const userDb = await Usuario.findOne({ nombre: user.nombre })
            const userNombre = userDb.nombre
            const userPass = userDb.pass
            if (user.nombre === userNombre && user.pass === userPass) {
                Jwt.sign({ user: user }, key, (err, token) => {
                    res.json({ token: token })
                })
            } else {
                res.json('Datos incorrectos ')
            }

        } catch (err) {
            json('Usuario o contraseña incorrectos')
        }
        /* const user = {
            nombre: "andy",
            pass: "1234"
        } */

        /* Jwt.sign({user: user}, 'secretKey', (err, token) => {
            res.json({token: token})
        } ) */
    }


}


export default LoginController