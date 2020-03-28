const express = require("express");
const cors = require("cors");

const routes = require('./routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
* Rota / Recurso 
*/

/**
    GET: Buscar uma informação no back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
 */

 /**
    Tipo de parêmetros

    Query Params: Parâmetros nomeados enviados na rota após "?" (Fitlros, paginação, etc ...)
    Route Params: Parâmetros utilizados para identificar recursos 
    Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

/**
    SQL: MySQL, SQLite, PostgreSQL, Oracle, MSSQL, DB2
    NoSQL: MongoDB, CouchDB etc ... 
*/

/**
    Driver: Usa sql syntax para pesquisar e fica amarrado ao bd
    Query Builder: Não fica amarrado ao bd 
    
*/



app.listen('3333');