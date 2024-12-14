// ! FONKSİYONLAR - CALLBACK
function deneme(a) // Argument 
{
    console.log(a);
}
deneme(54) // Parametre

//** Callback Function */
// Javascript'te callback fons, //? bir fonksiyonun başka bir fonksyona parametre olarak geçirilip argüman olarak gönderir, bu fonksiyonun daha sonra çağırılması prensibine dayanır.

function firstFunction(argü){
    console.log("First Function");
    argü(45)
}

function secondFunction(sayi){
    console.log("Second Function");
    console.log(sayi);
}

firstFunction(secondFunction)
// ----------------------------------------------------- //
function matematikIslemleri(sayi1,sayi2,islem){
    const sonuc=islem(sayi1,sayi2)
    console.log(sonuc);
}

function topla(a,b){
    return a+b
}

function cikar(a,b){
    return a-b
}


matematikIslemleri(23,56,cikar)