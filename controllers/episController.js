
const database = require('../database');

exports.cadastrarEPI = (req, res) => {
    const { nome, descricao, quantidade_em_estoque } = req.body;
    const query = 'INSERT INTO epis (nome, descricao, quantidade_em_estoque) VALUES ($1, $2, $3)';
    
    database.query(query, [nome, descricao, quantidade_em_estoque])
        .then(() => {
            res.status(201).send({ status: 'Colaborador cadastrado com sucesso!' });
        })
        .catch(error => {
            console.error('Erro ao cadastrar colaborador:', error);
            res.status(500).send({ status: 'Erro ao cadastrar colaborador' });
        });
};

exports.listarEPIs = async (req, res) => {
    try {
        const result = await database.query('SELECT * FROM epis');
        res.status(200).json({ epis: result.rows });
    } catch (error) {
        console.error('Erro ao listar EPIs:', error);
        res.status(500).json({ status: 'Erro ao listar EPIs. Por favor, tente novamente mais tarde.' });
    }
};