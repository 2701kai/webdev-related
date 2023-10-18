# Wednesday 18-10-2023 - Classes

> kopiert von https://github.com/FbW-WD-23-D06/WebDEV-Squad/tree/refs/heads/main/PB/18-10-23-Classess-intro

## Learning Goals

- OOP (Object Oriented Programming)
- Classes
- Date class

## Resources

- [Classes](https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/#:~:text=JavaScript%20still%20follows%20a%20prototype,build%20software%20around%20OOP%20concepts.)
- [developer.mozilla.classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
- [Advanced array methods](https://www.youtube.com/watch?v=Urwzk6ILvPQ)

## Task

- [PB-class-single-classes](https://classroom.github.com/a/eYbqsJfK)

## OOP (Object Oriented Programming)

OOP is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

Java, C++, Python, Ruby, PHP, JavaScript, C#, Scala, Swift, Kotlin, Dart, Objective-C, Julia, Perl, and Smalltalk are examples of object-oriented programming languages.

```python code example

class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def greet(self):
        print(f"Hi there! My name is {self.first_name} {self.last_name}")

# Create an instance of the Person class
person1 = Person("John", "Doe")

# Call the greet method on the person1 object
person1.greet()  # Hi there! My name is John Doe

```

## Why learn classes?

- Classes are the most fundamental aspect of object-oriented programming.
- Many developers use classes to build applications, so it's important to understand how they work.
- In Rect (javascript framework) we can use classes to create components (like buttons, inputs, etc..) and is important to understand how they work.

## Class

A class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hi there! My name is ${this.firstName} ${this.lastName}`);
  }
}

const person1 = new Person("Mario", "Rossi");
person1.greet(); // Hi there! My name is Mario Rossi
```

## Benefits of using classes

- Classes allow us to logically group our data and functions in a way that is easy to reuse and also easy to build upon if need be.
- Classes are reusable templates.
- Classes are a great way of storing data and methods in one place.

## Here's a list of things that classes in JavaScript can do that regular objects cannot:

### - **_Multiple Instances_**: Classes allow you to create multiple instances of an object with the same structure and behavior.

```javascript
// Define a class called "Person"
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to display the full name
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create multiple instances of the "Person" class
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");
const person3 = new Person("Alice", "Johnson");

// Call the "fullName" method on each instance
console.log(person1.fullName()); // Output: John Doe
console.log(person2.fullName()); // Output: Jane Smith
console.log(person3.fullName()); // Output: Alice Johnson
```

### - **_Inheritance_**: Classes support class hierarchy, enabling the creation of child classes that inherit properties and methods from parent classes.

```javascript
// Define a parent class called "Vehicle"
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method to display vehicle details
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

// Define a child (subclass) class called "Car" that inherits from "Vehicle"
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Call the constructor of the parent class
    this.year = year;
  }

  // Method specific to the "Car" class
  startEngine() {
    return `${this.make} ${this.model}'s engine is started.`;
  }
}

// Create an instance of the "Car" class
const myCar = new Car("Toyota", "Camry", 2022);

// Call methods from both the parent and child classes
console.log(myCar.getDetails()); // Output: Make: Toyota, Model: Camry
console.log(myCar.startEngine()); // Output: Toyota Camry's engine is started.
```

### - **_Static Methods_**: Classes can define static methods that can be called on the class itself, without creating instances.

```javascript
// Define a class called "MathUtility" with a static method
class Math {
  // Static method to calculate the square of a number
  static square(number) {
    return number * number;
  }
}

// Call the static method without creating an instance of the class
const result = Math.square(5);

console.log("result", result); // Output: 25

// const math1 = new Math(2);
// console.log('math1.square():',math1.square()); // math1.square is not a function
```

In this example:

1. **Inside the class**, we define a **static method** called square, which calculates the square of a given number.

2. We call the static method square **directly on the class itself**, **without creating an instance** of the class.

3. The result of the static method is stored in the result variable, and we log it to the console.

4. Static methods are called on the class itself rather than on instances of the class. They are often used for utility functions that are related to the class but don't require access to instance-specific data.

## - **_Custom Constructor_**: You can define a custom constructor to initialize objects when instances of the class are created.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Mario", "Rossi");
console.log(person1); // Output: Person { firstName: 'Mario', lastName: 'Rossi' }
```

In the example, the constructor of the Person class is customized to accept a person's names as parameters and initialize the firstName and lastName properties of the object based on these parameters.

## - **_Encapsulation_**: Classes can define private and public members through the use of access modifiers (such as private, protected, and public).

```javascript
// Define a class called "Person" with encapsulation
class Person {
  #age; // Private property
  constructor(name, age) {
    // Public property
    this.name = name;

    // Private property (convention using an underscore)
    this.#age = age;
  }

  // Public method to get the age
  getAge() {
    return this.#age;
  }

  // Public method to set the age
  setAge(newAge) {
    if (newAge >= 0 && newAge <= 120) {
      this.#age = newAge;
    } else {
      console.log("Invalid age value");
    }
  }
}

// Create an instance of the "Person" class
const person = new Person("John", 30);

// Access and modify public and private members
console.log(person.name); // Output: John
console.log("person.age", person.age); // Output: undefined
console.log(person.getAge()); // Output: 30
person.setAge(35); // Valid age update
console.log(person.getAge()); // Output: 35

person.setAge(-5); // Invalid age update
console.log(person.getAge()); // Output: 35
```

**Why use encapsulation?**

- **True Privacy**: Properties marked as private with # are indeed private and cannot be accessed or modified from outside the class. This provides a high level of data isolation, preventing unauthorized access.

- **Enhanced Control**: With private properties, the class can implement validation logic and checks within the access methods (getters and setters) to ensure data integrity.

- **Error Prevention**: Private properties reduce the possibility of errors or accidental data manipulation by other developers since direct access is prohibited.

- **Refactoring Optimization**: Using private properties allows for greater freedom in refactoring the internal class structure without having to worry about external side effects.

## - **_Polymorphism_**: Classes can implement polymorphism, allowing objects of different classes to respond to the same message in different ways.

## - **_Child Class Constructors_**: Child classes can call the parent class constructor using super() to properly initialize their properties.

```javascript
// Define a base class "Shape"
class Shape {
  constructor(name) {
    this.name = name;
  }

  // Method to calculate area (to be overridden by subclasses)
  calculateArea() {
    return 0;
  }
}

// Define a subclass "Circle" that extends "Shape"
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  // Override the "calculateArea" method for circles
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Define another subclass "Rectangle" that extends "Shape"
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  // Override the "calculateArea" method for rectangles
  calculateArea() {
    return this.width * this.height;
  }
}

// Create instances of "Circle" and "Rectangle"
const circle = new Circle("Circle", 5);
const rectangle = new Rectangle("Rectangle", 4, 6);

// Call the "calculateArea" method on both objects
console.log(`${circle.name} Area: ${circle.calculateArea()}`); // Output: Circle Area: 78.53981633974483
console.log(`${rectangle.name} Area: ${rectangle.calculateArea()}`); // Output: Rectangle Area: 24
```

## - **_Getters and Setters_**: Classes allow you to define getters and setters to control access to and modification of object properties.

```javascript
class BankAccount {
  #accountNumber; // Private property
  #accountHolder; // Private property
  #balance; // Private property

  constructor(accountNumber, accountHolder, balance) {
    this.#accountNumber = accountNumber;
    this.#accountHolder = accountHolder;
    this.#balance = balance;
  }

  // Getter for the account number
  get accountNumber() {
    return this.#accountNumber;
  }

  // Getter for the account holder's name
  get accountHolder() {
    return this.#accountHolder;
  }

  // Getter for the balance
  get balance() {
    return this.#balance;
  }

  // Setter for the balance with validation
  set balance(newBalance) {
    console.log("set balance", newBalance);
    // Validate the input before setting the balance
    if (typeof newBalance !== "number") {
      console.log("Invalid input for balance.");
      return;
    }
    this.#balance = newBalance;
  }

  // Method to deposit funds into the account
  deposit(amount) {
    // Validate the deposit amount
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Invalid deposit amount.");
      return;
    }

    this.#balance += amount; // Update the balance using the setter
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`); // Accessing through getter
  }

  // Method to withdraw funds from the account with validation
  withdraw(amount) {
    // Validate the withdrawal amount and available balance
    if (typeof amount !== "number" || amount <= 0 || amount > this.#balance) {
      console.log("Invalid withdrawal amount or insufficient funds.");
      return;
    }

    this.#balance -= amount; // Update the balance using the setter;
    console.log(`Withdrawn $${amount}. New balance: $${this.#balance}`);
  }

  // Method to display account details
  displayAccountInfo() {
    console.log(`Account Number: ${this.#accountNumber}`); // Accessing through getter
    console.log(`Account Holder: ${this.#accountHolder}`); // Accessing through getter
    console.log(`Balance: $${this.#balance}`); // Accessing through getter
  }
}

