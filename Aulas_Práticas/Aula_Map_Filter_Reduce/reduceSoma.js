//Devolve o valor total da lista de compras//

function total(arr){
    return arr.reduce(function(prev, current){
        return prev + current
    });
}

const listaCompras = [5, 4, 6];

console.log('O total é:',total(listaCompras),'reais');