//! ARRAY ITERATIONS
// Array Iteration: Bir array'in içindeki her elemana tek tek ulaşıp gerekli işlemlerin(karşılaştırma, filtrelerin vs.) yapılmasıdır.

//? forEach
//? Map
//? Filter
//? Every
//? Some
//? Finf


//! FOREACH METHOD
//! forEach, bir dizinin elemanlarını teker teker işlemek veya belirli bir işlemden geçirmek için oldukça kullanışlıdır.
//? 1-Void bir metottur: Herhangi bir değer döndürmez. (Yani işlemin sonucu undefined olur.)
//? 2-Diziyi değiştirmez: Orijinal dizi üzerinde değişiklik yapmaz, yalnızca her bir eleman üzerinde işlem yapar.
//? 3-Callback fonksiyonu alır: Dizinin her bir öğesi için çalıştırılacak bir fonksiyon alır.

// For ile
const sayilar =[10,26,34,56,81,99,234]
// for (let sayi of sayilar) {
//     // console.log(sayi);
// }

// forEach ile
sayilar.forEach((sayi)=>console.log(sayi))

const fruits = ["Elma","Armut","Portakal"]
fruits.forEach((fruit)=>console.log(fruit))

// ------------------------------
// Fonksiyon ile kullanımının ikinci yolu
const yas =[10,26,34,56,81,99,234]
yas.forEach(yasYazdir)
function yasYazdir(x){
    console.log(x);
}
console.clear();
// üçüncü yolu
yas.forEach(function(x){console.log(x)})
// -------------------------------
//? forEach 3 parametre alır. 1. zorunlu diğerleri opsiyonel
// ilk parametre -> item
// ikinci parametre -> index
const sebzeler = ["Pırasa","Havuç","Ispanak","Lahana"]
sebzeler.forEach((sebze, index)=>console.log(`${index+1} numaralı sebze ${sebze}`))
// üçüncü parametre ->Arrayın kendisi
sebzeler.forEach((item, index, arr)=>console.log(`${arr} içindeki ${index}.indexe sahip sebze: ${item}`))
sebzeler.forEach((item, i, arr) => (i % 2 === 0 ? console.log(item) : null));
console.clear();
//!--- Hayati öneme sahip bilgi ----
//! forEach return yapmaz(void function)
// const numbers = [45, 243, 123, 78, 23, 56];
// let kare = [];
// kare = numbers.forEach((num) => num * num);
// console.log(kare);

//? ÖRNEK

// 1-Sıcaklıkların Ortalamasını Hesapla
// 2- 22°C'yi aşan günlerin sayısını bul.
// 3-Sıcaklıklar arasındaki farkları hesapla. Örneğin, bir önceki gün ile bir sonraki gün arasındaki farkın mutlak değerini alarak, toplam sıcaklık farkını hesapla.
const sicakliklar = [23, 25, 22, 24, 20, 19, 18, 21, 24, 26, 22];
let toplamSicaklik = 0;
let sicakGunler = 0;
let farkToplami = 0;

let sonuc=sicakliklar.forEach((sicaklik, index, arr) => {
  toplamSicaklik += sicaklik;
  sicaklik > 22 ? sicakGunler++ : null;
  if (index < arr.length - 1) {
    const fark = Math.abs(arr[index + 1] - sicaklik);
    console.log(fark);
    farkToplami += fark;
  }
});

let ort = toplamSicaklik / sicakliklar.length;
console.log(`Sıcaklıkların ortalaması: ${ort.toFixed(2)}`);
console.log(`Sıcak günlerin sayısı ${sicakGunler}`);
console.log(`Toplam sıcaklık farkı:${farkToplami}`);
console.log(`Sonuc:${sonuc} - undefined çünkü değer döndermez`)
/* -------------------------------------------------------------------------- */
console.clear()
//* =======================================
//*            MAP METHOD
//* =======================================
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez. Orjinal diziyi değiştirmez

const numbers = [45, 243, 123, 78, 23, 56];
const kare = numbers.map((num) => num * num);
console.log(kare);

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const isimler=["Tuğba","Nur","Recep","Celal","Bahar","Helen"]
let isimlerDuzenli=isimler.map((isim)=>isim.toUpperCase())
console.log(isimlerDuzenli)

//! tek satırlıkbir kod yazılacaksa { } ve return ihtiyacımız yok
//?-------------- ÖRNEK -------------------
//? macBookTL dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const macBookTL = [90000, 75000, 60000, 40000, 30000];

const euro = 36.29;
const dolar = 33.06;

const macEuro=macBookTL.map((mac)=>Math.trunc(mac/euro))
console.log(macEuro)

