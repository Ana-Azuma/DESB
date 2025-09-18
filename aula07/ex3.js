// Exemplo fruta
class Fruta{
    // cria construtor
    constructor(){
        this.sabor="Doce";
        this.nome="Laranja";
        this.cor="Verde";
        this.peso=400;
        this.diasdesdecolheita=5;
        this.isMadura=null; // o atributo pode ser opcional, inicializado como null
    }

    // cria metodo

    madura(diasParaMadura){
        if(diasParaMadura>=this.diasdesdecolheita){
            console.log(`A ${this.nome} está madura`);
        }else{
            console.log(`A ${this.nome} não está madura`);
        }

    }
}

// Instanciando o objeto

Laranja =new Fruta();
Laranja.madura(4);