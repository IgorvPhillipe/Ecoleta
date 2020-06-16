///Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*//Utilizar o objeto de banco de dados
db.serialize(() => {
    //Com comandos sql

    //1.Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2.Inserir dados
    const querry = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ? ,? ,?, ?);
    `
    const values = [
        "https://https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilherme Gerballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(querry, values, afterInsertData)

    //3.Consultar dados
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })

    //4.Deletar dados
    db.run(`DELETE FROM places WHERE id=?`, [1], function(err){
        if(err){
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    })
})*/