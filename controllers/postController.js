const connection = require('../config/database');

async function createPost(req, res) {
    try {
        const { title, content, thumbnail, createdBy } = req.body;
    
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
    
        const query = await connection.query(
            'INSERT INTO posts (title, content, thumbnail, createdBy) VALUES (?, ?, ?, ?)',
            [title, content, thumbnail, createdBy]
        );
    
        console.log(query);
        res.status(201).send({retorno: 'Post created successfully', sucesso: 1});
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error server: ' + error.message);
    }

}

async function getAllPosts(req,res) {

    try {
            
        const query = await connection.query(
              'SELECT * FROM posts'
        );

        res.status(201).send(JSON.stringify(query[0]))

        
    } catch (error) {
        res.status(500).send('Error server:' , error.message)
    }
}

async function getPost(req,res) {

    try {
            
        const id = req.params.id;

        const query = await connection.query(
              'SELECT * FROM posts WHERE id = ?',
              [id]
        );

        res.status(201).send(JSON.stringify(query[0]))

        
    } catch (error) {
        res.status(500).send('Error server:' , error.message)
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPost
};
