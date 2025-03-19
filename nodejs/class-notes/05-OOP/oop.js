"use strict"

//! OBJECTS & OOP & CLASSES

//? OBJECTS
const expObj = {
    propertyName: "value", // attribute, field // object, array, boolean, number, string, function
    methodName: function(){
        return console.log("Functions called method in object")
    },
    methodNameAlternative (){
        return console.log("This is alternative decleration of function in object")
    }
}
// 1.Yol
console.log(expObj.propertyName)
expObj.methodName()
// 2.Yol
console.log(expObj["propertyName"])
expObj["methodName"]()
console.clear()
// -----------------------------------------------
//? "THIS" keyword refers to execution context (object)

const Car = {
    brand: "Ford",
    model: "Mustang",
    year: 1967,
    details: {
        color1: "white",
        color2: "black",
        engineSize: 4900
    },
    getDetail: function () {
        // console.log(this)
        return console.log(this.details)
    },
    getDetailArr: () => {
        return console.log(this.details) // Global Scope'dan dolayı arr functa this çalışmaz
    }
    
}

Car.getDetail()
// Car.getDetailArr()
// -----------------------------------------------
//? "NEW" keyword creates a new instance(constructor'da oluşturulan objelere denir) of an object 

const carConstructor = function (brand, model, year) {
    // değişkenler this ile oluşturuluyorsa constructor'dur
    this.brand = brand
    this.model = model
    this.year = year
}

const car = new carConstructor("Ford","Mustang", 1967)
console.log(car)
console.log(car.brand)

const car2 = new carConstructor("Audi","R7", 2025)
console.log(car2)
console.log(car2.brand)
console.clear()
// ----------------------------------------------------

//? OOP: Object Oriented Programming
//* Class is a blueprint for creating objects. It defines properties and methods that objects will have.
//* OOP is a way of structuring code using objects.
//* OOP helps organize code by preventing.
//- Code Duplication (Inheritance)
//- Messy logic ( Encapsulation & Abstraction )
//- Difficult code reuse (Polymorphism)

//* OOP is the concept
//* Classes are the way to implement oop.

// Class Declaration
class PascalCaseDeclaration{ }
// Class Expression
const PascalCaseExpression = class {
    undefinedProperty // Only defination, undefined
    propertyName = "value"
    constructor(param1, param2){
        this.param1 = param1
        this.param2 = param2
    }
    methodName(){
        return this
    }
}
const exp1Instance = new PascalCaseExpression(5,4);
console.log(exp1Instance)
console.clear()
// --------------------------------------------

//? ENCAPSULATION
// Bundling data (variables) and methods (functions) into a single unit (object)
// Protects data from direct access by restricting modification

// Worst Approach
let brand = "BMW"
let speed = 100

function accelerate(){
    speed += 10
    console.log(`${brand} is going at${speed} km/h`)
}
accelerate()

// Better Approach
