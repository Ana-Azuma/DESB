// função reduce

const numero =[1,2,3,4,5];
const soma = numero.reduce((acumulador,num)=>acumulador+num,0)
console.log(soma)

// soma com for

for(i=0;i<numero.length;i++){
    soma[i]+=numero[i];
}

console.log(`Soma utilizando for ${soma}`)
