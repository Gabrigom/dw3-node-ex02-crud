import express from "express"
const router = express.Router()
import ClienteService from "../services/ClienteService.js"

/* 
Express cria as rotas e atribui funcionalidades pra elas
req: requisicao, res: resposta 
get: método GET, pega dados pela barra do navegador, processa e por vezes renderiza (no caso da view)
post: metodo POST, pega dados enviados por formulários, processa e redireciona
*/

// -> clientesList.ejs
router.get("/clientesView", function(req, res) {
    ClienteService.SelectAll().then((clientes) => {
        res.render("clienteList", {
            clientela: clientes
        })
    })
})

// -> clientes.ejs
router.get("/clientes", function(req, res) {
    res.render("clientes")
})

// ROTA CADASTRO DE CLIENTES
router.post("/clientes/new", function(req, res) {
    ClienteService.Create(req.body.nome, req.body.cpf, req.body.endereco)
    res.redirect("/clientesView")
})

// ROTA EXCLUSÃO DE CLIENTE
router.get("/clientes/delete/:id", function(req, res) {
    const id = req.params.id // Tira o parâmetro id da URL, id q vem do forEach da view
    ClienteService.Delete(id)
    res.redirect("/clientesView")
})

// -> clienteEdit.ejs
router.get("/clientes/edit/:id", function(req, res) {
    const id = req.params.id
    ClienteService.SelectOne(id).then((cliente) => {
        res.render("clienteEdit", {
            cliente: cliente
        })
    })
})

// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/clientes/update/:id", function(req, res){
    // Cria input hidden para segurar o valor de id e usar no post
    ClienteService.Update(req.body.id, req.body.nome, req.body.cpf, req.body.endereco)
    res.redirect("/clientesView")
})

export default router