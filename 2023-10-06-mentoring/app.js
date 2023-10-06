// map ()
// map benutzt, wenn wir array haben (map =>)
// map guch jedes einzelne element
// map returns new array; wichtig in react
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr.map((num) => num ** 2);
console.log(result1);

// 2. Beispiel
const arr1 = [3, 6, 9, 2, 10];
const result2 = arr1.map((num) => num * 2);
console.log(result2);

// 3. Beispiel
const languages = ["html", "css", "javascript", "react"];
const result3 = languages.map((word) => word.toUpperCase());
console.log(result3);
console.log(languages);

// 4. Beispiel: index (y) mit map
const numbers1 = [2, 3, 4, 5];
const result5 = numbers1.map((x, y) => `${x} has index ${y}`);
console.log(result5);

//square root
const numbers2 = [4, 9, 16, 25];
const result6 = numbers2.map((x) => Math.sqrt(x));
console.log(result6);

const myNum = [-1, 4, 17, -8, 22, 0];
const result7 = myNum.filter((z) => z >= 0);
console.log(result7);

// 5. Beispiel gerade Zahlen
const mvNum1 = [10, 30, 17, 15, 97, 111, 14, 9, 20];
const result9 = mvNum1.filter((x) => x % 2 === 0); // 2 = gerade nummer
console.log(result9);

// 6. Beispiel
const mvNum2 = [100, 20, 33, 44, 50, 60];
const result10 = mvNum2.filter((x) => x % 2 === 0 && x > 50);
console.log(result10);

// 7. Beispiel
const cars = ["audi", "bmw", "mercedes", "volvo", "ford"];
const result11 = cars.filter((car) => car.length > 4);
console.log(result11);

console.log("-------------------REDUCE------------------------------");
// reduce
// returns single value
const num = [30, 17, 3, 20]; // 70
// first call => prevValue = 30, currentValue = 17
// second call => prevValue = 47, currentValue = 3

const sum = num.reduce((prevValue, currentValue) => prevValue + currentValue);
console.log(sum);
