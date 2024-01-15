const connection = require('../config/database');

async function createPost(req, res) {
    try {
        const { title, content, thumbnail, createdBy, createdOn } = req.body;
    
        if (!title) {
            return res.status(405).send({retorno: "O título é obrigatório.",
            sucesso: 0
        });
        }
    
        if (!content) {
            return res.status(405).send({retorno: "O título é obrigatório.",
            sucesso: 0
        });
        }
    
        if (!thumbnail) {
            return res.status(405).send({retorno: "O título é obrigatório.",
            sucesso: 0
        });
        }
    
        if (!createdBy) {
            return res.status(405).send({retorno: "O título é obrigatório.",
            sucesso: 0
        });
        }
    
        if (!createdOn) {
            return res.status(405).send({retorno: "O título é obrigatório.",
            sucesso: 0
        });
        }
    
        const query = await connection.query(
            'INSERT INTO posts (title, content, thumbnail, createdBy, createdOn) VALUES (?, ?, ?, ?, ?)',
            [title, content, thumbnail, createdBy, createdOn]
        );
    
        console.log(query);
        res.status(201).send({retorno: 'Post created successfully', sucesso: 1});
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error server: ' + error.message);
    }

}

async function getPosts(req,res) {

    try {
            
        const query = await connection.query(
              'SELECT * FROM posts'
        );

        res.status(201).send(JSON.stringify(query[0]))

        
    } catch (error) {
        res.status(500).send('Error server:' , error.message)
    }
}

module.exports = {
    createPost,
    getPosts
};
