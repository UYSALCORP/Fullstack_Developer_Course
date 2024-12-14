//! FUNCTION EXPRESSION
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır
// ? Önce fonksiyon oluşturmak şart - hoistin olmaz

const adYazdir=function(){
    console.log("Merhaba");
}
adYazdir()

//* Parametreli function exp. //
const isEvenOdd=function(a){ // a=54
    // let result = a%2 == 0 ? "Even" : "Odd"
    // return result

    return a%2 == 0 ? "Even" : "Odd"
}
let sayi= 54
console.log(isEvenOdd(sayi)); 

// Örn: Verilen 3 sayıdan en büyüğünü bulun (Math.max kullanmadan) 
//!???? Benim Denemem
// let a=26
// let b=34
// let c=54
// const büyükBul=function(){
//     if(a > b > c && a > c > b){
//         console.log("En büyük a");
//     }
//     else if(c > b > a && c > a > b){
//         console.log("En büyük c");
//     }
//     else {
//         console.log("En büyük b");
//     }
// }
// büyükBul()
////!?? Hocanın yaptığı
let a=26
let b=34
let c=54
// const enb = function(){
//     if ((a>=b) && (a>=c)){
//         console.log(a);
//     }
//     else if ((b>=a) && (b>=c)) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
// enb()
//??? 2.Yöntem
const enb=function(){
    let biggest = a;
    if(b>biggest){
        biggest = b
    }
    if(c>biggest) {
        biggest = c
    }
    console.log(biggest);
}
enb()