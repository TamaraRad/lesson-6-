function sum(a, b) {
    let result = a + b;
    return result;
    console.log('Сумма =${result}');
}



let sum1;
let sum2;

//sum1=10+20;
//sum2=20+30;


console.log(`Сумма =${sum(10, 20)}`);


function sayHello(userName) {
    console.log(`Привет, ${userName}!`);
}
sayHello('Тамара');


function getAge(userName, year) {
    let age = 2022 - year;
    console.log(`Привет,${userName} , Вам ${age} лет`);
}
getAge('Тамара', 2007)


check(15);

function check(x) {
    if (x % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

check(15)

function check(x) {
    if (x < 0) {
        console.log('Число отрицательное');
    } else if (x > 0) {
        console.log('Число положительное');
    } else {
        console.log('Число равно нулю');
    }
}

check(-10)


