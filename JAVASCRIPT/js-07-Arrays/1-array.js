//! DİZİLER | ARRAYS
//?JavaScript'te array (dizi), birden fazla değeri tek bir değişken içinde depolamamızı sağlayan bir veri yapısıdır.
//? Diziler, farklı türde verileri (sayılar, stringler, booleanlar vb.) aynı anda tutabilir ve indeks numaralarıyla erişilebilirler. 

//* Dizi Tanımlama -> [] -> Square bracket (Array Literal)
// Arrayler içerisinde bir çok tür değişken olabilir.

//! Boş Array
const school = "Clarusway"
const numbers=[]
const names=["Uysal","Göktuğ","Baran", 34,54,31,true,null,NaN,[3,6,9],"Recep", school];
console.log(names);
console.log(names[0]);
console.log(`Sonuncu eleman ${names[names.length-1]}`);

names[0] = names[0].toUpperCase();
console.log(names[0]);

//! 2.Yöntem | Object Constructor
const newArray= new Array("Javascript","HTML","CSS")
console.log(newArray);

//! 3.Yöntem | Array.of()
const sayilar=Array.of(4)
console.log(sayilar);
console.clear();

//? Dizi Değiştiren (MUTATOR) Metodlar
const cars = ["BMW","Audi","Mercedes","Porche","Scoda"]
console.log(cars);
console.log(cars[4]);

//! PUSH Metodu
// push() dizi sonuna eleman ekler
// Yeni eleman eklenmiş halini dönderir.
cars.push("Jeep"), console.log(cars);

//! POP Metodu
// pop() dizi sonundan eleman çıkarır.
const deletedCar=cars.pop()
console.log(cars);
console.log(deletedCar);

//! UNSHIFT Metodu
// unshift() dizi başına (0.index'e) eleman ekler.
cars.unshift("Ferrari")
console.log(cars);

//! SHIFT Metodu
// shift() dizi başından eleman çıkartır.
cars.shift()
console.log(cars);

//! SPLICE
// Array içinde ara bir noktaya ekleme yapmak için kullanılır.
//? 1.Parametre: Eklenecek indis numarası
//? 2.Parametre: 0 ise araya 1 ise üzerine yazma.
//? 3.Parametre: Yeni eklenecek veri.
cars.splice(3,0,"Bugatti")
cars.splice(5);
console.log(cars);

//! REVERSE
// Tersten yazdırır.
cars.reverse()
console.log(cars);

//! SORT
// Alfabetik olarak | Küçükten büyüğe yazdırır.
cars.sort()
console.log(cars);

const numbers1 = [10,26,21,34,14,54,3]
numbers1.sort((a,b)=>a-b)
console.log(numbers1);