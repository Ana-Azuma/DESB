// Cria os métodos post, get, put e delete para os usuarios
// importa as bibliotecas
 const express = require("express"); // biblioteca express
 const router = express.Router(); // biblioteca router
 const Usuario = require("../models/Usuario"); // importa o usuario a partir do models

 // Cria usuario
 router.post("/",async(req,res)=>{
    try{
        const usuario = new Usuario(req.body);
        const salvo = await usuario.save(); // salva usuario
        res.status(201).json(salvo);
    }catch(err){
        res.status(400).json({error:err.message});
    }

 });

 // Lista todos os usuarios

 router.get("/",async(req,res)=>{
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }catch(err){
        res.status(500).json({error: err.message});
    }
 });

 // Atualiza usuario por id

 router.put("/:id",async(req,res)=>{
    try{
        const atualizado = await Usuario.findByIdAndUpdate(req.params.id,req.body,{new: true});
        res.json(atualizado);
    }catch(err){
        res.status(400).json({error:err.message});
    }
 });

 // Deleta usuario por id

 router.delete("/:id",async(req,res)=>{
    try{
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({message:"Usuário deletado com sucesso"});
    }catch(err){
        res.status(500).json({error:err.message});
    }

 });

 module.exports = router;