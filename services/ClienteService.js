import mongoose from "mongoose"
import cliente from "../models/Cliente.js"

const Cliente = mongoose.model("Cliente", cliente)

// Em clientes temos os 4 métodos do CRUD (Cadatrar, ler, alterar e excluir)

class ClienteService{
    // Método para SELECIONAR todos os clientes do banco
    SelectAll(){
        const clientela = Cliente.find()
        return clientela
    }

    // Método para CADASTRAR um cliente
    Create(nomeC, cpfC, enderecoC){
        const novoCliente = new Cliente({
            /* Do por chave-valor do MongoDB temos: 
            Esquerda: chave do banco, criada na linha 4 com base no model
            Direita: parâmetros contendo o valor a serem add nas respect chaves
            */
            nome: nomeC,
            cpf: cpfC,
            endereco: enderecoC
        })
        novoCliente.save() // Comando do mongoose q pega os pares chave-valor e insere no banco
    }

    // Método para EXCLUIR cliente
    Delete(id){
        // then (sucesso) e catch (erro) são usados na para definir o resultado com base na promise
        Cliente.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id ${id} foi deletado com sucesso!`)
        }).catch(err => {
            console.log(err)
        })
    }

    // Método para SELECIONAR somente um cliente (visando a exclusão ou alteração)
    SelectOne(id){
        // Análogo ao SelectAll, mas usamos id no findOne como parâmetro para restringir a busca
        const clienteUnico = Cliente.findOne({_id: id})
        return clienteUnico
    }

    // Método para ALTERAR o cliente
    Update(id, nome, cpf, endereco) {
        Cliente.findByIdAndUpdate(id, {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        }).then(() => {
            console.log(`Dados do cliente com id: ${id} alterados com sucesso!`)
        }).catch(err => {
            console.log(`Teu erro: ${err}`)
        })
    }
}

export default new ClienteService()