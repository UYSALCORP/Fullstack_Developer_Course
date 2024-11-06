// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):

// ----------------------------------------------------------------------
// recursive function | IIFE (Immediately Invoked Function Expression) | Callback function

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! * --------Function-Declaration----------------------------*/
// /JavaScript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içeriğini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır 
//? Bir fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

function yazdir(){
    console.log("Merhaba Nasılsınız");
}
console.log("Fonksiyondan önce");
yazdir()
console.log("Fonksiyondan sonra");
//* Bir fonksiyonu bir kere tanımlayıp defalarca kullanabilirsin.
yazdir()
yazdir()
yazdir()
yazdir()

// Hoisting : Yukarı kaldırma
//! Sadece function declerationda hoisting yapılabiliyor.
// Hoisting: Function declaration ile tanımlanan fonksiyonlar, JavaScript tarafından kodun en başına "yükseltilir" (hoist edilir), bu nedenle fonksiyon tanımlanmadan önce bile çağrılabilir
topla()

function topla() {
    console.log(25 + 777);
}

//? PARAMETRELİ FONKSİYONLAR
// Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır. 
//?Parametreler, fonksiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
//* Fonksiyon tanımlanırken verilen değerlere arguments denir

function toplam(a,b,c){ // arguments
    console.log(a+b+c);
}
toplam(45,67,89) // parametre
toplam(34,54,26) // parametre
// Fonksiyonlarda değişkenin değeri gönderilir. Kendisi gitmez!
// Başlangıç değeri (default) tanımlanabilir.
function selamla(ad, yas=19, meslek, il="Sakarya"){
    console.log(ad);
    console.log(yas);
    console.log(meslek);
    console.log(il);
    console.log(ad, yas, meslek, il);
}
let name="Sema"
let age= 50
let job= "Lifeguard"
let il ;
selamla(name, age, job, il)

// ---------------------------------------------------------------------- */
// Birçok değer gönderilecekse clg(arguments) keyword'unden faydalanabiliriz.
function degerler(){
    console.log(arguments);
}
degerler(34,54,26,31,48,11,10,20,14,24)

console.clear();
//! Return Keyword
function yasHesapla(isim, tarih){
    // console.log(`Merhaba ben ${isim}, ${2024-tarih} yaşındayım.`);
    let yasBul=2024-tarih
    return yasBul
}
const yas = yasHesapla("Uysal", 2001)
console.log(yas);
if (yas>30) {
    console.log("Biraz yaşlanmıssın");
}
else {
    console.log("Çok vaktin kalmadı sen de yaşlanacaksın.");
}
// Dairenin çevresini bulan fonksiyonu
function daireCevresi(r){
    let cevre = 2*Math.PI*r
    // console.log(cevre);
    return cevre
}
console.log(daireCevresi(5)); 
let sonuc= daireCevresi(5)
if (sonuc>30) {
    console.log("Bu daire hayallerimdeki daire olamaz");
}