const express = require('express');
const router = express.Router();
const episController = require('../controllers/episController');

router.post('/cadastrar', episController.cadastrarEPI);
router.get('/listar', episController.listarEPIs);

module.exports = router;