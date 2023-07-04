import mongoose from "mongoose";

mongoose.connect();

let db = mongoose.connection;
// Função connect guarda a string de conexão desntro dos parênteses.

module.exports = db;
// Agora criamos uma variavel que que guarda a ação de conectar nosso usuário com o mongoDB.
