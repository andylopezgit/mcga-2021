import express from 'express';
const router = express.Router();
import RetiroController from '../controllers/retiro.controller';
import ClienteController from '../controllers/Cliente.controller';
import MensajeController from '../controllers/MensajeController'
import LoginController from "../controllers/LoginController"
import RegistroController from '../controllers/Registro.controller'

router.get('/', MensajeController.getMensaje)
router.post('/save-retiro', RetiroController.saveRetiro);
router.get('/retiro/:id', RetiroController.getRetiro);
router.get('/retiros', RetiroController.getRetiros);
router.put('/update-retiro/:id', RetiroController.updatedRetiro);
router.delete('/delete-retiro/:id', RetiroController.deleteRetiro);

router.get('/clientes', ClienteController.getClientes);
router.get('/cliente/:id', ClienteController.getCliente);
router.post('/save-cliente', ClienteController.saveCliente);
router.put('/update-cliente/:id', ClienteController.updatedCliente)
router.delete('/delete-cliente/:id', ClienteController.deleteCliente)

router.post('/login', LoginController.getToken)

router.post('/registro', RegistroController.saveUsuario)
router.get('/usuarios', RegistroController.getUsuarios)

export default router;