// Inicializando
import express from 'express'
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


// -> Index.ejs
app.get("/", function(req, res){
    res.render("index")
})

// -> Clientes.ejs
app.get("/clientes", function(req, res){
    let clientela = [
        {nome: "Vinicius", cpf: 12345678910, endereco: "Caicara 1"},
        {nome: "Tav", cpf: 10987654321, endereco: "Magadascar"},
        {nome: "Ilze", cpf: 72514483262, endereco: "Eslovênia"},
        {nome: "Sven", cpf: 17892345676, endereco: "Caribe"},
        {nome: "Yas", cpf: 1111111111, endereco: "Itapetininga"}
    ]
    res.render('clientes', { clientela : clientela })
})

// -> Produtos.ejs
app.get("/produtos", function(req, res){
    let inventario = [
        {nomeProd: "Papel Fotográfico A4 100u", price: 56.90, cat: "Papel"},
        {nomeProd: "Caderno Universitário 80 folhas", price: 45.90, cat: "Caderno"},
        {nomeProd: "Estojo Médio Metalizado", price: 37.90, cat: "Estojo"},
        {nomeProd: "Canetinha Hidrográfica 12 cores", price: 14.90, cat: "Caneta"},
        {nomeProd: "Apontador 1 Furo com Depósito", price: 9.90, cat: "Apontador"}
    ]
    res.render('produtos', { inventario : inventario })
})

// -> Pedidos.ejs
app.get("/pedidos", function(req, res){
    let pedidos = [
        {numPedido: 546345, value: 102.40},
        {numPedido: 215423, value: 66.30},
        {numPedido: 145122, value: 8.40},
        {numPedido: 542698, value: 3.0},
        {numPedido: 420693, value: 312.65}
    ]
    res.render('pedidos', { pedidos : pedidos })
})


app.listen(8080, erro =>{
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})