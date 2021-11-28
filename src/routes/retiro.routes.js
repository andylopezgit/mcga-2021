import express from 'express';
const router = express.Router();
import RetiroController from '../controllers/retiro.controller';
import ClienteController from '../controllers/cliente.controller';
import MensajeController from '../controllers/MensajeController'

router.get('/', MensajeController.getMensaje)
router.post('/save-retiro', RetiroController.saveRetiro);
router.get('/retiro/:id', RetiroController.getRetiro);
router.get('/retiros', RetiroController.getRetiros);
router.put('/update-retiro/:id', RetiroController.updatedRetiro);
router.delete('/delete-retiro/:id', RetiroController.deleteRetiro);

router.get('/clientes', ClienteController.getClientes);
router.get('/cliente/:id', ClienteController.getCliente);
router.post('/save-cliente', ClienteController.saveCliente);
router.put('/update-retiro/:id', ClienteController.updatedCliente)
router.delete('/delete-retiro/:id', ClienteController.deleteCliente)

export default router;