const macDolar=macBookTL.map((mac)=>Math.trunc(mac/dolar))
console.log(macDolar)

//! süslü kullandığımız takdirde "return" yazılmalı
const macKur=macBookTL.map((mac)=>{
    return Math.trunc(mac/dolar)
})
console.log(macKur)


//?-------------- ÖRNEK-2 -------------------
//?Öğrencinin sırasını,notunu ve başarı durumunu döndüren bir işlem
//? Notu 50 den büyükse başarılı değilse başarısız

const sinavSonuclari = [85, 72, 95, 60 ,45, 47, 88]; 

//! map metoduda forEach gibi 3 parametre alabilir

const sonucDeg=sinavSonuclari.map((notu,index,arr)=>{
    const durum=notu>50? "başarılı":"Başarısız";
    // return `${index+1}.öğrencinin notu: ${notu}, Durumu: ${durum}`
    return [index+1,notu,durum]
})

console.log(sonucDeg)
console.log(sinavSonuclari)

/* -------------------------------------------------------------------------- */
console.clear()
//* =======================================
//*            FILTER METHOD
//* =======================================
//? belirli bir koşulu sağlayan elemanları seçmek için kullanılır 
//!koşulu sağlayan elemanları içeren yeni bir dizi döner
//?-------------- ÖRNEK -------------------
//? maasi 50000 den büyük olanları yeni bir dizide toplayınız
const maaslar = [90000, 75000, 60000, 40000, 30000];

//? 5 değerli dizi verdik şartı sağlayan 3 değerli bir dizi dönderdi
const buyuk=maaslar.filter((maas)=> maas>50000)
console.log(buyuk)

const basariliOgrenciler=sinavSonuclari.filter((notu)=> notu>50)
console.log(basariliOgrenciler)
console.log(sinavSonuclari)
/* -------------------------------------------------------------------------- */
const names = ['Ali', 'Mehmet', 'Ayşe', 'Zeynep', 'Seda'];
const uzunIsimler=names.filter((isim)=> isim.length>4)
console.log(uzunIsimler)

const a_icerenIsimler=names.filter((isim)=> isim.toLowerCase().includes("a"))
console.log(a_icerenIsimler)

/* -------------------------------------------------------------------------- */
//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//? ORNEK: maasi 50000'den az olanları tespit edip %30 zam yapalım ve bunları yeni bir dizide toplayalım (orjinal diziyi degistirmeden)

const fakirler=maaslar.filter((maas)=> maas<50000)
console.log(fakirler)
const dahaAzFakir=fakirler.map((maas)=> maas*1.3)
console.log(dahaAzFakir)

//? chaining
const zamli=maaslar.filter((maas)=>maas<50000).map((maas)=>maas*1.3)
console.log(zamli)
const zamli1=maaslar.filter((maas)=>maas<50000).map((maas)=>maas*1.3).forEach((maas)=>console.log(maas))
console.log(zamli1)
//* =======================================
//*           REDUCE
//* =======================================
// TODO
//? Reduce dizi elemanlarını alıp tek sonuç dönderir.
//? Biriktirme işlemidir.
// Syntax: array.reduce((accumulator(biriktirec), item, index, array) =>{ yapılacak işlemler}, initialValue);
const salaries = [40000,30000,20000,100000]
const result=salaries.reduce((toplamMaas, maas)=>toplamMaas + maas,0)
console.log("Toplam Maaş:", result);

const sayilarim=[10,26,34,54]
const carpim= sayilarim.reduce((carpimSonucu, sayilarim)=>carpimSonucu * sayilarim, 1)
console.log(`Sayıların çarpımı ${carpim}`);

//? Stringlerle Kullanımı
const kelimeler=["merhaba","dünya","ben","javascript","öğrendim"]
const cumle= kelimeler.reduce((acc, currentValue)=>{
    return acc+ " " + currentValue
})
console.log(cumle);

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.
//! and e benzer

const ages=[45,12,56,14,67,15]
const check=ages.every((age)=> age>=18)
console.log(check) //false

const ages1=[45,89,56,19,87,18]
const check1=ages1.every((age)=> age>=18)
console.log(check1) // true

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.
// or gibi düşünülebilir

const OverCheck=ages1.some((age)=> age>80)
console.log(OverCheck)


// FIND() , FINDLAST()
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

// ÖRN: Yası 30'dan büyük olan ilk ve son elemanı göster.
const yaslar = [23,24,33,45,54]
const bigger = yaslar.find((yas)=>yas > 30)
console.log("Yası 30'dan büyük olan ilk kişi",bigger,"yaşında");
const biggest = yaslar.findLast((yas)=> yas > 30)
console.log("Yaşı 30'dan büyük olan son kişi", biggest,"yasında");