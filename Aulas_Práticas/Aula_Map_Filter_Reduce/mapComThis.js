//Rotina para Calcular (Com o This) os valores comprados com juros e desconto de 10% //
 
const juros = {
     value: 1.10,
};

const desconto = {
     value: 0.90,
};

function pagamento(arr, thisArg) {
     return arr.map(function(item){
        return item * this.value;
     }, thisArg);
}

const compras = [50, 30, 15, 5];

console.log('pagamento com juros de 10%', pagamento(compras, juros));

console.log('pagamento com desconto de 10%', pagamento(compras, desconto));