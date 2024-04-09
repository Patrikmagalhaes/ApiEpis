const pg = require('pg');

const database = new pg.Client('postgres://tjmdgoio:OSkVHDSDkIJmRmbwPnHgljXCHjR44Lfk@kesavan.db.elephantsql.com/tjmdgoio');

database.connect((erro) => {
    if (erro) return console.log('Erro na conexão com o DB', erro);
    return console.log('Conectado ao DB!');
});

module.exports = database;


/*

Essa tabela armazenará informações sobre os funcionários.

CREATE TABLE Funcionarios (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(100),
);

Tabela de EPIs

CREATE TABLE Epis (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    quantidade_em_estoque INT
);

Tabela de Histórico de Retiradas e Devoluções

CREATE TABLE Historico_Epis (
    id INT PRIMARY KEY,
    id_funcionario INT,
    id_epi INT,
    data_retirada DATE,
    data_devolucao DATE,
    FOREIGN KEY (id_funcionario) REFERENCES Funcionarios(id),
    FOREIGN KEY (id_epi) REFERENCES Epis(id)
);

Tabela de Relacionamento Funcionário-EPI

CREATE TABLE Funcionario_Epi (
    id_funcionario INT,
    id_epi INT,
    PRIMARY KEY (id_funcionario, id_epi),
    FOREIGN KEY (id_funcionario) REFERENCES Funcionarios(id),
    FOREIGN KEY (id_epi) REFERENCES Epis(id)
);


*/