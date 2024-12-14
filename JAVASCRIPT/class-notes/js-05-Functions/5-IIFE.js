//!     IIFE FUNCTIONS
//* Immedilately Invoked Function Expression (IIFE) ani "Hemen Çağırılan Fonksiyon İfadesi"
const main = "Uysal"
const topla=()=>{
    console.log("toplam", 54+26);
}
topla(); // invoke - call

(function(){
    console.log(`Merhaba`, main);
})();

//* Parametre ile kullanımı

(function(name){
    console.log(`Merhaba`, name);
})("Yunus");

// Örn: 1.Gönderilen taban, 2.gönderilen üs olacak şekilde verilen sayının kuvvetini bulan kod bloğu

(function(a, b){
    console.log(Math.pow(a, b));
})(4,2);

// Değişken Kapsülleme

const veri = (function(){
    const sifre="12345"
    return {
        sifreGoster:function(){
            return sifre;
        }
    }
})()
console.log(veri.sifreGoster());

// Kapsülleme Faydaları; Güvenlik, Veri Gizliliği, Kontrollü Erişim