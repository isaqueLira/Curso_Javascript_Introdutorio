//Rotina que devolve o saldo final após uma lista de compras//

const carteira = 500;

function saldo(arr){
    return arr.reduce(function(prev, current){
        return prev - current
    },carteira)
}

const listaCompras = [10, 5, 89, 250, 100];

console.log('O saldo disponível na Carteira é: ',saldo(listaCompras,500),'reais');
