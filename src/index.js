/******** Power function *******/

const powButton = document.querySelector('.pow_button');
const powResult = document.querySelector('.pow_result');

// First variant - recursion

/*
function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}*/

// Second variant - cycle (faster)

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

powButton.addEventListener('click', e => {
    let x = document.querySelector('.pow_1').value;
    let n = document.querySelector('.pow_2').value;
    let result = pow(x, n);
    powResult.innerHTML = x + '<sup>' + n + '</sup> = ' + result;
});

/********* Arithmetic Progression **********/

const sumButton = document.querySelector('.sum_button');
const sumResult = document.querySelector('.sum_result');
const blockItem_2 = document.getElementsByTagName('DIV')[2];

function sum(n) {

    // First variant - recursion 

    /*
    let result = 0;
    if (n == 1) {        
        return 1;
    } else {
        return result += (+n + sum(+n - 1));
    }*/

    // Second variant - cycle (faster)

    let result = 0; 
    for (let i = 1; i <= n; i++) {  
        result += i;
    }
    return result;
}

sumButton.addEventListener('click', e => {
    let x = document.querySelector('.sum_1').value;
    let result = sum(x);
    sumResult.innerHTML = result;
});

/********* Factorial **********/

const factButton = document.querySelector('.fact_button');
const factResult = document.querySelector('.fact_result');

function fact(n) {

    // First variant - recursion 

    /*
    let result = 0;
    if (n == 1) {        
        return 1;
    } else {
        return result += (+n + sum(+n - 1));
    }*/

    // Second variant - cycle (faster)

    /*
    let result = 1; 
    for (let i = 1; i <= n; i++) { 
        result *= i;
    }
    return result;*/
}

factButton.addEventListener('click', e => {
    let x = document.querySelector('.fact_1').value;
    let result = fact(x);
    factResult.innerHTML = x + '! = ' +result;
});

