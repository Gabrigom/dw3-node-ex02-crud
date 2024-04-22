// Inicializando
import express from 'express'
const app = express()
import mongoose from "mongoose"

// Importando Controllers
import ProdutosController from "./controllers/ProdutosController.js"
import PedidosController from "./controllers/PedidosController.js"
import ClientesController from "./controllers/ClientesController.js"

// Configurações do express
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Usar controllers
app.use("/", ProdutosController)
app.use("/", PedidosController)
app.use("/", ClientesController)

// Conexão mongoDB
mongoose.connect("mongodb://localhost:27017/loja")

// -> Index.ejs
app.get("/", function(req, res){
    res.render("index")
})

// Inicia servidor (porta 8080)
app.listen(8080, erro =>{
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})