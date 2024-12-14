//! ARROW FUNTIONS //
//Funct expression ve arrow func yontemlerinde
//Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
//Aksi takdirde hata alırsiniz.

const selamla=() => {
    console.log("Arrow functiondan Merhaba");
}
selamla()

//* Tek satırlık bir kod olacaksa {} ve return gerekmez
const naber=()=> console.log("Merhaba"); naber()
// -----------------------------------------------------
// Parametreli fonksiyon kullanımı
const topla=(a,b)=> document.write(a+b)
topla(26,54)

// Sayının 3e bölünüp bölünmediğini kontrol eden kod bloğu
const bol=(num)=> num%3===0 ? "3'e bölünür." : "3'e bölünmez." 
console.log(bol(55));

const uceBolum=(num)=>{
    let result
    if (num%3===0){
        result="3'e bölünür"
    }
    else{
        result="3'e bölünmez"
    }
    return result
}
console.log(uceBolum(45));

const add=(a,b)=> document.write(a+b)
const sub=(a,b)=> document.write(a-b)
const multp=(a,b)=> document.write(a*b)
const division=(a,b)=> document.write(a/b)
add(26,54)
sub(26,54)
multp(26,54)
division(26,54)

// ÖRN: Silindirin hacmini bulduran arrow functiion : Pi r kare * h
let r = 5
let h = 10
const silindir=()=> (Math.PI * Math.pow(r,2) *h )
console.log(silindir()); 

//* Verilen sayıya kadar olan asıl sayılar bulma 
const asal=(num)=>{
    if (num<2){
        console.log("Bu değere kadar asal sayı yok!");
    }
    for (let i=2; i<num; i++){
        if(i===2){
            console.log(i);
        }
        else{
            let asal = true;
            for(let j=2; j<num; j++){
                if(i % j===0){
                    asal = false;
                    break;
                }
            }
            entry ? console.log(i) : ""
        }
    }
}
asal(15);