import express from 'express';
const router = express.Router();

import jwtMiddle from '../middleware/jwtMiddle';
import RetiroController from '../controllers/retiro.controller';
import ClienteController from '../controllers/cliente.controller';
import MensajeController from '../controllers/MensajeController'
import LoginController from "../controllers/LoginController"
import RegistroController from '../controllers/Registro.controller'



router.get('/', jwtMiddle, MensajeController.getMensaje)
router.post('/save-retiro', jwtMiddle, RetiroController.saveRetiro);
router.get('/retiro/:id', RetiroController.getRetiro);
router.get('/retiros', jwtMiddle, RetiroController.getRetiros);
router.put('/update-retiro/:id', jwtMiddle, RetiroController.updatedRetiro);
router.delete('/delete-retiro/:id', RetiroController.deleteRetiro);

router.get('/clientes', jwtMiddle, ClienteController.getClientes);
router.get('/cliente/:id', jwtMiddle, ClienteController.getCliente);
router.post('/save-cliente', jwtMiddle, ClienteController.saveCliente);
router.put('/update-cliente/:id', jwtMiddle, ClienteController.updatedCliente)
router.delete('/delete-cliente/:id', jwtMiddle, ClienteController.deleteCliente)

router.post('/login', LoginController.getToken)

router.post('/registro', RegistroController.saveUsuario)
router.get('/usuarios', jwtMiddle, RegistroController.getUsuarios)

export default router;