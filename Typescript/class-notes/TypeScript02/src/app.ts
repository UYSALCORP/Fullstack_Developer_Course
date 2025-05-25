//! Intersection 
// TypeScript’te, iki veya daha fazla türü birleştirmek için kullanılır. Bu, bir nesnenin birden fazla türün özelliklerini taşımasını sağlar. Intersection, & operatörü ile gösterilir.
// Örneğin, bir personel ve admin türlerini birleştiren bir tür oluşturabilirsiniz. Bu tür, personel ve admin türlerinin tüm özelliklerini içerecektir.
// And gibi iki özelliğide mutlaka sağlamalı

type Personel={
    name:string;
    age:number;
}

type Admin={
    privileges:string[]
}

type SuperUser=Personel & Admin; 

const Employee1:SuperUser={
    name:"Ali",
    age:30,
    privileges:["Data Enter"]
}

/* -------------------------------------------------------------------------- */
//! Type Assertion
let str:unknown;

str="Hello world"
// Type assertion as keyword ile  tanımlanabilir
console.log((str as string).toUpperCase())

// generic olarak tanımlanabilir
console.log((<string>str).toLowerCase())
str=45
str=false 
/* -------------------------------------------------------------------------- */
//! FONKSIYONLAR
//1. Fonksiyonu void olarak tanımlama
// Void fonksiyon geriye bir değer döndermez

function toplam(a:number,b:number):void{
    console.log(b)
    console.log((a+b))
    return 
}
toplam(34,67)
/* -------------------------------------------------------------------------- */
//2.İstege bağlı parametreler (? operatorü)
// Bazı parametrelerin isteğe bağlı olması için ? kullanılır.

function  selamla(msj:string,name:string,lastname?:string):void{
    console.log(`${msj} ${name} ${lastname}`)
}

selamla("Merhaba","Ömer","Güven")

// 3. Fonksiyonlarda default Value(varsayılan değer) verilebilir

function karsila(name:string,msj:string="Hoşgeldin"):string{
    return `${name} ${msj}`
}
console.log(karsila("Ali"))
console.log(karsila("Sema","Naber"))
/* -------------------------------------------------------------------------- */
//4. Arrow Function
const cikarma=(a:number,b:number):number => a-b

console.log(cikarma(43534,56))

// 5. Function Overloading
// Bir fonksiyonun birden fazla parametre kombinasyonunu desteklemesi için overload kullanılabilir.

function birlestir(a:string,b:string):string;
function birlestir(a:number,b:number):number;

function birlestir(a:any,b:any):any{
    return a+b
}

console.log(birlestir("Aslı","Demir"))
console.log(birlestir(3543,676))
console.log(birlestir(true,false))
console.log(birlestir([3,5,6],[34543,56]))

// 6.Rest Parametresi
//Rest parametresi(...)
// Rest parametresini array olarak alır ve fonksiyonun çağrıldığı yerdeki tüm argümanları bir dizi olarak toplar. Bu, fonksiyonun değişken sayıda argüman almasına olanak tanır.

function topla(...degerler:number[]):number{
    return degerler.reduce((acc,sayi)=> acc+sayi,0)

}
 console.log(topla(56,34,23,64,56)) 

 // 7.Anonim fonksiyonlar
 const carpma=function(x:number,y:number):number{
    return x*y
 }

 console.log(carpma(43,76))

 /* -------------------------------------------------------------------------- */
 //! CLASSES
 class Student{
    //Property
    studentNumber:number;
    studentName:string;

    //Constructor
    constructor(code:number,ad:string){
        this.studentNumber=code;
        this.studentName=ad
    }

    // Method - Yani fonksiyonlar
    getFullName(){
        console.log(`Fullname: ${this.studentNumber} - ${this.studentName}`)
    }

 }

 const student1=new Student(134523,"Ali")
 console.log(student1)

 const student2=new Student(67675,"Ömer")
 console.log(student2)
student1.getFullName()
/* -------------------------------------------------------------------------- */
//! Classes Inheritance
class Person{
    name:string;
    lastname:string

