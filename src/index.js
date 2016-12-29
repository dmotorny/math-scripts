const btn = document.querySelector('.btn');
const finResult = document.querySelector('.result');

// First variant - recursion

/*
function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}*/

// Second variant - cycle

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

btn.addEventListener('click', e => {
    const x = document.querySelector('.first_num').value;
    const n = document.querySelector('.second_num').value;
    const result = pow(x, n);
    finResult.innerHTML = x + '<sup>' + n + '</sup> = ' + result;
});

