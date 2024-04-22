import express from "express"
const router = express.Router()
import PedidoService from "../services/PedidoService.js"


// -> pedidoList.ejs
router.get("/pedidosView", function(req, res) {
    PedidoService.SelectAll().then((pedidos) => {
        res.render("pedidoList", {
            pedidos: pedidos
        })
    })
})

// -> pedidos.ejs
router.get("/pedidos", function(req, res) {
    res.render("pedidos")
})

// ROTA CADASTRO DE PEDIDOS
router.post("/pedidos/new", function(req, res) {
    PedidoService.Create(req.body.numPed, req.body.valor)
    res.redirect("/pedidosView")
})

// ROTA EXCLUSÃO DE PEDIDOS
router.get("/pedidos/delete/:id", function(req, res) {
    const id = req.params.id // Tira o parâmetro id da URL, id q vem do forEach da view
    PedidoService.Delete(id)
    res.redirect("/pedidosView")
})

// -> pedidoEdit.ejs
router.get("/pedidos/edit/:id", function(req, res) {
    const id = req.params.id
    PedidoService.SelectOne(id).then((pedido) => {
        res.render("pedidoEdit", {
            pedido: pedido
        })
    })
})

// ROTA DE ALTERAÇÃO DE PEDIDO
router.post("/pedidos/update/:id", function(req, res){
    // Cria input hidden para segurar o valor de id e usar no post
    PedidoService.Update(req.body.id, req.body.numPed, req.body.valor)
    res.redirect("/pedidosView")
})

export default router