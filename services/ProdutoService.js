import mongoose from "mongoose"
import produto from "../models/Produto.js"

// Cria a coleção no BD com base no model, nome = "Produto" => "Produtos"
const Produto = mongoose.model("Produto", produto)

// Dentro da classe _Service, são inseridas as operações CRUD que o mongoose faz no MongoDB
// A única funcionalidade do CRUD a ver com produto é o select 

class ProdutoService{
    SelectAll(){
        const inventario = Produto.find()
        return inventario
    }
}

export default new ProdutoService()