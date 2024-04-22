import express from "express"
const router = express.Router()
import ProdutoService from "../services/ProdutoService.js"

// ROTA PRODUTOS (VIEW)
router.get("/produtos", function(req, res){
    /* Essa rota serve pra carregar o HTML contendo os produtos e para tal deve chamar a classe ProdutoService, 
    mais especificamente seu método SelectAll, para popular a página HTML */
    ProdutoService.SelectAll().then((produtos) => {
        res.render("produtos", {
            inventario: produtos
        })
    })
})

export default router