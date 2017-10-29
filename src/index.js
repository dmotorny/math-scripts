/******** Power function *******/

const powButton = document.querySelector('.pow_button');
const powResult = document.querySelector('.pow_result');
const powTime = document.querySelector('.pow_time');

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
    let startTime = performance.now(); 
    let result = pow(x, n);
    let finTime = performance.now() - startTime;

    powResult.innerHTML = x + '<sup>' + n + '</sup> = ' + result;
    powTime.innerHTML = finTime < 1 ? finTime.toFixed(4) + ' ms' : finTime.toFixed(2) + ' ms';
});

/********* Arithmetic Progression **********/

const sumButton = document.querySelector('.sum_button');
const sumResult = document.querySelector('.sum_result');
const sumTime = document.querySelector('.sum_time');

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
    let startTime = performance.now();    
    let result = sum(x);
    let finTime = performance.now() - startTime;

    sumResult.innerHTML = result;
    sumTime.innerHTML = finTime < 1 ? finTime.toFixed(4) + ' ms' : finTime.toFixed(2) + ' ms';
});

/********* Factorial **********/

const factButton = document.querySelector('.fact_button');
const factResult = document.querySelector('.fact_result');
const factTime = document.querySelector('.fact_time');

function fact(n) {

    // First variant - recursion 
    
    /*
    if (n != 1) { 
        return  n * fact(n - 1);
    } else {
        return 1;
    }*/

    // Second variant - cycle (faster)
    
    let result = 1; 
    for (let i = 1; i <= n; i++) { 
        result *= i;
    }
    return result;
}

factButton.addEventListener('click', e => {
    let x = document.querySelector('.fact_1').value;
    let startTime = performance.now();
    let result = fact(x);
    let finTime = performance.now() - startTime;

    factTime.innerHTML = finTime < 1 ? finTime.toFixed(4) + ' ms' : finTime.toFixed(2) + ' ms';
    factResult.innerHTML = x + '! = ' + result;
});

/********* Fibonacci numbers **********/

const fibButton = document.querySelector('.fib_button');
const fibResult = document.querySelector('.fib_result');
const fibTime = document.querySelector('.fib_time');

    // First variant - recursion

    /* 
    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    */

    // Second variant - cycle

    function fib(n) {
        let a = 1, b = 1, c;
        for (let i = 0; i < (n - 2); i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }

fibButton.addEventListener('click', e => {
    let x = document.querySelector('.fib_1').value;
    let startTime = performance.now();
    let result = fib(x);
    let finTime = performance.now() - startTime;

    fibTime.innerHTML = finTime < 1 ? finTime.toFixed(4) + ' ms' : finTime.toFixed(2) + ' ms';
    fibResult.innerHTML = result;   
});

