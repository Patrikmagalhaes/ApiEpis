const express = require('express');
const router = express.Router();
const colaboradoresController = require('../controllers/colaboradoresController');

router.post('/cadastrar', colaboradoresController.cadastrarColaborador);
router.get('/listar', colaboradoresController.listarColaboradores);
router.post('/cadastrar/emprestimo', colaboradoresController.cadastrarEmprestimo);
module.exports = router;
