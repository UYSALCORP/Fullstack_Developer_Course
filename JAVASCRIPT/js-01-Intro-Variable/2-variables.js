// Değişkenler
const degiskenAdi="Javascript"
let sayi=10
var isFalse=true

console.log(degiskenAdi);
console.log(sayi*10);

// Global Scope ve Local Scope
//? Global Scope: Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir.
//? Kodu yamaya bağladığımızda global scope yazarız.SAdece tek global scope var.
const x="Bu global alanda oluşturuldu"

//? Local Scope : Bir block içi (fonksiyon, if bloğu  gibi alanlar)
let ad="Uysal"
{
    console.log("Bu kısım local alandır.");
    console.log(ad)
}
console.clear();
// Değişken Tanımlama
// let, const, var | 3 değişken tanımlama keyword'ü

// Const
// ! CONST: Sadece başlangıçta değer atanabilir. Sonradan değer atanamaz!
const pi=3.14
const ad1="Uysal"
console.log(ad1);

// LET
//! İstenildiği zaman değeri değişebilir. Aynı değişken adıyla yeni bir değişken tanımlanamaz.
let lang="Js"
console.log(lang);
lang="Php" // Lang değerini değiştirdim.
console.log(lang);

// Var
//! İstenildiği zaman değeri değişebilir. Aynı değişken adıyla yeni bir değişken tanımlanabilir. Çok sağlıklı değil. Redeclare edilebilir. Var kullanılması önerilmez.
var kimlikNo="232581"
console.log(kimlikNo);
var kimlikNo="13476" 
{
    console.log(kimlikNo);
}
// Hoisting | Önce kullan sonra tanımlarsın. | Js hoisting destekler.
console.log(y);
var y=5

console.log(typeof kimlikNo);