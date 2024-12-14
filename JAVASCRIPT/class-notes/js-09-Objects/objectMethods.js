//! OBJECT METHODS //
//? İçiçe (nested) object kullanımı
const employeeList = {
    person1:{name:"Yunus", lastname:"Uysal", age:23},
    person2:{name:"Baran", lastname:"Mutlu", age:20},
    person3:{name:"Recep", lastname:"Vatansever", age:23},
    person4:{name:"Göktuğ", lastname:"Savaş", age:23},
}
console.log(employeeList);
console.log(employeeList.person1.lastname);

//* FOR - OF - IN YAPISI
//? for ... of 
// for (let i of employeeList){
//     console.log(i); // Objeler iterable olmadığı için for of yapısı ile ulaşamayız.
// }

for (i in employeeList){
    console.log(i); // Sadece key değerlerine ulaşabiliyoruz.
}

// ----------------- Object arraye çeviren yöntemler kullanırız. for in ya da for of yerine.
//! Key'lere erişim sağlamak için Object.keys()
const keys = Object.keys(employeeList)
console.log(keys);
//! Value'lara erişim sağlamak için Object.values()
const values = Object.values(employeeList)
console.log(values);
//! Object.Entries
const degerler = Object.entries(employeeList);
console.log(degerler);

