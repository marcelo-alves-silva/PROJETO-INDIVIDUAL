var database = require("../database/config");

function cadastrarPontuacao(idUsuario, qtdacertos) {
    var instrucaoSql = `
        INSERT INTO Pontuacao (fkUsuario, fkQuiz, qtdacertos, dataHora) VALUES (${idUsuario}, 1, ${qtdacertos}, NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPontuacao
};
