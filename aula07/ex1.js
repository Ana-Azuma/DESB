// Exemplo classe para autenticação

class Usuario{
    // cria o construtor
    constructor(){
        this.usuario = null; // 
        this.senha = null;

    }

    // cria metodo chamado autentica
    autentica(){
        const usuario = "Senai";
        const senha = "senai@2025";
        if(this.usuario===usuario && this.senha === senha ){
            console.log("Login correto");
        }
        else{
            console.log("Erro, tente novamente");
        }
    }
}

// Exemplo de uso
user = new Usuario();
user.usuario='Senai';
user.senha='senai@2023';
user.autentica();
