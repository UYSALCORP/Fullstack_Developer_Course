//! 1- BECEREMEDİM
let number = parseInt(prompt("Bir Sayı Giriniz"))
let asal= true
function asalMi(num) {
if (num<2){
    console.log("Sayı Asal Değil");
    asal=false
}
else {for (let i = 2; i< num; i++){
    if (num % i === 0) {
        console.log("Sayı Asal Değil");
        asal=false
        break
    } 
  }
}
  if(asal==true){
    console.log("Sayı Asal");
  }
} 
asalMi()
//! 2- Dizi İle
function enBuyukVeEnKucuk(sayi1,sayi2,sayi3){
    let sayilar = [sayi1,sayi2,sayi3]
    let enKucuk = parseInt(Math.min(sayilar))
    let enBuyuk = Math.max(sayilar)
    console.log(`En küçük sayı ${enKucuk}`);
    console.log(`En büyük sayı ${enBuyuk}`);
}
enBuyukVeEnKucuk(26,34,54)
//! 3- Fibonacci
function fibonacci(n) {
    let a = 0
    let b = 1

    for (let i=0 ; i <= n ; i++) {
        console.log(a);
        let next= a + b
        a = b
        b = next
    }
}
fibonacci(5);
//! 4- Sesli harf hesap
let metin = prompt("Bir metin giriniz")
const sesliHarfler = "aeıioöuüAEIİOÖUÜ"
let sayac = 0;
for (let i = 0; i < metin.length; i++){
    if(sesliHarfler.indexOf(metin[i]) !== -1) {
        sayac++
    }
}
console.log(`Girilen metindeki sesli harf sayısı ${sayac}`);
//! 5- Sayı tahmin
let randomNumber = Math.trunc(Math.random()*50+1)
exit=false
while(true){
    let guess = prompt("1-50 arasında bir sayı girin. Çıkış yapmak için q'ya basın")
    if (guess == "q"){
        exit=true
        break
    }
    guess=Number(guess)
    if (isNaN(guess)){
        console.log("Lütfen geçerli bir sayı girin ya da q harfine tıklayın");
        continue
    }
    if (guess< randomNumber){
        console.log("Daha Büyük bir sayı Giriniz:");
    }
    else if (guess > randomNumber) {
        console.log("Daha küçük bir sayı giriniz:");
    }
    else {
        console.log("Tebrikler, Tahmin doğru");
        break
    }
}
exit ? console.log("Oyundan çıktınız!") : console.log("Oyun Sona erdi");