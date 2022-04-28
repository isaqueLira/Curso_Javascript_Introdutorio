//Rotina Para Filtrar os Números Pares de uma Array//

function pares(arr){
    return arr.filter(function(item){
        return item % 2 == 0
    });
}

const num = [1, 2, 3, 4, 5, 52, 169, 238];

console.log('A sequência de Pares são:', pares(num));