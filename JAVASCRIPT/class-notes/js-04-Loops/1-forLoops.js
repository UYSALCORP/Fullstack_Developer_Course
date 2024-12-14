//! FOR LOOP //
 // Başlangıç: Döngünün başlangıcında yapılacak işlem. Bu genellikle bir sayaç değişkeni tanımlar.
// Koşul: Döngünün çalışmaya devam etmesi için gereken koşuldur. Koşul sağlanmadığında döngü sona erer.
// Artış: Her döngü sonunda sayaç değişkeninin nasıl değişeceğini belirler.

// for (let i = 0; i<5; i++){
//     console.log(i);
// }

// ÖRN: 3 Kişinin notunu alan ve ortalamasını(herbirinin ve hepsinin) bulan programı yazın
// let sum=0;
// for (let t=1; t<=3; t++){
//     const no1= +prompt("1.Notu girin")
//     const no2= +prompt("2.Notu girin")
//     let ort= (no1+no2)/2
//     console.log(`${t}. Öğrencinin ortalaması: ${ort}`);
//     sum= sum+ort;
// }
// let genelOrt = sum/3;
// console.log(`Genel Ortalama :${genelOrt}`);

//! YAPMAMANIZ GEREKN DURUMLAR
// for (let i=1, i==50, i++){console.log(i);} Döngüye giremiyor i==50 yüzünden

//! Geriye doğru kullanılabilir.
for (let i=10; i>=0; i--){
    console.log(i);
}
console.clear();
//! BREAK VE CONTINUE
// break: Döngüyü tamamen durdurur ve döngüden çıkar.
// continue: Döngünün o adımını atlayarak bir sonraki adıma geçer.
//! if yapısı içinde continue ve break kullanılmaz! Continue ve break looplar için üretilmiştir.! Burada bir loop yapısı içinde(for) olduğu için kullanıyoruz!
for (let i=0; i<=10; i++){
    if(i%3){
        continue
    }
    if (i===6){
        break
    }
    console.log(i);
}