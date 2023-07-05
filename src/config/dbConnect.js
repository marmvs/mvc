import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:160381@cluster0.jie2nbf.mongodb.net/senac2");

let db = mongoose.connection;
// Função connect guarda a string de conexão desntro dos parênteses.

export default db;
// Agora criamos uma variavel que que guarda a ação de conectar nosso usuário com o mongoDB.
