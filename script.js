
//função para inserir os numeros na operation
function insert(num){
    const curentDisplay = document.querySelector('.operation');

    //verificação para caso o  numero no operation for 0, ele só ser inserido, caso não seja 0, ele é adicionado
    if(curentDisplay === 0 || curentDisplay === '' ){
        document.querySelector('.operation').innerHTML = num;
    }else{
        document.querySelector('.operation').innerHTML += num;
    }
}

//função para limpar o opertion e o result
function clean(){
    document.querySelector('.operation').innerHTML = "";
    document.querySelector('.result').innerHTML = "0";
}

//função para excluir o ultimo caracter da operation
function back(){
    let numeros = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = numeros.substring(0, numeros.length-1);
}

//função para adicionar novos caracteres a operation
function add(){
    let operacao = document.querySelector('.operation').innerHTML;
    let resultado = document.querySelector('.result').innerHTML;

    //vallidação para casos de exceção
    if(resultado === "0" || resultado ===  "" || resultado.substring(0,4) === "ERRO"){
        resultado = operacao            
    }else{
        resultado += operacao;
    }


    //try-catch para caso não seja possivel efetuar a soma
    try{
        resultado = eval(resultado)
    }catch(error){
        resultado = "ERRO";
    }

    if(resultado == "Infinity"){
        resultado = "ERRO: kkkkk"
    }

    document.querySelector('.result').innerHTML = resultado;
    document.querySelector('.operation').innerHTML = "";
}

//função para mudar o sinal do numero do result
function changeSignal(){
    let numeros = document.querySelector('.result').innerHTML;

    if(numeros !== 0){
        document.querySelector('.result').innerHTML = (-numeros);
    }
}