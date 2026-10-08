console.log("Задание 11");
let temperature = 18;
if (temperature < 0) {
    console.log("Очень холодно");
} else if (temperature <= 15) {
    console.log("Прохладно");
} else if (temperature <= 25) {
    console.log("Тепло");
} else {
    console.log("Жарко");
}

console.log("Задание 12");
let login = "student";
if (login === "admin") {
    console.log("Добро пожаловать!");
} else {
    console.log("Неверный логин");
}

console.log("Задание 13");
let a = 12;
let b = 25;
let c = 18;
if (a >= b && a >= c) {
    console.log("Максимальное число: " + a);
} else if (b >= a && b >= c) {
    console.log("Максимальное число: " + b);
} else {
    console.log("Максимальное число: " + c);
}

console.log("Задание 14");
let age = 25;
if (age < 7) {
    console.log("Бесплатно");
} else if (age < 18) {
    console.log("500 ₸");
} else if (age < 60) {
    console.log("1000 ₸");
} else {
    console.log("600 ₸");
}

console.log("Задание 15");
let day = 3;
switch (day) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("Неверный номер дня");
}

console.log("Задание 16");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Сумма: " + sum);

console.log("Задание 17");
let count = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
    }
}
console.log("Количество чётных чисел: " + count);

console.log("Задание 18");
let grades = [85, 90, 78, 92, 88];
let gradesSum = 0;
for (let i = 0; i < grades.length; i++) {
    gradesSum = gradesSum + grades[i];
}
let average = gradesSum / grades.length;
console.log("Средний балл: " + average);
if (average > 80) {
    console.log("Средний балл больше 80");
} else {
    console.log("Средний балл не больше 80");
}

console.log("Задание 19");
let prices = [1500, 3500, 2200, 7000, 4100];
let maxPrice = prices[0];
for (let i = 1; i < prices.length; i++) {
    if (prices[i] > maxPrice) {
        maxPrice = prices[i];
    }
}
console.log("Самый дорогой товар: " + maxPrice + " ₸");

console.log("Задание 20");
let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
console.log("Старт!");

console.log("Задание 21");
let queue = [101, 102, 103, 104, 105];
for (let i = 0; i < queue.length; i++) {
    console.log("Приглашается студент №" + queue[i]);
}
console.log("Очередь завершена");

console.log("Задание 22");
let role = "student";
let hasPass = true;
if (role === "teacher") {
    console.log("Доступ разрешён");
} else if (role === "student" && hasPass === true) {
    console.log("Доступ разрешён");
} else if (role === "student" && hasPass === false) {
    console.log("Доступ запрещён");
} else {
    console.log("Обратитесь к администратору");
}

console.log("Задание 23");
let salary = 200000;
let bonusPercent;
if (salary < 150000) {
    bonusPercent = 20;
} else if (salary < 300000) {
    bonusPercent = 15;
} else {
    bonusPercent = 10;
}
let bonus = salary * bonusPercent / 100;
let totalSalary = salary + bonus;
console.log("Базовая зарплата: " + salary + " ₸");
console.log("Премия: " + bonus + " ₸");
console.log("Общая сумма: " + totalSalary + " ₸");

console.log("Задание 24");
let attendance = [
    true, true, false, true,
    false, true, true, true
];
let present = 0;
let absent = 0;
for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
        present++;
    } else {
        absent++;
    }
}
let percent = present / attendance.length * 100;
console.log("Присутствуют: " + present);
console.log("Отсутствуют: " + absent);
console.log("Посещаемость: " + percent + "%");

console.log("Задание 25");
let balance = 100000;
let pin = 1234;
let enteredPin = 1234;
let amount = 25000;
if (enteredPin !== pin) {
    console.log("Неверный PIN-код");
} else if (amount <= 0) {
    console.log("Некорректная сумма");
} else if (amount > balance) {
    console.log("Недостаточно средств");
} else {
    balance = balance - amount;
    console.log("Операция выполнена. Новый баланс: " + balance + " ₸");
}
