const express = require('express');
const router = express.Router();
const empregadoController = require('../controllers/empregadoController');

router.get('/', empregadoController.getAllEmpregados);
router.get('/:id', empregadoController.getEmpregadoById);
router.post('/', empregadoController.createEmpregado);
router.put('/:id', empregadoController.updateEmpregado);
router.delete('/:id', empregadoController.deleteEmpregado);

module.exports = router;
