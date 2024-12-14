//! DO WHILE | DONGULER
    let i=1
    do {
        console.log(i);
        i++ 
    } while(i<=10)

// Kullanıcıdan vize ve final notları alıp bunları hesaplayın
let devam =""
do{
    let ders=prompt("Dersin adını giriniz:")
    let vize=+prompt("Vize notunu giriniz:")
    let final=+prompt("Final notunu giriniz:")
    let ort = vize*0.4 + final*0.6
    let sonuc=final<50 ? `${ders} dersinden ${final} notu yeterli olmadığı için kaldınız` :
    ort>=50 ? `${ders} dersinden ${ort} ile geçtiniz` : `${ders} dersinden ${ort} ile kaldınız.`
    console.log(sonuc);
    devam=prompt("Devam etmek istiyorsanız E tuşuna ba-sın")
}while(devam === "E") {

}