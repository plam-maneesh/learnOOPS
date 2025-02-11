# 🚀 Method Overloading vs Method Overriding in OOP

Understanding **Method Overloading** and **Method Overriding** is crucial for mastering Object-Oriented Programming (OOP). This guide explains both concepts with examples in JavaScript.

---

## 🔹 1. What is Method Overloading?
**Method Overloading** allows multiple methods with the **same name** but **different parameters** in the same class.

### ❌ JavaScript Does Not Support Overloading
Languages like **Java & C++** support method overloading, but **JavaScript does not support it directly**. However, we can **mimic it** using **default/rest parameters**.

### ✅ Example: Simulating Method Overloading in JavaScript
```js
class MathUtils {
  add(a, b, c = 0) { // Default parameter used to mimic overloading
    return a + b + c;
  }
}

let math = new MathUtils();
console.log(math.add(2, 3));    // Output: 5
console.log(math.add(2, 3, 4)); // Output: 9
        # learnOOPS
