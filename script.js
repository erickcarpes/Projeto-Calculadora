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

function somar(){
    let numeros = document.querySelector('.operation').innerHTML;

    if(numeros){
        document.querySelector('.result').innerHTML = eval(numeros);
    }
    
    document.querySelector('.operation').innerHTML = "";
}

function changeSignal(){
    let numeros = document.querySelector('.result').innerHTML;

    if(numeros !== 0){
        document.querySelector('.result').innerHTML = (-numeros);
    }
}