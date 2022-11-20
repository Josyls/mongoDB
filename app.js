const express = require("express");
const app = express();
// Vamos chamar nosso usuario
const usuario = require("./usuariomodel");
//Esse comando nos auxilia na conexão com o mongodb
const mongoose = require('mongoose');
app.listen(3000,(error)=>{
    if (error) console.log("Erro ao conectar no Servidor")
    else console.log("Servidor rodando na porta 3000")
});
// Esse comando visa conexão com mongodb

async function conn(){
    var x= await mongoose.connect('mongodb://localhost:27017/praias');
    console.log(x.connection)
    //alimentar o banco de dados
    await usuario.create({name:"Josy",telefone:"85996807032"})
}
conn()