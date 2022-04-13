//TASK 1. Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
// > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

function getSum(num) {
    let res = 0;
    for (let i = 1; i <= num; i++){
        res += i;
    };
    return res;
};

console.log(getSum(100));

//TASK 2. Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:
// + процентная ставка в год — 17%,
// + количество лет — 5.
// > Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

function getОverpayment(creditAmount) {
    let res = 0;
    const part = creditAmount / 5;
    for (let i = 1; i <= 5; i++) {
        res += creditAmount * 0.17;  
        creditAmount -= part;       // каждый год процент на остаток. выплаты равными частями
    };
    return res;
};

console.log(getОverpayment(50_000));

//TASK 3. Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString(str, start, end) {
    return str.slice(start, end+1);
};

console.log(trimString('Hello, JavaScript!', 1, 5));


//TASK 4. Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
// > Для 2021 это будет 5.

// через остаток от деления
function getSumNumbers(num) {
    let res = 0;
    while (num) {
        res += num % 10;
        num = (num - (num % 10)) / 10;
    };
    return res;
};

console.log(getSumNumbers(2021));

// через строку
function getSumNumbers(num) {
    let res = 0;
    for (let i of String(num)) {
        res += Number(i);
    };
    return res;
};

console.log(getSumNumbers(5555));

//TASK 5. Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или 
// отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

function getSumRange(a, b) {
    res = 0;
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            res += i;
        };
    } else {
        for (let i = b; i <= a; i++) {
            res += i;
        };
    };
    return res;
};

console.log(getSumRange(1, 0));
console.log(getSumRange(-1, 2));

//TASK 6. Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя
// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

let foo = () => console.log('foo');
let boo = () => console.log('boo');

let fooboo = (bool, func1, func2) => bool ? func1() : func2();

fooboo(true, foo, boo);
fooboo(false, foo, boo);

// Advanced

//TASK 1. Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**, 
// если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.

// Треугольник существует только тогда, когда сумма двух его сторон больше третьей. Требуется сравнить каждую сторону с 
// суммой двух других. Если хотя бы в одном случае сторона окажется больше либо равна сумме двух других, то треугольника с 
// такими сторонами не существует.

function checkTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);  // логическое ИЛИ возвращает сразу булевое значение, поэтому if не нужен
};

console.log(checkTriangle(15, 2, 2));
console.log(checkTriangle(15, 15, 15));


//TASK 2. + Ваша задача - разбить плитку шоколада заданного размера n x m 
// на маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть разбит. 
// Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
// + Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на 
// отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
// + Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, 
// если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.

function splitChocolate(n, m) {
    if (n <= 0 || m <= 0) {
        return 0;
    } else {
        return (n - 1) + n * (m - 1);    // делим сразу по n, потом каждый кусочек, полученный при делении по n ломаем m - 1 раз 
    };                                  // (минус 1, т.к. считаем границы между кусочками, а не сами кусочки)
};


console.log(splitChocolate(2, 1));
console.log(splitChocolate(3, 1));
console.log(splitChocolate(2, 3));
console.log(splitChocolate(0, -1));


//TASK 3. + Напишите программу для вычисления общей стоимости покупки телефонов. 
// Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся 
// деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.
// + После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран 
// вычисленную сумму покупки, правильно отформатировав её.
// + Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
// + Вы должны настроить некоторые константы для «ставки налога», «цены телефона», 
// «цены аксессуара», также как и переменную для вашего «баланса банковского счета».
// + Вам следует определить функции для вычисления налога и для форматирования цены 
// со знаком валюты и округлением до двух знаков после запятой.
// +  Попробуйте включить ввод данных в вашу программу, например с помощью функции 
// prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

const taxRate = 20;

let getTax = (taxRate, amount) => amount * (taxRate / 100);

let formatPrice = (price) => `${price.toFixed(2)} $`; // функция toFixed округляет до указанного количества знаков после запятой

function allowToBuy() {
    let phonePrice = +prompt('What\'s phone price?');
    let accessoriesPrice = +prompt('What\'s accessories price?');
    let bankBalance = +prompt('How much money do you have?');

    let startPrice = 0;
    let amount = 0;
    while (bankBalance >= startPrice) {
        startPrice += phonePrice + accessoriesPrice;
        amount += 1;
    };

    let totalCost = startPrice + getTax(taxRate, startPrice);

    alert(`Total cost is ${formatPrice(totalCost)}`);

    if (bankBalance >= totalCost) {
        alert(`You can buy ${amount} phones`);
    } else {
        while (bankBalance <= totalCost) {
            totalCost -= phonePrice + accessoriesPrice + getTax(taxRate, phonePrice + accessoriesPrice);
            amount -= 1;
        };
        if (amount <= 0) {
            alert("Sorry, you cannot afford to buy anything");
        } else {
            alert(`You can afford only ${amount} phones with price ${formatPrice(totalCost)}`);
        }
    };

};

allowToBuy()



