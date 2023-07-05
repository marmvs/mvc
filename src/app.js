import express from 'express';
import index from './routes/index.js';
import db from  './config/dbConnect.js';
import apis from './routes/api.js';

const app = express();  //esta variável recebe express e sera utilizada em outros arquivos

app.use(express.json());
app.use("/", index);
app.use("/apis, apis");

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

export default app;


