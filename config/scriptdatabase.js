const connection = require('./database');
const path = require('path');
const fs = require('fs');

async function ScriptBancoInsert() {
    const fileArchivePath = path.join(__dirname, 'Ajustes', 'Ajustes-01-2024.sql');
    const fileArchive = fs.readFileSync(fileArchivePath, 'utf8');

    // Divida o conteúdo do arquivo em instruções individuais
    const sqlStatements = fileArchive.split(';');

    // Execute cada instrução sequencialmente
    for (const sqlStatement of sqlStatements) {
        try {
            if (sqlStatement.trim() !== '') {
                await connection.query(sqlStatement);
                console.log('Instrução executada com sucesso:', sqlStatement);
            }
        } catch (error) {
            console.error('Erro durante a execução da consulta:', error);
        }
    }
}

module.exports = ScriptBancoInsert;
