const express = require('express')
const app = express()
const router = require('./routes/index')
const ScriptBancoInsert = require('../backend/config/scriptdatabase')
const port = 3000




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function iniciarCriacaoTabela() {
  
    try {
       await  ScriptBancoInsert();
        console.log('Tabelas criadas com sucesso!');
        
        // Inicia o seu aplicativo aqui
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
        
    }
}

iniciarCriacaoTabela();


app.use(router)


app.listen(port, () => {

    console.log(`Servidor On porta: ${port}`)
})
