"use strict";
//! Intersection 
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_password;
const Employee1 = {
    name: "Ali",
    age: 30,
    privilages: ["Data Enter"]
};
/* -------------------------------------------------------------------------- */
//! Type Assertion
let str;
str = "Hello world";
// Type assertion as keyword ile  tanımlanabilir
console.log(str.toUpperCase());
// generic olarak tanımlanabilir
console.log(str.toLowerCase());
str = 45;
str = false;
/* -------------------------------------------------------------------------- */
//! FONKSIYONLAR
//1. Fonksiyonu void olarak tanımlama
// Void fonksiyon geriye bir değer döndermez
function toplam(a, b) {
    console.log(b);
    console.log((a + b));
    return;
}
toplam(34, 67);
/* -------------------------------------------------------------------------- */
//2.İstege bağlı parametreler (? operatorü)
// Bazı parametrelerin isteğe bağlı olması için ? kullanılır.
function selamla(msj, name, lastname) {
    console.log(`${msj} ${name} ${lastname}`);
}
selamla("Merhaba", "Ömer", "Güven");
// 3. Fonksiyonlarda default Value(varsayılan değer) verilebilir
function karsila(name, msj = "Hoşgeldin") {
    return `${name} ${msj}`;
}
console.log(karsila("Sema", "Naber"));
/* -------------------------------------------------------------------------- */
//4. Arrow Function
const cikarma = (a, b) => a - b;
console.log(cikarma(43534, 56));
function birlestir(a, b) {
    return a + b;
}
console.log(birlestir("Aslı", "Demir"));
console.log(birlestir(3543, 676));
console.log(birlestir(true, false));
console.log(birlestir([3, 5, 6], [34543, 56]));
// 6.Rest Parametresi
//Rest parametresi(...)
function topla(...degerler) {
    return degerler.reduce((acc, sayi) => acc + sayi, 0);
}
console.log(topla(56, 34, 23, 64, 56));
// 7.Anonim fonksiyonlar
const carpma = function (x, y) {
    return x * y;
};
console.log(carpma(43, 76));
/* -------------------------------------------------------------------------- */
//! CLASSES
class Student {
    //Constructor
    constructor(code, ad) {
        this.studentNumber = code;
        this.studentName = ad;
    }
    // Method - Yani fonksiyonlar
    getFullName() {
        console.log(`Fullname: ${this.studentNumber} - ${this.studentName}`);
    }
}
const student1 = new Student(134523, "Ali");
console.log(student1);
const student2 = new Student(67675, "Ömer");
console.log(student2);
student1.getFullName();
/* -------------------------------------------------------------------------- */
//! Classes Inheritance
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
//Inhertiance - Person yapısından Extend ile miras alıyoruz
class DepartmentAdmin extends Person {
    constructor(adminCode, name, lastname) {
        super(name, lastname);
        this.AdminCode = adminCode;
    }
    displayInfo() {
        console.log(`${this.AdminCode} - ${this.name} ${this.lastname}`);
    }
}
const user = new Person("Adil", "Senay");
const CodingAdmin = new DepartmentAdmin(3455, "Ayşe", "Güven");
const SalesAdmin = new DepartmentAdmin(34523, "Ali", "Mert");
CodingAdmin.displayInfo();
//! Abstract Classlar
class Kisi {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
// Abstract classlar kendilerinren bir nesne türetilmesine izin vermez
const YeniKisi = new Kisi("Ahmet", "Mete");
class Kullanici extends Kisi {
    constructor(code, name, lastname) {
        super(name, lastname);
        this.CeoCode = code;
    }
    KisiInfo() {
        console.log("Kişi info bilgilsine ulaşıldı");
    }
}
const Ceo = new Kullanici(6567586886, "Uras", "Mert");
console.log(Ceo.CeoCode);
Ceo.KisiInfo();
/* -------------------------------------------------------------------------- */
//! DATA MODIFIERS
// public:Varsayılan erişim seviyesi. Sınıf içinden ve dışından erişilebilir.
// private:Sadece tanımlandığı sınıf içinden erişilebilir.
// protected:Sadece sınıf içinden ve alt sınıflar (inheritance) tarafından erişilebilir.
class Employee {
    constructor(id, name, position, salary, workHours, password) {
        _Employee_password.set(this, void 0); // Tamemen gizli. Metodlar yardımıyla güncelleme
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.workingHours = workHours;
        __classPrivateFieldSet(this, _Employee_password, password, "f");
    }
    getSalary() {
        return this.salary;
    }
    changePs() {
        return __classPrivateFieldSet(this, _Employee_password, "dfdsdf", "f");
    }
}
_Employee_password = new WeakMap();
class SalesEmployee extends Employee {
    constructor(id, name, position, salary, workHours, password) {
        super(id, name, position, salary, workHours, password);
    }
    checkWorkingHours() {
        console.log(`${this.name} çalışma saatleri kontorl edildi ${this.workingHours} `);
    }
}
const NewSalesEmployee = new SalesEmployee(12, "Ali", "Ceo", 230000, 35, "dr3456y");
console.log(NewSalesEmployee.id);
const User1 = { name: "Ayşe", age: 12, greet() { console.log("Merhaba"); } };
class Dog {
    constructor(tur) {
        this.tur = tur;
    }
    MakeSound() {
        console.log(`${this.tur} ses çıkarır`);
    }
}
const kopegim = new Dog("Bulldog");
console.log(kopegim);
