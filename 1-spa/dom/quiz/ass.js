const animal = {
  type: "cat",
  name: "Ruphus",
  color: "orange",
};

let letters = ["a", "b", "c"];
for (let item of letters) {
  console.log(item);
}

const fn = () => {};
console.log(typeof fn);

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
console.log("------------------------");
class Vehicle {
  constructor(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
  }
}
let car = new Vehicle("BMW", "black", 2010, "Germany");
console.log(car);

console.log("------------------------");
const animal2 = {
  type: "cat",
  name: "Ruphus",
  color: "orange",
};
console.log(Object.keys(animal2));
console.log(animal.age);

// ========================

//#text-2 => green
// .text => red

const textGreen = document.getElementById("text-2");
textGreen.style.color = "green";
console.log(textGreen);

const textRed = document.getElementsByClassName("text");
textRed.style.color = "red";
console.log(textRed);

// ========================
const addClassToH1 = document.querySelector("h1");
addClassToH1.classList.add("blue");
addClassToH1.style.color = "blue";
console.log(addClassToH1);
