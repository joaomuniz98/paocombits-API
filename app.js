const express = require('express')
const app = express()
const router = require('./routes/index')
const cors = require('cors')
const ScriptBancoInsert = require('./config/scriptdatabase')
const port = 3000



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function iniciarCriacaoTabela() {
  
    try {
        await  ScriptBancoInsert();
        console.log('Tabelas criadas com sucesso!');
        
   
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
        
    }
}

iniciarCriacaoTabela();


app.use(router)


app.listen(port, () => {

    console.log(`Servidor On porta: ${port}`)
})
