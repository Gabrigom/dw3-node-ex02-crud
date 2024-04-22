import mongoose from "mongoose"
import pedido from "../models/Pedido.js"

const Pedido = mongoose.model("Pedido", pedido)

// Transferir nomes de classe e método para camelCase

class PedidoService{
    SelectAll(){
        const pedidos = Pedido.find() // Find é a função do mongoose que seleciona
        return pedidos
    }
}

export default new PedidoService()