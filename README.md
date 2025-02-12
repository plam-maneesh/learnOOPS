## Object-Oriented Programming (OOP)

## What is OOP?

**Object-Oriented Programming** (OOP) is a programming paradigm that structures code using **objects**, which are instances of **classes**. It allows for modular, reusable, and scalable code by organizing data and behavior into logical entities.

## Key Principles of OOP

### 1. Encapsulation

Encapsulation is the practice of hiding internal details of an object and exposing only the necessary parts. This prevents direct modification of the data and ensures better control.

#### Example:
```
class Person {
  constructor(name, age) {
    this.name = name;
    let _age = age; // Private variable (not directly accessible)
  }
  getName() {
    return this.name;
  }
}

const user = new Person("John", 30);
console.log(user.getName()); // John
```
#### Encapsulation Benefits:

- Protects data from accidental modification.

- Makes code more maintainable and readable.

- Provides controlled access to object properties.

 ### 2. Inheritance

Inheritance allows a child class to derive properties and behaviors from a **parent class**. This avoids redundant code and promotes reusability.

####Example:
```
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.

```
#### Inheritance Benefits:

- Reduces code duplication.

- Establishes a clear hierarchy between classes.

- Makes code more scalable and maintainable.

 ### 3. Polymorphism

Polymorphism allows methods in different classes to share the same name but behave differently. This enables flexibility and cleaner code.

#### Example:
```
class Shape {
  area() {
    return "Area formula not defined";
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

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.54

const rectangle = new Rectangle(4, 6);
console.log(rectangle.area()); // 24
```
#### Polymorphism Benefits:

- Improves code flexibility and maintainability.

- Reduces code complexity by using a consistent interface.

- Allows different classes to be used interchangeably.

 ### 4. Abstraction

Abstraction is the process of **hiding complex implementation details** and only exposing necessary functionalities to the user.

#### Example:
```
class Vehicle {
  startEngine() {
    throw new Error("startEngine() must be implemented");
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

const car = new Car();
car.startEngine(); // Engine started
```
#### Abstraction Benefits:

- Reduces code complexity by hiding implementation details.

- Provides a clear interface for interaction.

- Enhances maintainability by separating functionality from usage.
---

## Advantages of OOP

✅ **Reusability** – Write once, reuse multiple times with inheritance.
✅ **Modularity** – Organizes code into smaller, manageable parts.
✅ **Security** – Encapsulation ensures controlled data access.
✅ **Flexibility** – Polymorphism allows easy code modifications.
✅ **Maintainability** – Abstraction simplifies complex code structures.
✅ **Scalability** – OOP allows applications to grow without major refactoring.

---
## Real-World Applications of OOP

**Web Development** – Frameworks like React, Angular, and Vue use OOP principles.

**Game Development** – Objects represent characters, enemies, and game mechanics.

Real-World Applications of OOP

**Web Development** – Frameworks like React, Angular, and Vue use OOP principles.

**Game Development** – Objects represent characters, enemies, and game mechanics.

**Software Engineering** – Used in enterprise applications like banking, healthcare, and e-commerce.

**Mobile App Development** – OOP is widely used in Android (Java/Kotlin) and iOS (Swift).**Software Engineering** – Used in enterprise applications like banking, healthcare, and e-commerce.

**Mobile App Development** – OOP is widely used in Android (Java/Kotlin) and iOS (Swift).

---
## Conclusion

OOP is a fundamental concept in modern programming. By mastering Encapsulation, Inheritance, Polymorphism, and Abstraction, developers can write cleaner, reusable, and more efficient code.

#### 🚀 Happy Coding!

