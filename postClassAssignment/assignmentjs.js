// //! 1-
// let yariCap = prompt("Yarı Çapını Giriniz:")
// let pi = Math.pi
// let area = pi * Math.pow(yariCap, 2)
// console.log(area);
// //! 2-
// let float = prompt("Ondalıklı Sayı Giriniz:")
// console.log(Math.ceil(float));
// console.log(Math.floor(float));
// //! 3-
// console.log(Math.random().toFixed(100) * 100);
// //! 4- 
// let num1 = prompt("Bir sayı girin");
// let num2 = prompt("Bir sayı girin");
// let num3 = prompt("Bir sayı girin");
// let num4 = prompt("Bir sayı girin");
// let num5 = prompt("Bir sayı girin");
// let max = Math.max(num1,num2,num3,num4,num5);
// let min = Math.min(num1,num2,num3,num4,num5);
// console.log(`Girilen max değer:${max} ve min değer ${min}`);
// //! 5-
// let strTamsayi = prompt("Metin olarak bir sayı giriniz:")
// let numbers = parseInt(strTamsayi)
// console.log(numbers);
// //! 6- 
//  let sayi1 = prompt("İlk sayısı giriniz:")
//  let sayi2 = prompt("İkinci sayısı giriniz:")
//  let usluSayi = Math.pow(sayi1, sayi2)
//  console.log(usluSayi);
//  //! 7-
//  let karekok = prompt("Bir sayi giriniz")
//  let karekokBul = Math.sqrt(karekok) 
//  console.log(karekokBul);
//  //! 8-
//  let cumle1 = prompt("1.Cumle:")
//  let cumle2 = prompt("2.Cumle:")
//  console.log(`${cumle1}${cumle2}`);
//  //! 9-
//  let strGir = prompt("Bir kelime giriniz:")
//  let strUzunluk = strGir.length
//  console.log(strUzunluk);
//  //! 10-
//  let strAl = prompt("Kelime ver:")
//  strAl[2]="Z"
//  console.log(strAl);
//  //! 11-

//  let sayi1 = prompt("1.sayıyı girin:");
//  let sayi2 = prompt("2.sayıyı girin:");
//  let sayi1Num = Number(sayi1);
//  let sayi2Num = Number(sayi2);
//  let esitMi = sayi1Num === sayi2Num;

//  console.log(esitMi ? "Sayılar eşit." : "Sayılar eşit değil.");
// //! 12-
//  let deger = prompt("bir değer girin?:");
//  let control = typeof deger;
//  let sayiMi = isNaN(control);
//  console.log(control);
//  console.log(sayiMi ? "girilen değer string'tir" : "girilen değer sayıdır.");
// //! 13-
//  let dogumYili = prompt("Doğum yılınızı giriniz:");
//  Number(dogumYili);
//  let yil = 2024;
//  let yas = yil - dogumYili;
//  console.log(`yaşınız:${yas}`);
// //! 14-
// let sayi1=null; //null
// console.log(typeof sayi1);
// let sayi1; //undefined
// console.log(typeof sayi1);
// // null: Bilinçli olarak boş bırakılan bir değeri ifade eder, tipi hatalı olarak "object" döner.
// // undefined: Değişkene değer atanmamış ya da açıkça undefined atanmış bir durumda görülür, tipi "undefined" döner.
// //! 15-
//  let sayi = prompt("Bir sayı giriniz: ");
//  let sayi2 = Number(sayi);
//  console.log(`sayının karesi:${Math.pow(sayi2, 2)}  sayının küpü:${Math.pow(sayi2, 3)}`);
// //! 16-
//  let kelime=prompt("bir kelime giriniz:");

//  for (let i = 0; i < kelime.length; i++) {
//      const element = kelime[i];
//      console.log(element);
//  }
// //! 17-
//  let today=new Date();
//  console.log(
//    `${today.getDate()}/${
//      today.getMonth() + 1
//    }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
//  );
// //! 18-
//  let sayi = prompt("Bir ondalıklı sayı giriniz:");
//  console.log(Math.trunc(sayi));
// //! 19-
//  let sayi1 = prompt("1.sayıyı girin:");
//  let sayi2 = prompt("2.sayıyı girin:");
//  let sayi3 = prompt("3.sayıyı girin:");
//  let sayi1Num = Number(sayi1);
//  let sayi2Num = Number(sayi2);
//  let sayi3Num = Number(sayi3);
//  let toplam = (sayi1Num + sayi2Num + sayi3Num) / 3;
//  console.log(`Girilen sayıların ortlaması${toplam}`);

// //! 20-
//  let dizi = [0,1,2,3,4,5,6,7,8]
//  console.log(dizi[0]);
//  console.log(dizi[dizi.length-1]);
