const {Schema} = require("mongoose")
const {model} = require("mongoose");
const usuario = new Schema({
   name:String,
   telefone:String
},{
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});
module.exports=model("usuario",usuario);