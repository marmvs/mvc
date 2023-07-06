import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        cerveja: { type: String, required: true },
        nomeDaFabrica: { type: String, required: true },
        teorAlcoolico: { type: String, required: true }
    }
)


const apis = mongoose.model('apis', apiSchema);

export default apis;