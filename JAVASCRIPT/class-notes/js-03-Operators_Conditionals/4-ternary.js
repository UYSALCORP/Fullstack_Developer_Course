//! TERNARY OPERATOR //
// Şarta bağlı durumlar yazmak için daha kısa yöntemler
// ES6 ile gelen özellik

// Klasik if else yapısı
//? Else yapısı bulunmak zorunda değil
let yas=30
if (yas>=18){
    console.log("Oy kullanabilirsin.");
}
else {
    console.log("Büyü de gel!");
}

// 1. Kullanım | Çıktıya ihtiyaç yok console'da göstermek istiyorum
//? Else yapısı bulunmak zorunda
yas >=18 ? console.log("Reşit bir bireysin") :console.log("Biraz daha beklemen lazım");
//          True kısmı                      ||  False kısmı
yas >=18 ? console.log("Reşitsin"): null

// 2. Kullanım | Daha yaygın bir kullanım.
let message= yas>=18 ? "Oy kullanabilir" : "Oy kullanamaz"

                console.clear()

// ÖRN: Yas 18'den büyük sağlıklı ve erkek : askerlik yapabilir.
let age = 20
let gender = "male"
let health = true

const result = age>=18 && gender=="male" && health==true ? "Askerlik yapabilir" : "Askerlik yapamaz"
console.log(result);

// ÖRN: Verilen sayı tek mi çift mi?
let sayi= 54
const tekCift = sayi%2===0 ? "Sayı çifttir" : "Sayı tektir."
console.log(tekCift);

// Hız 120'den büyükse hızlı, 90'dan büyükse normal, 90 altındaysa yavaş
let speed = 120
//* If else yapısı ile
if (speed>120) {
    console.log("hızlı");
}
else if (speed>90){
    console.log("normal");
}
else {
    console.log("yavaş");
}
                                    console.clear();
//* Nested Ternary
const speedLimit=speed>120 ? "Hızlı" : speed>90 ? "Normal" : "Yavaş"
console.log(speedLimit);

// Verilen gün cumartesi ya da pazarsa haftasonu yazsın, değilse haftaiçi
let gunler = prompt("Bir gün giriniz")
let gun= gunler=="Cumartesi" || "Pazar" ? "Haftasonu" : "Haftaiçi"
console.log(gun);