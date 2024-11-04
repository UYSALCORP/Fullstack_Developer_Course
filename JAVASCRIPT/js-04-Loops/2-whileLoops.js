//! WHILE LOOP 
// Bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır.

let i=0;
while (i<=10){
    console.log(i);
    i++
}
console.clear();

// Kullanıcıya devam etmek ister misin? sorusu gibi soru ile
// Örn: Kullanıcı şifreyi bulana kadar sorsun
// let password;
// while(password!=="ammbraah"){
//     password=prompt("Şifreyi Giriniz: ")
// }

//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz. Tekrar varsa döngü vardır.
// let number =+prompt("Bir sayı giriniz")
// if (number <0 || number > 100){
//     alert("Sayı 0-100 arasında girilmelidir.")
// }
console.clear();
//! Karar yapısı kontrol eder ve duruma göre programın akışını yönlendirir. Tekrar yapmaz.

// let number1 =+prompt("Bir sayı giriniz")
// while (number1<0 || number1>100){
//     console.log("Sayı 0-100 arasında olmalıdır.");
//     number1=+prompt("0-100 arasında bir sayı giriniz. Çıkış yapmak için 'q' tuşuna basınız.")
//     if(number1=="q"){
//         break
//     }
// }

//! Flag Mechanism:
//flag (bayrak) mekanizması, belirli bir durumun kontrol edilmesi gerektiğinde kullanılır. Flag, genellikle true veya false gibi boolean değerler alır ve koşulun sağlanıp sağlanmadığını belirtir. Bu mekanizma, programın akışını kontrol etmek için yaygın olarak kullanılır.
// let number2 =+prompt("Bir sayı giriniz")
// exit=false
// while (number2<0 || number2>100){
//     console.log("Sayı 0-100 arasında olmalıdır.");
//     number1=+prompt("0-100 arasında bir sayı giriniz. Çıkış yapmak için 'q' tuşuna basınız.")
//     if(number2=="q"){
//         exit=true
//         break
//     }
// }
// exit ? console.log("Çıkış Yapıldı.") : console.log("Girilen sayı", number2);

//* Flag Mekanizmasının Avantajları
//? Kodun Akışını Kolay Kontrol Etme: Flag sayesinde, kullanıcı belirli bir eylemi gerçekleştirdiğinde (örneğin, çıkmak istediğinde) programın nasıl davranacağı netleşir.
//? Esneklik Sağlama: Flag değişkeni kullanarak farklı durumlarda farklı işlemler yapılabilir. Örneğin, bir koşul sağlandığında belirli bir işlemi durdurabilir veya değiştirebilirsiniz.
//? Kodun Okunabilirliğini Artırma: Flag değişkenlerinin anlamlı isimlerle tanımlanması, kodu okuyan kişinin programın amacını daha iyi anlamasına yardımcı olur.

//! SAYI TAHMIN OYUNU
const sayi= Math.trunc(Math.random()*100+1)
console.log(sayi);
exit=false // Çıkış durumu için vi kütüphane kullandım
while(true){
    let tahmin=prompt("1-100 arasında bir sayı girin:")
    // Çıkış kontrolü
    if (tahmin == "q"){
        exit=true
        break
    }
    tahmin= Number(tahmin)
    if (isNaN(tahmin)){
        console.log("Lütfen geçerli bir sayı girin ya da q harfine tıklayın");
        continue
    }
    // Tahmini kontrol edelim
    if (tahmin<sayi){
        console.log("Daha büyük bir sayı giriniz");
    }
    else if (tahmin>sayi){
        console.log("Daha küçük bir sayı giriniz.");
    }
    else {
        console.log("Tebrikler, Tahmininz doğru!");
        break
    }
}
exit ? console.log("Oyundan çıktınız") : console.log("Oyun sona erdi.");