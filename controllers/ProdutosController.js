import express from "express"
const router = express.Router()
import ProdutoService from "../services/ProdutoService.js"

// ->produtoList.ejs
router.get("/produtosView", function(req, res){
    /* Essa rota serve pra carregar o HTML contendo os produtos e para tal deve chamar a classe ProdutoService, 
    mais especificamente seu método SelectAll, para popular a página HTML */
    ProdutoService.SelectAll().then((produtos) => {
        res.render("produtoList", {
            inventario: produtos
        })
    })
})

// -> produtos.ejs
router.get("/produtos", function(req, res) {
    res.render("produtos")
})

// ROTA CADASTRO DE PRODUTOS
router.post("/produtos/new", function(req, res) {
    ProdutoService.Create(req.body.nomeProd, req.body.price, req.body.categ)
    res.redirect("/produtosView")
})

// ROTA EXCLUSÃO DE PRODUTOS
router.get("/produtos/delete/:id", function(req, res) {
    const id = req.params.id // Tira o parâmetro id da URL, id q vem do forEach da view
    ProdutoService.Delete(id)
    res.redirect("/produtosView")
})

// -> produtoEdit.ejs
router.get("/produtos/edit/:id", function(req, res) {
    const id = req.params.id
    ProdutoService.SelectOne(id).then((produto) => {
        res.render("produtoEdit", {
            produto: produto
        })
    })
})

// ROTA DE ALTERAÇÃO DE PRODUTO
router.post("/produtos/update/:id", function(req, res){
    // Cria input hidden para segurar o valor de id e usar no post
    ProdutoService.Update(req.body.id, req.body.nomeProd, req.body.price, req.body.categ)
    res.redirect("/produtosView")
})

export default router