    constructor(name:string,lastname:string){
        this.name=name;
        this.lastname=lastname
    }
}

//Inhertiance - Person yapısından Extend ile miras alıyoruz
class DepartmentAdmin extends Person{
    AdminCode:number;
    constructor(adminCode:number,name:string,lastname:string){
        super(name,lastname);
        this.AdminCode=adminCode;       
    }
    displayInfo(){
        console.log(`${this.AdminCode} - ${this.name} ${this.lastname}`)
    }
}
const user=new Person("Adil","Senay")
const CodingAdmin=new DepartmentAdmin(3455,"Ayşe","Güven")
const SalesAdmin=new DepartmentAdmin(34523,"Ali","Mert")
CodingAdmin.displayInfo()

//! Abstract Classlar

abstract class Kisi{
    name:string;
    lastname:string

    constructor(name:string,lastname:string){
        this.name=name;
        this.lastname=lastname
    }

    abstract KisiInfo():void;
}
// Abstract classlar kendilerinren bir nesne türetilmesine izin vermez
const YeniKisi=new Kisi("Ahmet","Mete")

class Kullanici extends Kisi{
    CeoCode:number;
    constructor(code:number,name:string,lastname:string){
        super(name,lastname)
        this.CeoCode=code;
    }
    KisiInfo(): void {
        console.log("Kişi info bilgilsine ulaşıldı")
    }
}

const Ceo=new Kullanici(6567586886,"Uras","Mert")
console.log(Ceo.CeoCode)
Ceo.KisiInfo()
/* -------------------------------------------------------------------------- */

//! DATA MODIFIERS

// public:Varsayılan erişim seviyesi. Sınıf içinden ve dışından erişilebilir.
// private:Sadece tanımlandığı sınıf içinden erişilebilir.
// protected:Sadece sınıf içinden ve alt sınıflar (inheritance) tarafından erişilebilir.

class Employee{
     public name:string;
     public position:string;
     protected workingHours:number; // Şirket içinde görülebilri olsun - Inherit eden classlarda görebilir
     private salary:number; // sadece kendi classı içinde ulaşılabilir
     readonly id:number  // Sadece okunabilir olsun
     #password:string  // Tamemen gizli. Metodlar yardımıyla güncelleme

     constructor(id: number, name: string, position: string, salary: number, workHours: number, password: string) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.workingHours = workHours;
        this.#password = password;
    }

    public getSalary():number{
        return this.salary
    }

    public changePs():string{
        return this.#password="dfdsdf"
    }


}

class SalesEmployee extends Employee{
    constructor(id: number, name: string, position: string, salary: number, workHours: number, password: string) {
        super(id, name, position, salary, workHours, password);
    }

    checkWorkingHours(){
        console.log(`${this.name} çalışma saatleri kontorl edildi ${this.workingHours} `)
    }

}


const NewSalesEmployee=new SalesEmployee(12,"Ali","Ceo",230000,35,"dr3456y")
console.log(NewSalesEmployee.id)

/* -------------------------------------------------------------------------- */
//! INTERFACE
// Javascriptte karşılığı yoktur
// Interface, TypeScript’te güçlü bir araçtır ve nesnelerin, sınıfların ve fonksiyonların yapısını tanımlamak için kullanılır. Kodun daha okunabilir, güvenli ve hataya daha az açık hale gelmesini sağlar.

//!Objelerde kullanımı - 
//Typescriptte objelerde interface - fonksiyonlarda type kullanımı daha yaygındır
interface kullanici{
    name:string;
    age:number;
    greet():void;
}

const User1:kullanici={ name:"Ayşe", age:12,greet(){console.log("Merhaba")}}

//!Classlarda kullanımı

interface Animal{
    tur:string;
    MakeSound():void;
}

class Dog implements Animal{
    tur:string;
    constructor(tur:string){
        this.tur=tur
    }
    MakeSound(): void {
        console.log(`${this.tur} ses çıkarır`)
    }
}

const kopegim=new Dog("Bulldog")
console.log(kopegim)