const btn = document.querySelector('.btn');
const finResult = document.querySelector('.result');

function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

btn.addEventListener('click', e => {
    const x = document.querySelector('.first_num').value;
    const n = document.querySelector('.second_num').value;
    const result = pow(x, n);
    finResult.innerHTML = x + '<sup>' + n + '</sup> = ' + result;
});

