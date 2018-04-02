var userNumone = +prompt('Метод 1');
alert(fib(userNumone));

function fib(n) {
    if (n == 1 || n == 2)
        return 1;
    else
        return fib(n - 2) + fib(n - 1);
}

var userNumtwo = +prompt('Метод 2 ');
alert(fibo(userNumtwo));

function fibo(num) {
    var fibPrev = 0,
        fibPrePrev = 1,
        fibNext = 1;
    for (var i = 2; i <= num; i++) {
        fibNext = fibPrev + fibPrePrev;
        fibPrev = fibPrePrev;
        fibPrePrev = fibNext;
    }
    return fibNext;
}

var userNumtree = +prompt('Метод 3');
alert(fibonacci(userNumtree));

function fibonacci(number) {
    var sequence = [1, 1];
    for (var i = 2; i < number; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[number - 1];
}