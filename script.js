function insert(num){
    const curentDisplay = document.querySelector('.operation');

    if(curentDisplay === 0 || curentDisplay === '' ){
        document.querySelector('.operation').innerHTML = num;
    }else{
        document.querySelector('.operation').innerHTML += num;
    }
}

function clean(){
    document.querySelector('.operation').innerHTML = "";
    document.querySelector('.result').innerHTML = "0";
}

function back(){
    let numeros = document.querySelector('.operation').innerHTML;
    document.querySelector('.operation').innerHTML = numeros.substring(0, numeros.length-1);
}

function add(){
    let operacao = document.querySelector('.operation').innerHTML;
    let resultado = document.querySelector('.result').innerHTML;

    if(resultado === "0" || resultado ===  "" || resultado === "Infinity" || resultado == "Erro"){
        resultado = operacao            
    }else{
        resultado += operacao;
    }

    try{
        resultado = eval(resultado)
    }catch(error){
        resultado = "Erro";
    }

    document.querySelector('.result').innerHTML = resultado;
    document.querySelector('.operation').innerHTML = "";
}


function changeSignal(){
    let numeros = document.querySelector('.result').innerHTML;

    if(numeros !== 0){
        document.querySelector('.result').innerHTML = (-numeros);
    }
}