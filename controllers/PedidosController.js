import express from "express"
const router = express.Router()
import PedidoService from "../services/PedidoService.js"

// ROTA PEDIDOS (VIEW)
router.get("/pedidos", function(req, res) {
    PedidoService.SelectAll().then((pedidos) => {
        // render: renderiza a página
        res.render("pedidos", {
            pedidos: pedidos
        })
    })
})

export default router