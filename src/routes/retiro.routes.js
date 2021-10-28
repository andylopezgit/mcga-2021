import express from 'express';
const router = express.Router();
import RetiroController from '../controllers/retiro.controller';

router.post('/save-retiro', RetiroController.saveRetiro);
router.get('/retiro/:id', RetiroController.getRetiro);
router.get('/retiros', RetiroController.getRetiros);
router.put('/update-retiro/:id', RetiroController.updatedRetiro);
router.delete('/delete-retiro/:id', RetiroController.deleteRetiro);

export default router;