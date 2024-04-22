import mongoose from "mongoose"

const pedido = new mongoose.Schema({
    numPedido: Number,
    value: Number
})

export default pedido