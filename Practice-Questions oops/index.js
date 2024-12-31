//Question-1 :- Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    
}

let Dharmik = new Person("Dharmik",22,"India");
console.log(Dharmik);

let Harpal = new Person("Harpal",20,"India");
console.log(Harpal);

// Question-2 :- Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const myRectangle = new Rectangle(5, 10);
  
  const area = myRectangle.calculateArea();
  const perimeter = myRectangle.calculatePerimeter();
  
  console.log(`Area: ${area}`);
  console.log(`Perimeter: ${perimeter}`);


// Que-3 Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.  

 class Vehicle {
  constructor(make,model,year){
    this.make= make;
    this.model=model;
    this.year=year;
  }

  display(){
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    
  }
 }

 class Car extends Vehicle{
  constructor(make,model,year,doors){
    super(make, model, year);
    this.doors = doors;
  }

  display(){
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors: ${this.doors}`);
  }
 }

 const myCar = new Car("Mercedes", "Maybach", 2024,4);
 myCar.display()

 const myCar2 = new Car("Range Rover", "Velar", 2024, 4)
 myCar2.display()

//  Que-4
class BankAccount{
  constructor(accountNumber,balance =0){
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposite(amount){
    this.balance += amount;
  }

  withdraw(amount){
    if(this.balance >= amount){
      this.balance -= amount
    } else {
      console.log("Insufficient Funds");
    }
  }
}
let account1 = new BankAccount("367208038",150000);
let account2 = new BankAccount("367201411",200000)

account1.deposite(50000);
account2.deposite(50000);
account1.withdraw(100000);
account2.withdraw(100000);

console.log(account1);
console.log(account2);

// Que -5
class Shape {
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

let circle = new Circle(5);
let triangle = new Triangle(4, 6);
console.log(circle.area());
console.log(triangle.area());


// que 6 
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    return (this.salary * 12) + 5000;
  }
}

const manager1 = new Manager('Dharmik', 80000, 'HR');
const manager2 = new Manager('Harpal', 70000, 'IT');

console.log(manager1.calculateAnnualSalary());
console.log(manager2.calculateAnnualSalary());


// Que 7

class Book {
constructor(title, author, publicationYear) {
  this.title = title;
  this.author = author;
  this.publicationYear = publicationYear;
}

displayDetails() {
  console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}`);
}
}

class Ebook extends Book {
constructor(title, author, publicationYear, price) {
  super(title, author, publicationYear);
  this.price = price;
}

displayDetails() {
  console.log( `Title: ${this.title}, Author: ${this.author}, Year: ${this.publicationYear}, Price: $${this.price}`);
}
}

const ebook1 = new Ebook('Bhagvad Gita', 'Ved Vyas', 2020, 2000);
ebook1.displayDetails();

// que 8

class Animal {
constructor(species, sound) {
  this.species = species;
  this.sound = sound;
}

makeSound() {
  console.log(this.sound);
}
}

class Dog extends Animal {
constructor(species, sound, color) {
  super(species, sound);
  this.color = color;
}

makeSound() {
  console.log(`${this.sound} - The dog's color is ${this.color}`);
}
}

const Labra = new Dog('Labra', 'Bark', 'White');
Labra.makeSound();

const Husky = new Dog('Husky','wooo','black & white');
Husky.makeSound();

