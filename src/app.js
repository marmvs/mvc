import express from 'express';
import index from './routes/index.js'


const app = express();  //esta variável recebe express e sera utilizada em outros arquivos

app.use(express.json());
app.use("/", index);

export default app

//
