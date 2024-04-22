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

    // Método para CADASTRAR um pedido
    Create(nomeP, precoP, categP){
        const novoProduto = new Produto({
            nomeProd: nomeP,
            price: precoP,
            categ: categP
        })
        novoProduto.save() // Comando do mongoose q pega os pares chave-valor e insere no banco
    }

    // Método para EXCLUIR cliente
    Delete(id){
        // then (sucesso) e catch (erro) são usados na para definir o resultado com base na promise
        Produto.findByIdAndDelete(id).then(() => {
            console.log(`Produto com a id ${id} foi deletado com sucesso!`)
        }).catch(err => {
            console.log(err)
        })
    }

    // Método para SELECIONAR somente um cliente (visando a exclusão ou alteração)
    SelectOne(id){
        // Análogo ao SelectAll, mas usamos id no findOne como parâmetro para restringir a busca
        const produtoUnico = Produto.findOne({_id: id})
        return produtoUnico
    }

    // Método para ALTERAR o cliente
    Update(idP, nomeP, precoP, categP) {
        Produto.findByIdAndUpdate(idP, {
            nomeProd: nomeP,
            price: precoP,
            categ: categP
        }).then(() => {
            console.log(`Dados do produto com id: ${id} alterados com sucesso!`)
        }).catch(err => {
            console.log(`Teu erro: ${err}`)
        })
    }
}   

export default new ProdutoService()