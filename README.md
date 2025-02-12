
# 🚀 Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that uses **objects** to design and structure code. JavaScript supports OOP through **classes, objects, inheritance, encapsulation, polymorphism, and abstraction**.

---

## 🔹 1. What is an Object?
An **object** is a collection of **properties (variables) and methods (functions).**  
Example:
```js
let car = {
  brand: "Toyota",
  speed: 120,
  drive: function () {
    console.log(`The ${this.brand} is driving at ${this.speed} km/h.`);
  }
};

car.drive(); // Output: The Toyota is driving at 120 km/h.



#  Four Pillars of OOP

## Encapsulation (Data Hiding)

Encapsulation **bundles data and methods together,** restricting direct access.
Example:
class Car {
  #speed; // Private property (Encapsulation)

  constructor(brand, speed) {
    this.brand = brand;
    this.#speed = speed;
  }

  getSpeed() {
    return this.#speed; // Accessing private property via method
  }
}

let myCar = new Car("BMW", 150);
console.log(myCar.getSpeed()); // Output: 150

