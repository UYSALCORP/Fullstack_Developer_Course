//! RECURSIVE FONCTIONS //
// Kendi kendini çağıran fonksiyona denir.
// Bazı formülü olan matematiksel problem için kullanılabilir.

//Örn: Verilen sayıya kadar olan sayma sayılarının toplamını bulan fonksiyon
const toplam=(n)=>{
    let topla=0;
    for(let i=1; i < n; i++) {
        topla += i
    }
    console.log("Sayıların toplamı", topla);
}
toplam(11)

//! Recursive Fonksiyon'un Yapısı
// Çalışmazı için en az iki temel bileşen ihtiyaç vardır 
//? Sonlanma Koşulu: Fonksiyonun kendi kendini çağırmasını durduran koşul. (Sayma sayısı olduğu için 1den  küçük olursa durmalı)
//? Özyineleme Adımı: Fonksiyonun, kendisini tekrar çağırdığı adım.

//* Recursive fonksiyon ile
const toplamlar=(n)=>{
    if(n<1){
        return 0
    }
    else{
        return toplamlar(n-1) + n
    }
}
console.log(toplamlar(10));

// Faktoriyel Örneği
const fact=(n)=>{
    if(n===1){
        return n
    }
    else{
        return fact(n-1) + n
    }
}
console.log(fact(4));