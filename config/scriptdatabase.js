const connection = require('./database');
const path = require('path');
const fs = require('fs');

async function ScriptBancoInsert() {
    const fileArchivePath = path.join(__dirname, 'Ajustes', 'Ajustes-01-2024.sql');
    const fileArchive = fs.readFileSync(fileArchivePath, 'utf8');

    connection.getConnection()
    try {
        const result = await connection.query(fileArchive);
        console.log('Consulta executada com sucesso:', result);
    } catch (error) {
        console.error('Erro durante a execução da consulta:', error);
    }
}

module.exports = ScriptBancoInsert;
