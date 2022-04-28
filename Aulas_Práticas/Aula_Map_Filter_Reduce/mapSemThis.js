//Rotina para Calcular (Sem o This) os valores comprados com juros e desconto de 10% //
 
function pagamentoJuros(arr) {
     return arr.map(function(item){
        return item * 1.1;
     });
}

function pagamentoDesconto(arr) {
     return arr.map(function(item){
        return item * 0.9;
     });
}

const compras = [50, 30, 15, 5];

console.log('pagamento com juros de 10%', pagamentoJuros(compras));

console.log('pagamento com desconto de 10%', pagamentoDesconto(compras));