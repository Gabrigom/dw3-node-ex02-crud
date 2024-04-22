import mongoose from "mongoose"

const produto = new mongoose.Schema({
    nomeProd: String,
    price: Number,
    categ: String
})

export default produto