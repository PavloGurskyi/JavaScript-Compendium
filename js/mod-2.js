//todo ===== РОЗГАЛУЖЕННЯ i ЦИКЛИ =====

//? if

// const num = Number(prompt("Enter"));
// if (num === 10) {
//   console.log("Вірно");
// }

//? if ... else

// const num = Number(prompt("Enter"));
// if (num === "10") {
//   console.log("Вірно");
// } else {
//   console.log("Не вірно");
// }

//? balance

// const balance = 1000;
// if (balance > 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

//? deadline

// const date = Number(prompt("Date"));
// if (date === 0) {
//   console.log("Today");
// } else if (date === 1) {
//   console.log("Tomorrow");
// } else if (date > 1) {
//   console.log("Later");
// } else {
//   console.log("Too late");
// }

//todo ===== тернарний оператор =====

// const res = num === 10 ? "yes" : "no";
// console.log(res);

// const numA = 3;
// const numB = 1;

// // if (numA + numB < 4) {
// //   console.log("Мало");
// // } else {
// //   console.log("Багато");
// // }

// let result = numA + numB < 4 ? "Мало" : "Багато";
// console.log(result);

//? співробітник

//! is bad
// const login = "";
// let message =
//   login === "Співробітник"
//     ? "Hello"
//     : login === "Director"
//     ? "Good morning"
//     : login === ""
//     ? "no login"
//     : "";

//todo is good to read
// if (login === "Співробітник") {
//   message = "Hello";
// } else if (login === "Director") {
//   message = "Good morning";
// } else if (login === "") {
//   message = "no";
// } else {
//   message = "";
// }

// console.log(message);

//todo ===== ОБЛАСТІ ВИДИМОСТІ =====

// if (true) {
//   const name = "Pavlik";
// }
// console.log(name);

//todo ===== SWITCH =====

// const option = Number(prompt("Choose 1-2-3"));
// let message = "";

// switch (option) {
//   case 1: {
//     message = "Self";
//     break;
//   }
//   case 2: {
//     message = "Delivery-boy";
//     break;
//   }
//   case 3: {
//     message = "Post";
//   }
//   default: {
//     message = "Manager";
//   }
// }
// console.log(message);

//todo ПРИЗВЕДЕННЯ ДО БУЛЕВОГО ЗНАЧЕННЯ

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(false)); // false

//todo ЛОГІЧНІ ОПЕРАТОРИ &&, ||, !

// console.log(5 && 4);
// console.log(5 && "4");
// console.log(5 && null);
//? yes-yes-yes // return yes
//?yes-false-yes // return first false

//todo example &&

// const someNumber = 6;
// if (someNumber >= 5 && someNumber <= 15) {
//   console.log("Yes");
// }

// if (someNumber >= 5) {
//   if (someNumber <= 20) {
//     console.log("Yes!");
//   }
// }

// console.log(null || 10 || 5);
// console.log(5 || null || 10);
// //?return first yes
// console.log(0 || null);

//todo example ||

// const someNumber = prompt("Not 10");
// let result = someNumber <= 9 || someNumber >= 11 ? "yes" : "no";
// console.log(result);

// const name = prompt("Enter name") || "no name";
// console.log(name);

//todo УНАРНИЙ ОПЕРАТОР ("!") ЛОГІЧНЕ "НІ"

// console.log(!5); //* false
// console.log(!null); //* true
// console.log(!false); //* true

//todo ===== ЗАДАЧІ =====

//todo minutes

// const minutes = prompt("Time");
// let result = "";
// if (minutes <= 15) {
//   result = "First quarter";
// } else if (minutes > 15 && minutes <= 30) {
//   result = "Second qua";
// } else if (minutes > 30 && minutes <= 45) {
//   result = "Third";
// } else if (minutes > 45 && minutes <= 60) {
//   result = "Fourth qurater";
// } else {
//   result = "wrong input";
// }
// console.log(result);

//todo SWITCH з імітацією логічного "або"

// const number = prompt("from 0 to 3");
// let message = "";
// switch (number) {
//   case "0": {
//     console.log('is "0"');
//     break;
//   }
//   case "1": {
//     console.log('is "1"');
//     break;
//   }
//   case "2":
//   case "3": {
//     console.log('maybe "2", maybe "3"');
//     break;
//   }
//   default: {
//     console.log("other number");
//   }
// }

//todo чат з користувачем

// const isOnLine = true;
// const isFriend = true;
// const isDnd = false;

// let canOPenChat = isOnLine && isFriend && !isDnd ? "– Так." : "– Ні";

// console.log("Чи можна відкрити чат?", canOPenChat);

//todo Що в консоль?

// console.log(true && 3); //t
// console.log(false && 3); //fa
// console.log(true && 4 && "kiwi"); //'kiwi'
// console.log(true && 0 && "kiwi"); //0
// console.log(true || 3); //t
// console.log(true || 3 || 4); //t
// console.log(true || false || 7); //t;
// console.log(null || 2 || undefined); //2
// console.log((1 && null && 2) > 0); //false

// //! not 2
// console.log(null || (2 && 3) || 4); //3

//todo =============== LECTION 2 ===============

//? Оператор ?? — злиття з null

// console.log(null ?? "Hello"); //Hello
// console.log(undefined ?? "Hello"); //Hello
// console.log(3 ?? "hello"); //3

//todo ===== МЕТОДИ РЯДКІВ =====

//todo slice()
//todo toUpperCase() / toLowerCase()
//todo includes()
//todo startsWith() / endsWith
//todo indexOf()
//todo trim()

// const firstName = "Pavlo";

// const result = firstName.slice(0, 3);

// const upper = firstName.toUpperCase();
// const lower = firstName.toLowerCase();

// const includes = firstName.includes("avl");
// const starts = firstName.startsWith("pa");
// const ends = firstName.endsWith("vlo");

// const index = firstName.indexOf("v");
// const noindex = firstName.indexOf("q");

// const trim = firstName.trim();

// console.log(firstName);

// console.log(result);

// console.log(upper);
// console.log(lower);

// console.log(includes);
// console.log(starts);
// console.log(ends);

// console.log(index);
// console.log(noindex);

//todo нормалізація (toCase)

// const answer = "ECMAScript";
// let userInput = prompt("Офіційна назва?");

// if (userInput.toLowerCase() === answer.toLowerCase()) {
//   console.log("Вірно!");
// } else {
//   console.log("ECMA");
// }

//todo нормалізація (endsWith)

// let link = "https://site.com/me";

// if (!link.endsWith("/")) {
// //   link = link + "/";
//   link += "/";
// }
// // if (link.endsWith("/")) {} else { link = link + "/"; }
// console.log(link);

//todo нормалізація (&&)

// let link = "https://site.com/me";
// if (!link.endsWith("/") && link.includes("site")) {
//   link += "/";
//   console.log(link);
// } else {
//   console.log("go nahuy!");
// }
