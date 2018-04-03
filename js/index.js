const n = parseInt(prompt('Введите любое число'));

document.write('Рекурсивный метод ' + fib(n) + '<br>' + '<br>');

function fib(n) {
    if (n == 1 || n == 2)
        return 1;
    else
        return fib(n - 2) + fib(n - 1);
}
document.write('Цикличный метод ' + fibo(n) + '<br>' + '<br>');

function fibo(n) {
    let fibPrev = 0,
        fibPrePrev = 1,
        fibNext = 1;
    for (let i = 2; i <= n; i++) {
        fibNext = fibPrev + fibPrePrev;
        fibPrev = fibPrePrev;
        fibPrePrev = fibNext;
    }
    return fibNext;
}
document.write('Через массив ' + fibonacci(n) + '<br>' + '<br>');

function fibonacci(n) {
    let sequence = [1, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[n - 1];
}
