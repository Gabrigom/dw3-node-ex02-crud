import mongoose from "mongoose"

const cliente = new mongoose.Schema({
    nome: String,
    cpf: Number,
    endereco: String
})

export default cliente