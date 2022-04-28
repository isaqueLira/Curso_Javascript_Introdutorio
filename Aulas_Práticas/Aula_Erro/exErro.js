function validaArray(arr,num){
    try {
        if(!arr && !num) throw new ReferenceError("Envie os Parâmetros");

        if(typeof arr !== 'object') throw new TypeError("O Array precisa ser do Tipo Object");
    
        if(typeof num !== 'number') throw new TypeError("O Número precisa ser do Tipo Number");
    
        if(arr.length !== num) throw new RangeError("O tamanho do Array precisa ser igual ao Número");

        return arr
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este é um erro ReferenceError")
            console.log(e.message)
        }else if(e instanceof TypeError){
            console.log("Este é um erro TypeError")
            console.log(e.message)
        }else if (e instanceof RangeError){
            console.log("Este é um erro RangeError")
            console.log(e.message)
        }else{
            console.log("Aconteceu um erro não esperado: "+e)
        }
    }
}

console.log(validaArray([1,2,3,4,5], 5));