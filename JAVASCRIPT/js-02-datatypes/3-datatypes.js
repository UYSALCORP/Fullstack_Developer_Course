// DATA TYPES //

//? PRIMITIVE DATA TYPES //

//! NUMBER DATA TYPES //
// Number : Tamsayılar ve ondalıklı sayıları tutar.

// MATH objesi matematiksel işlemler için gerekli metodlar barındırır.

let pi= Math.PI
console.log(pi);
// Daire'nin alanı
const r=8
console.log(pi*r*r);
// Math pow metodu üs almak için kullanılır.
console.log(pi*Math.pow(r,2));
let cevre=2*pi*r
// Decimal (Ondalıklı) bir sayının ondalık kısımlarını yuvarlama işlemi
console.log(Math.round(cevre));
// Floor en yakın küçük sayıya yuvarlar
const num=34.67
console.log("round",Math.round(num));
console.log("floor:",Math.floor(num));
// Ceil en yakın büyük sayıya yuvarlar
console.log("ceil:",Math.ceil(num));
// Trunc decimal sayıların sadece tam kısmını alır
console.log("trunc:",Math.trunc(num));
// toFixed Ondalıkla kısımdan kaç basamağının alınacağı belirtilir.
console.log(num.toFixed(4));
// Max bir sayı dizisindeki en büyüğü bulur.
console.log(Math.max(3,5,2,15,6,54));
// Min bir sayı dizisindeki en küçüğü bulur.
console.log(Math.min(3,5,2,15,6,54));
// Random rastgele bir sayı üretir. 0-1 arasında üretir.
console.log(Math.random()*10);
let rastgele=Math.trunc(Math.random()*100)
console.log(rastgele);
// sqrt Square root (Karekök) bir sayının karkekökünü alır.
console.log(Math.sqrt(9,3));
console.clear()

//! STRING DATA TYPE //
// Stringler immutable olduğundan parça olarak değiştirilemez
// Indexlenebilir. 0'dan başlar.
let text="Javascript"
let text1='High-level language'
console.log(text[0]);
console.log(text[4]);
console.log(text);

// Escape Character | 
// \t   tab - 8 karakter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash | Arkasına geldiği komutu yok sayar.
let text2='I love blonde girl\'s'
let text3="Seni iki şey anlatır;\nHiçbir şey yokken gösterdiğin sabır\nHer şeyin varken gösterdiğin tavır"
console.log(text3);

//! String Birleştirme
//? 1- + işareti ile birleştirme.
let text4 = "Bu akşam saatlerinde yapılabilecek max etkinlik "
let text5 = "Javascript öğrenmek"
console.log(text4 + text5);
//? 2- Concat metodu
let text6 = "Hello world! "
let text7 = "Lorem ipsum dolor sit amet."
let text8 = text6.concat(text7)
console.log(text8);

//! Template Literal - String Template -ES6
//? Backtik işareti | Alt gr + , -> `
console.log(`Bu yazıyı 
    backtick ile yazarsan
    daha iyi olur`);
let ad="Yunus"
let soyad="Uysal"
let meslek="Web Developer"
let text9 =`Personelimiz ${ad} ${soyad}, firmamızda ${meslek} olarak çalışmaktadır.`
console.log(text9);

//! BOOLEAN DATA TYPE //
// True ya da false değerlerini tutar. Mantıksal karşılaştırmalarda kullanıyoruz.
let isSignUp = true;
console.log(isSignUp);
console.log(typeof isSignUp);

//! UNDEFINED DATA TYPE //
// Js de bir değişkenin türü ilk atanan değere göre belirleniyor. İlk değer atanmadığında değişken undefined olarak tanımlanır.
let deger1=10;
let deger2="Merhaba";
let deger3=
console.log(typeof deger1);
console.log(deger2);
console.log(deger3);

// Değer döndermeyen bir fonksiyon undefined dönebilir.
function example(){
    let sum= 54 + 41
    // return sum yazar değer dönderir.
}
console.log(example());

//! NULL DATA TYPE //
// Boş bir değişken üretmek için kullanılır.
let nedirAcaba=null
console.log(typeof nedirAcaba);
console.clear()

//? NONPRIMITIVE DATA TYPES - REFERENCE BASED //

// ! ARRAY //
// Birden fazla değer tutabilen değişkenlere array(dizi) denir.
let yas=23
let siniftakiOgrenciYaslari=[23,22,24,25,18,19]

//! OBJECT //
let obj={
    name:"Yunus",
    lastname:"Uysal",
    age:23
}
console.log(obj);

//! FUNCTION //
function example(){
    let sum= 54 + 41
    return sum 
}
console.log(example());

//! TYPE CONVERSION //
//* Kullanıcıdan alınan bilgi yapılarından(input,prompt...) bilgi her zaman string olarak gelir. Sayısal bir ifade olsa

//! Automaticaly type conversion
let deger4= 40
let deger5="14"
console.log(deger4+deger5); // Matematiksel toplama yapmaz string toplaması yapar. Yan yana yazar.
console.log(deger4-deger5); // çıkarma, çarpma, bölmede -> Normal sayısal işlemleri yapar.

//? STRING TO NUMBER
// Number
// parseInt
// parseFloat
let deger6="20";
console.log(typeof deger6);
let newDeger=Number(deger6);
console.log(typeof newDeger);
// let mass=prompt("Lütfen maaşınızı giriniz:")    

//? NUMBER TO STRING 
// String()
//str.toString()
let birthday=17
console.log(typeof birthday); // As you can see it is number
let newBirthday=String(birthday)
console.log(typeof newBirthday);

console.log(typeof birthday.toString()); 
console.clear()

//! DATA OBJECT
const now=new Date()
console.log(now);
console.log(now.getFullYear());
console.log(`${now.getHours()}:${now.getMinutes()}`);