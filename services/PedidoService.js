import mongoose from "mongoose"
import pedido from "../models/Pedido.js"

const Pedido = mongoose.model("Pedido", pedido)

// Transferir nomes de classe e método para camelCase

class PedidoService{
    SelectAll(){
        const pedidos = Pedido.find() // Find é a função do mongoose que seleciona
        return pedidos
    }

    // Método para CADASTRAR um pedido
    Create(codigoPed, valor){
        const novoPedido = new Pedido({
            numPedido: codigoPed,
            value: valor,
        })
        novoPedido.save() // Comando do mongoose q pega os pares chave-valor e insere no banco
    }

    // Método para EXCLUIR cliente
    Delete(id){
        // then (sucesso) e catch (erro) são usados na para definir o resultado com base na promise
        Pedido.findByIdAndDelete(id).then(() => {
            console.log(`Pedido com a id ${id} foi deletado com sucesso!`)
        }).catch(err => {
            console.log(err)
        })
    }

    // Método para SELECIONAR somente um cliente (visando a exclusão ou alteração)
    SelectOne(id){
        // Análogo ao SelectAll, mas usamos id no findOne como parâmetro para restringir a busca
        const pedidoUnico = Pedido.findOne({_id: id})
        return pedidoUnico
    }

    // Método para ALTERAR o cliente
    Update(idPed, codigoPed, valor) {
        Pedido.findByIdAndUpdate(idPed, {
            numPedido: codigoPed,
            value: valor
        }).then(() => {
            console.log(`Dados do pedido com id: ${id} alterados com sucesso!`)
        }).catch(err => {
            console.log(`Teu erro: ${err}`)
        })
    }
}

export default new PedidoService()