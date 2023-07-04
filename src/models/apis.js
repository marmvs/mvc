import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        cerveja: { type: String, required: true },
        nomeDaFabrica: { type: String, required: true },
        teorAlcoólico: { type: Number, required: true }
    }
)


const apis = mongoose.model('apis', apiSchema);

module.exports = apis;