const myAccount = new BankAccount("123456789", "John Doe", 1000);

console.log(`Account Number: ${myAccount.accountNumber}`); // Accessing through getter
console.log(`Account Holder: ${myAccount.accountHolder}`); // Accessing through getter
console.log(`Balance: $${myAccount.balance}`); // Accessing through getter

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.displayAccountInfo();
```

**Description:**

In this more complex example, we have a BankAccount class representing a bank account with private properties for the account number, account holder, and balance.

1. We define getter methods (get accountNumber(), get accountHolder(), get balance()) to access these properties.

2. We define a setter method (set balance(newBalance)) to modify the balance property, including validation to ensure it's a non-negative number.

3. We also have methods (deposit, withdraw, displayAccountInfo) for depositing, withdrawing funds, and displaying account details.

4. We create an instance of the BankAccount class, access properties using getters, perform deposit and withdrawal operations, and display updated account details.

This example demonstrates how getters and setters can be used to encapsulate and control access to private properties while adding validation and custom behavior. It models a more realistic scenario of managing a bank account with enhanced control and validation.

## Method

```javascript
  greet() {
    console.log(`Hi there! My name is ${this.firstName} ${this.lastName}`);
  }
```

## Brief example how was before in JS without class

```javascript
// Define a constructor function for a Person object
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add a "greet" method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hi there! My name is ${this.firstName} ${this.lastName}`);
};

// Create a new instance with the Person constructor
const person1 = new Person("Mario", "Rossi");

// Call the greet method on the person1 object
person1.greet(); // Hi there! My name is Mario Rossi
```

## Date class

```javascript
const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
```
