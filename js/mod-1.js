// console.log(1);

//? виводимо в консоль

// let username = "Poly";
// username = "Go";
// console.log(username);

//? typeOf

// const quantity = 17;
// console.log(typeof quantity);

// const name = "Johnny";
// console.log(typeof name);

//? арифметичні оператори

// const x = 8;
// const y = 5;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// // const message = "I " + "am " + "happy" + "!";
// // console.log(message);

//? конкатинація рядків

// const age = 24;
// const message = "I am " + age + " years old";
// console.log(message);

//? рядок до числа

// console.log(Number.parseInt(3.13));
// console.log(Number.parseFloat(3.14));

//? округлення

// console.log("Округлення");
// console.log(Math.floor(1.9));
// console.log(Math.ceil(2.1));
// console.log(Math.round(1.5));
// console.log(Math.min(1, 2, 3));
// console.log(Math.max(12, 10, 15));
// console.log(Math.random());

// console.log(0.1 + 0.2);
// console.log(0.4 + 0.45);

//? цифер після коми

// console.log((0.1 + 0.2).toFixed(3));

//? console.log("function");

// function say() {
//   console.log("Say hi");
// }
// say();

//? шаблонний рядок

// function add(a, b, c) {
//   console.log(`result equals ${a + b + c}.`);
// }
// add(1, 2, 3);

// function doIt() {
//   console.log("Log");
// }
// doIt();

// add(10, 15, 27);

// function multiply(x, y, z) {
//   const product = x * y * z;
//   return product;
// }
// const result = multiply(2, 3, 4);
// console.log(result);

// function multiply(x, y, z) {
//   return (result = x * y * z);
// }
// console.log(multiply(2, 5, 10));

//? calculateTotal ЧЕРЕЗ while
//TODO автоперевірка

// function calculateTotal(number) {
//   let sum = 0;
//   let count = 1;
//   while (count <= number) {
//     sum += count;
//     count++;
//   }
//   return sum;
// }
// console.log(calculateTotal(9));

//TODO автоперевірка

// function makeMessage(name, price) {
//   return `You ordered ${name}, price per item is ${price}.`;
// }
// console.log(makeMessage("Album", 12));

//TODO автоперевірка

// function totalPrice(quant, pricePer) {
//   return `Total price is ${quant * pricePer}.`;
// }
// console.log(totalPrice(12, 3));

//? ПЕРЕЗАПИСУВАТИ LET

// let vari;
// console.log(vari);

// console.log(1);

// vari = "Yes!";
// console.log(vari);

// vari = "Maybe...";
// console.log(vari);

// vari = "No.";
// console.log(vari);

// const x = 2;
// console.log(x);

// console.log(Number(5));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("25px"));

// console.log("5" * 2);

//? console.log("Унарний Плюс (+'20') - те саме, що привести через Number('20')");
//? console.log(+"20");

// console.log(+true);
// console.log("5" - true);
// console.log(2 + "5");
// console.log(2 - "5");

// console.log(10 >= "7");

//? оператори рівності

// console.log("6" === 6); //f
// console.log("false" === false); //f
// console.log(true == 1); //t
// console.log("false" == false); //f
// console.log("0" == false); //t

// const str = "10";
// const num = Number(str);

// console.log(str);
// console.log(num);

//? PROMPT

// const userInput = prompt("Enter number"); //? просимо ввести число (prompt ЗАВЖДИ виводить рядок)
// const userNumber = +userInput; //? призводимо рядок до числа
// console.log(userNumber); //? виводимо в консоль

//? рядок до числа

// let input = prompt("Enter number");
// input = +input;
// console.log(input);

// const userInput = +prompt("Enter");
// console.log(userInput);

// const elementWidth = "50px";
// const numericalWidth = Number.parseInt(elementWidth);
// console.log("elementWidth:", elementWidth);
// console.log("numericalWidth:", numericalWidth);

// const elementHeight = "200.74px";
// const numHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight:", elementHeight);
// console.log("numHeight:", numHeight);

// const numA = Number.parseFloat(prompt("First"));
// const numB = Number.parseFloat(prompt("Second"));
// const result = numA + numB;
// console.log(`${result}px`);

// const value = Math.round(prompt("Enter"));
// console.log(value);

//todo ========== ФУНКЦІЇ ==========

// function greet() {
//   console.log("Hello, user!");
// }
// greet();

//? функція обчислення площі

// function square(x, y) {
//   console.log(x * y);
// }
// square(5, 8);

// function greet(name) {
//   console.log(`Hello ${name}!`);
// }
// greet("Pavlik");

// function add(numA, numB) {
//   return numA + numB;
// }
// console.log(add(2, 3));

//? індекс мaси тіла

// function calcBMI(weight, height) {
//   //   weight = Number(weight);
//   //   height = Number(height);
//   //   const result = Number(weight) / Number(height ** 2);
//   //   return result.toFixed(1);
//   return Number((Number(weight) / Number(height ** 2)).toFixed(1));
// }
// console.log(calcBMI("88.3", "1.75"));
