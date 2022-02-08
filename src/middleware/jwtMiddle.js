import Jwt from "jsonwebtoken"
import key from '../config/config.js'
const clave = 'secretKey1'

function validate(req, res, next) {
    const accessToken = req.headers['auth']
    if (!accessToken) {
        res.json('Acceso no Autorizado', 'me llego: ', accessToken)
    } else {
        Jwt.verify(accessToken, key, (err, user) => {
            if (err) {
                res.send('Acceso denegado')
            } else {
                next()
            }
        })
    }
}

export default validate