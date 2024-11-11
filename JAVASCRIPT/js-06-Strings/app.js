console.log("Strings");
//! STRINGS

//! String tanımlama
const str1 = "Clarusway";
const str2 = `UYSALCORP`;

console.log(str2);
console.log(typeof str2);

// String constructor ile String oluşturma
const str3 = new String("Way to reinvent yourself");
console.log(typeof str3);

//? Normalde primitive veri tiplerinin property veya metodları olmaz. Js otomatik olarak stringleri string objectlere dönüştürür.

//! String Yapısı ve Indexleme
let kelime = "Clarusway";
console.log(kelime[0]);

for (let i = 0; i < 9; i++) {
  console.log(kelime[i]);
}
// Stringler parça olarak değiştirilemez // Immutable
kelime[0] = "H";
console.log(kelime);

//! String Property
// Property stringin kendi özelliğidir bir method(fonksiyon) değildir.
// Parantez açıp kapatmaya gerek yoktur.

//! String Methods
//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()         Returns the Unicode of the character at the specified index.
// concat()             Joins two or more strings, and returns a new string.
// endsWith()           Checks whether a string ends with a specified substring.
// fromCharCode()       Converts Unicode values to characters.
// includes()           Checks whether a string contains the specified substring.
// indexOf()            Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()        Returns the index of the last occurrence of the specified value in a string.
// localeCompare()      Compares two strings in the current locale.
// match()              Matches a string against a regular expression, and returns an array of all matches.
// repeat()             Returns a new string which contains the specified number of copies of the original string.
// replace()            Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()              Searches a string against a regular expression, and returns the index of the first match.
// slice()              Extracts a portion of a string and returns it as a new string.
// split()              Splits a string into an array of substrings.
// startsWith()         Checks whether a string begins with a specified substring.
// substr()             Extracts the part of a string between the start index and a number of characters after it.
// substring()          Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()  Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()  Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()        Converts a string to lowercase letters.
// toString()           Returns a string representing the specified object.
// toUpperCase()        Converts a string to uppercase letters.
// trim()               Removes whitespace from both ends of a string.
// valueOf()            Returns the primitive value of a String object.

console.clear();
//? Lenght -> Bir stringin boşluklarda dahil kaç karakterden oluştuğunu verir.
const metin = "Clarusway IT Bootcamp";
let emoji = "🎸";
console.log(metin.length);
console.log(emoji.length); // Emojiler 2 karakter yer kaplar

//! String Methods
// Metodlar () ile kullanılır.
// Chaining yani zincirleme olarak kullanılabilir.

// toLowerCase(), toUpperCase(), // Immutable
// Küçük harfe,   Büyük harfe çevirme.
console.log(metin.toLowerCase());
console.log(metin.toUpperCase());

// let sehir = "Istanbul"
// console.log(sehir.toLocaleLowerCase("tr-TR"));

//! String Birleştirme Yöntemleri
//* + ile birleştirme, concat() ile birleştirme, Template Literal (` `) ile birleştirme

let text1 = "Merhaba "
let text2 = "Javascript"
console.log(text1 + text2);

text1 += "Uysal"
console.log(text1);
//* concat()
let s1= "Yakarsa Dünyayı "
let s2= "Garipler yakar"
console.log(s1.concat(s2));
let s3 = s1.concat(s2) // Farklı bir değişkenle metini kalıcı hale getiririz.
console.log(s3);
//* Template Literals
// ES6 ile geldi. backtick kullanarak string birleştirir.
let str5 = "Lorem ipsum"
let str6 = "Dolor sit amet."
// let isim = prompt("Adın ne?")
console.log(`${str5} ${str6}`);

//! String Parçalama Metodları
// split, substring, substr, slice()
//! split()
// str.split(seperator) | seperator: ayraç
//? Parçaladığı elemanları bir diziye aktarır!
console.clear();
let metin1 = "Clarusway IT Bootcamp"
console.log(metin.split(" "));
let parcalanmisMetin = metin1.split(" ")

for (let i = 0; i < parcalanmisMetin.length; i++) {
    if (parcalanmisMetin[i] === "IT") {
        console.log("Bu cümlede IT kelimesi geçiyor.");
    }
}
console.log(metin1.split(""));

// Örn: Verilen tarih bilgisini gün ay yıl olarak ayır
let date = "11.11.2024"
let newDate = date.split(".")
console.log(newDate);
let gun = newDate[0]
let ay = newDate[1]
let yil = newDate[2]
console.log(gun, ay, yil);

let months = "Jan / Feb / Mar / April / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec"
let newMonth = months.split(" / ")
console.log(newMonth);

//* Join Metodu
// string metodu değil. bir dizi elemanı string olarak birleştirir.
console.log(newMonth.join(" "));

//* Reverse Metodu
// string metodu değil. Bir diziyi tersine çevirir.

// Örn: Bir kelimeyi tersten yazdıran program
let kelime1 = "Uysalcorp"
console.log(kelime1.split("").reverse().join(""));

let send = "Yarı yar olanın yar sarar yarasını"
console.log(send.split(" ").reverse().join());

// Polindrom
let kelime2 = "ey edip adanada pide ye"
let mesaj = kelime2===kelime2.split("").reverse().join("") ? "Polindromdur" : "Polindrom değildir."
console.log(mesaj);

console.clear();

//! Slice()
//? String içinde bir bölünü almak için kullanılır
// slice(baslangıc index numarası, bitiş index numarası)start ve end yani. End dahil değildir.

let sentence = "Merhaba Cohort 18"
console.log(sentence.slice(0,7));
console.log(sentence.slice(8,14));
// negatif indexleme
console.log(sentence.slice(-9, 14));

//  Girilen sayının tersini yazdırma
// let enterNumber = 6785;

// const inverseOfNumber = (n) => {
//     let concatNum;
//     const inverse = n.toString().split("",)
//     console.log(inverse.length);

//     for (let i = inverse.length; i >= 0; i--) {
//         concatNum += inverse[i];
//     }
//     return concatNum
// }
// console.log(+inverseOfNumber(enterNumber).slice(3));

//! Substring
// substring(start, end). slice()'dan farkı Negatif index kullanılamaz. //? Çok Kullanılmaz
//! Substr
// substr(start, kaç adet karakter alacak) //? Çok kullanılmaz.

//! String İçinde Arama İşlemleri
//* includes, indexOf, search, match metodlarını kullanabiliriz.

//! Includes
