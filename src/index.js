const btn = document.querySelector('.btn');

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
    alert(result);
});

