
const { response } = require('express');
const connection = require('../config/database');
const bcrypt = require('bcrypt');

async function loginUser(req, res) {
  try {
      const { email, password } = req.body;

      const query = await connection.query(
          'SELECT * FROM user WHERE email = (?)',
          [email]
      );

      const user = query[0];

      if (user.length > 0) {
          const passwordUser = user[0].senha_hash;
          bcrypt.compare(password, passwordUser, function(err, result) {
              if (err) {
                  return res.status(500).send({ success: false, message: 'Error comparing passwords' });
              }
              if (result) {
                  res.status(200).send({ success: true, message: 'Login success' });
              } else {
                  res.status(404).send({ success: false, message: 'Passwords do not match' });
              }
          });
      } else {
          res.status(404).send({ success: false, message: 'Email does not exist.' });
      }
  } catch (error) {
      res.status(500).send({ success: false, message: 'Internal server error.' });
  }
}


async function createUser(req,res){

try{

  let retorno = {
    Mensagem: '',
    Content: '',
    Sucesso: 0
  }

    const { nome, email , password  } = req.body;

   
    let verifyContent = await verifyCredentials(email,password)

    if(verifyContent.Sucesso == 1){

        try {
          const hashPassword = await gerarHashSenha(password);

          const query = await connection.query(
            'INSERT INTO user (nome, email, senha_hash) VALUES (?, ?, ?)',
            [nome, email, hashPassword]
        );
          retorno.Mensagem = "Cadastrado com Sucesso!"
          retorno.Sucesso = 1
          res.status(200).send(retorno)
        } catch (error) {
          retorno.Mensagem = error
          retorno.Sucesso = 1
          res.status(404).send(retorno.Mensagem)
        }
      }else{
        retorno.Mensagem = verifyContent.Mensagem
        retorno.Sucesso = 0
      }

} catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Error server: ' + error.message);
}

}


async function gerarHashSenha(password) {
  const saltRounds = 10;

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.error("Erro ao gerar o hash da senha:", error);
    throw error; 
  }
}

async function verifyCredentials(email,password){

  let retorno = {
    Mensagem: '',
    Sucesso: 0
  }


   if(!email){
     retorno.Mensagem = 'Obrigatório colocar seu email!'
     retorno.Sucesso = 0
   }else if(!password){
      retorno.Mensagem = 'Obrigatório colocar uma senha!'
      retorno.Sucesso = 0
    } else{

      retorno.Sucesso = 1
    }


    return retorno

}




module.exports = {
  createUser,
  loginUser
};
