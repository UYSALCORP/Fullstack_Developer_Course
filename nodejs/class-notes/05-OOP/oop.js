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

//! ENCAPSULATION | Messy Logic
// Bundling data (variables) and methods (functions) into a single unit (object)
// Protects data from direct access by restricting modification

// Worst Approach
let brand = "BMW"
let speed = 100

function accelerate(){
    speed += 10
    console.log(`${brand} is going at${speed} km/h`)
}
// accelerate()

// Better Approach
class Carr {
    #speed; // Private variable, can't access directly
    constructor(brand, speed){
        this.brand = brand
        this.#speed = speed
    }
    accelerate(){
        this.#speed += 10
        return console.log(`${this.brand} is going at ${this.#speed} km/h `)
    }
}
const bmw = new Carr("bmw", 100)
console.log(bmw.speed)
bmw.accelerate()
console.clear()
// -----------------------------------------

//! ABSTRACTION | Messy Logic
// Hides complex logic and only exposes necessary details.

class Payment{

    proccesPayment(amount){
        this.#connectToBank()
        console.log(`Payment of ${amount} procceed`)
    }
    #connectToBank(){
        console.log(`Connecting to bank...`)
    }
}

const pay = new Payment()
pay.proccesPayment(200)
console.clear()
// ----------------------------------------------

//! INHERITANCE | Code Duplication
// Allows a child class to inherit properties and methods from a parent class
// SUPER: Parent Class -- THIS: Child Class

// Parent Class
class Vehicle {
    isRunning = false;
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
    startEngine(){
        this.isRunning = true;
        return console.log(`${this.brand} ${this.model}'s engine started!`)
    }
    stopEngine(){
        this.isRunning = false;
        return console.log(`${this.brand} ${this.model}'s engine stopped!`)
    }
};

// Child Class
class Carrr extends Vehicle {
    constructor(brand, model, year, fuelType){
        super(brand, model, year)
        this.fuelType = fuelType
    }
    honk(){
        return console.log(`${this.brand} ${this.model} honks!`)
    }
}

const myCar = new Carrr("Audi", "RS8", 2025, "Patrol")
console.log(myCar)
myCar.startEngine()
myCar.stopEngine()
console.clear()

// GrandChild Class
class ElectricCar extends Carrr {
    constructor(brand, model, year, batteryCapacity){
        super(brand, model, year, "Electric")
        this.batteryCapacity = batteryCapacity
    }
    chargeBattery(){
        return console.log(`${this.brand} ${this.model} is charging! Battery: ${this.batteryCapacity} kWh`)
    }
}

const myTesla = new ElectricCar("Tesla", "Truck", 2025, 500)
myTesla.chargeBattery()
console.log(myTesla.fuelType)
console.clear()
// --------------------------------------------------------

//! POLYMORPHISIM
// A child class to have different behaviors for the same method as the parent class.
// -- Method Overriding: Child class redefines a method from the parent class.
// -- Method Overloading: JavaScript does not support it natively, but TypeScript does.

// Parent Class
class Animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        return console.log(`Some generic animal sound...`)
    }
}

// Child Class : Dog
class Dog extends Animal{
    makeSound(){
        return console.log(`${this.name} Barks: Woof!`)
    }
}
// Child Class : Cat
class Cat extends Animal{
    makeSound(){
        return console.log(`${this.name} Meow: Meoww!`)
    }
}
//? Overloading örneği
// makeSound(word){
//     return console.log(`${this.name} says: ${word}!`)
// }

const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Megatron")
const myCat = new Cat("Supa")
genericAnimal.makeSound()
myDog.makeSound()
myCat.makeSound()
console.clear()
// --------------------------------

//! Access Modifiers:
// -- PUBLIC: (Parent: Yes, Child: Yes, Instance: Yes)
// -- PROTECTED: (Parent: Yes, Child: No, Instance: No) (JS does not support)
// -- PRIVATE: (Parent: Yes, Child: No, Instance: No)

class Vehiclee{
    vehicleIsActive = false // Public property
    _protectedProperty = "protected property" // Protected property | _ ile tanımlanır
    _protectedMethod(){ return this } // Protected Method/Function
    #privateProperty = "private property" // Private property
    #privateMethod(){ return this } // Private Method

    constructor(vehicleType){
        this.vehicleType = vehicleType
    }
    getDetails(){
        console.log("Vehicle Get Details worked");
        return this.vehicleType;
    }
}

class Araba extends Vehiclee{
    isRunning = false;
    constructor(brand, model, year, vehicleType = "Car") {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }
    startEngine(){
        this.isRunning = true;
        return console.log(`${this.brand} ${this.model}'s engine started!`)
    }
    getDetails(){
        console.log("Car.getDetail worked")
        return super.getDetails()
    }
}

const Ford = new Araba("Ford", "Mustang", 1967)
console.log(Ford.vehicleIsActive)
console.log(Ford._protectedProperty) // js does not support
// console.log(Ford.#privateProperty) // Ulaşılmıyor sadece parent ulaşır.
Ford.getDetails()
console.clear()
// ---------------------
//? GETTER & SETTER Methods:
//? "STATIC" keyword: Class'dan direct access. (Instance does not access)

class Carsal {
    isRunning = false;
    #price = 5000

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
    startEngine(){
        this.isRunning = true;
        return console.log(`${this.brand} ${this.model}'s engine started!`)
    }
    get getPrice(){
        console.log("Fiyat görüntülendi.")
        return this.#price
    }
    set setPrice(newPrice){
        console.log("Fiyat güncellendi.")
        this.#price = newPrice
    }
    // Static method & attribute
    static staticProperty = "this is static attribute"
    static staticMethod(){
        console.log("This is static method")
        return this
    }

}
const Ford1 = new Carsal("Ford", "Mustang", 1967)
console.log(Ford1.price)
console.log(Ford1.getPrice) // getter ve setter function olarak algılanmaz getPrice() şeklinde göndermiyoruz!
Ford.setPrice = 6000
console.log(Ford1.getPrice)

// How to access static attributes and methods // Object.entries()
console.log(Carsal.isRunning)
console.log(Carsal.staticProperty)
console.log(Carsal.staticMethod())