//! 1- Sayıyı Sınıflandırma:
let sayi = 10
const sayiSinif= sayi>0 ? "Sayı pozitif" : sayi<0 ? "Sayı negatif" : "Sayı sıfır"
console.log(sayiSinif);
//! 2- Kredi Başvuru Durumu:
let kredi = 700
const basvuru= kredi>= 700 ? "Kredi onaylandı." : kredi>500 && kredi<=699 ? "Ek belgeler gerekli" : "Kredi Reddedildi"
console.log(basvuru);
//! 3- Sıcaklık Durumu:
let sicaklik= 26
let durum = sicaklik<0 ? "Donma Noktası altında" : sicaklik>=100 ? "Kaynama noktasında" : "Oda Sıcaklığında"
//! 4- Öğrenci Başarı Durumu:
let not=100
let basari= not>=90 ? "Harika" : not>=80 && not<=89 ? "İyi" : not>=70 && not<=79 ? "Orta" : "Kötü"
console.log(basari);
//! 5- Yaş Grubu:
let yas = 23
const kategori= yas<=12 ? "Çocuk" : yas>12 && yas<25 ? "Genç" : yas>=25 && yas<65 ? "Yetişkin" : "Yaşlı"
console.log(kategori);
//! 6- Bir Ürünün İndirim Durumu:
let fiyat = 40
let indirim = fiyat>=100 ? "20% İndirim" : fiyat>49 && fiyat<100 ? "10% İndirim" : "Şakire indirim yok!"
console.log(indirim);
//! 7- Bir Kullanıcının Üyelik Durumu:
let user = true
let stat = true
let message = üye=true ? "Üye Girişi Yapıldı" : "Misafir Girişi"
if (user === true) {
    if (stat === true){
        console.log("Kullanıcı Durumu Aktif");
    } else {
        console.log("Kullanıcı Durumu Pasif");
    }
}
//! 8- İki Değer Karşılaştırması:
let a = 14
let b = 10
let karsilastirma = a==b ? "İkisi de eşit" : a>b ? "Birinci Daha Büyük" : "İkinci Daha Büyük"
console.log(karsilastirma);
//! 9- Ders Seçimi:
let ders = 8
let zorluk = ders>=1 && ders<4 ? "Temel" : ders>=4 && ders<7 ? "Orta" : "İleri"
//! 10- Bölüm Seçimi
let notScale = 79
let bolum = notScale >= 80 ? "Mühendislik" : notScale>= 60 ? "İktisat" : "Sosyal Biliimler"
console.log(bolum);