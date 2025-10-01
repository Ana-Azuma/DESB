// Cria o modelo para salvar o usuario

// importa o mongoose para definição do Schema e modelo
const mongoose = require("mongoose");

// Cria a estrutura schema para o documento de usuario
const UsuarioSchema = new mongoose.UsuarioSchema({
    nome:{type: String, required: true}, // Campo nome, obrigatorio e do tipo String
    email:{type: String, required: true} // Campo email, obrigatorio  e do tipo String
});

// Exporta o modelo Usuario que será utilizado nas rotas CRUD

module.exports = mongoose.model("Usuario",UsuarioSchema);