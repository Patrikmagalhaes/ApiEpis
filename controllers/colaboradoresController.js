
const database = require('../database')

exports.cadastrarColaborador = (req, res) => {
    const { nome, cargo } = req.body;
    const query = 'INSERT INTO Funcionarios (nome, cargo) VALUES ($1, $2)'
    database.query(query, [nome, cargo])
        .then(() => {
            res.status(201).send({ status: 'Colaborador cadastrado com sucesso!' })
        })
        .catch(error => {
            console.error('Erro ao cadastrar colaborador:', error)
            res.status(500).send({ status: 'Erro ao cadastrar colaborador' })
        });
};

exports.cadastrarEmprestimo = (req, res) => {
    const { id_funcionario, id_epi } = req.body;
    const query = 'INSERT INTO Funcionario_Epi (id_funcionario, id_epi) VALUES ($1, $2)'
    database.query(query, [id_funcionario, id_epi])
        .then(() => {
            res.status(201).send({ status: 'Emprestimo cadastrado com sucesso!' })
        })
        .catch(error => {
            console.error('Erro ao cadastrar colaborador:', error)
            res.status(500).send({ status: 'Erro ao cadastrar colaborador' })
        });
};

exports.listarColaboradores = (req, res) => {
    const query = 'SELECT * FROM Funcionarios'
    database.query(query)
        .then(resultado => {
            res.status(200).send({ colaboradores: resultado.rows })
        })
        .catch(error => {
            console.error('Erro ao listar colaboradores:', error);
            res.status(500).send({ status: 'Erro ao listar colaboradores' })
        });
};