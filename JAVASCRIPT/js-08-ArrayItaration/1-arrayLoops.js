//! FOR LOOP
console.log("**** LOOPS IN ARRAYS ***");
//? ÖRN:
const maaslar = [5000,4000,7000,9000]
sum=0;
for (let i=0; i<maaslar.length; i++){
    sum += maaslar[i]
}
console.log(`SUM ${sum}`);
// -------------------------------------------------------- //
//? ÖRN:
//* Notlar dizisindeki notların 50'den küçük olanları ve büyük olanları 2 ayrı diziye kaydedin
const notlar = [50,45,26,67,75]
// const ellidenKucukler = []
// const ellidenBuyukler = []
// for (let i=0; i<notlar.length; i++){
//     notlar[i]<50 ? ellidenKucukler.push(notlar[i]) : ellidenBuyukler.push(notlar[i])
// }
// console.log(ellidenBuyukler);
// console.log(ellidenKucukler);
// ------------------------------------------------------------ //
//! FOR IN
// for in, bir nesnenin ya da dizinin özelliklerini veya indislerini döngüyle döner
// Bir string üzerinde çalıştığında her karakterin indisini döner.
const ellidenKucukler=[]
const ellidenBuyukler=[]
for (let i in notlar) {
    console.log(notlar[i]);
    notlar[i]<50 ? ellidenKucukler.push(notlar[i]) : ellidenBuyukler.push(notlar[i]);
}
console.log(ellidenBuyukler);
console.log(ellidenKucukler);
// -------------------------------------------------------------------
//? ÖRN: Maas ortalaması bulalım
const salaries = [12000,9000,15000,44000]
let toplam=0;
for(let i in salaries){
    toplam+= salaries[i]
}
console.log(toplam);
const ortalama =toplam/salaries.length
console.log(ortalama);

//! FOR OF
//* for of dongusu, for in dongusunun bir çok veri yapısını kapsayacak sekilde güncellenmiş halidir.
// Bu döngüde dizi içindeki veriye erişirken indisleme kullanmaya gerek yoktur.

const sayilar=[54,26,34,53,55]
for (let i of sayilar){
    console.log(i);
}