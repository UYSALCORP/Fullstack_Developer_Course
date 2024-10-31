//! 1- Determinite Username
let userName =  prompt("Kullanıcı adı giriniz:") ;
let Name = userName || "Misafir"
console.log(`Merhaba, ${Name}!`);

//! 2- Show Product Price
console.log("2-Show Product Price");
let indirimliFiyat = 100;
let kampanyaFiyat = 200;
let normalFiyat = 300;
let fiyat = indirimliFiyat || kampanyaFiyat || normalFiyat || "Fiyat Yok"
console.log(fiyat);

//! 3- Contact information preferences
let tel = "";
let mail = "";
let message = tel || mail || "İletişim bilgisi eksik";
console.log(message);

//! 4- Home Address
let evAdres = "";
let isAdres = "";
let postaKutusu = "";
let mesaj = evAdres || isAdres || postaKutusu || "Adres Bilgileri Eksik"
console.log(mesaj);

//! 5- Determining Default Language
let kullaniciDil = "";
let tarayiciDil = "";
let varsayilanDil = "";
let mesaj1 = kullaniciDil || tarayiciDil || varsayilanDil || "Dil seçilmedi."
console.log(mesaj1)
//! 6- Showing profile photo
let profilFotograf = "";
let varsayilanAvatar = "";
let defaultImage = "";
let mesaj3 = profilFotograf || varsayilanAvatar || defaultImage || " Resim yok."
console.log(mesaj3);
//! 7- Username Information
let Ad = "";
let soyad = "";
let takmaAd = "";
let mesaj4 = Ad || soyad || takmaAd || " Anonim."
console.log(mesaj4);
//! 8- Show Age Information
let yas = "";
let dogumYili = "";
let tahminiYas = "";
let mesaj5 = yas || dogumYili || tahminiYas || " Yaş bilinmiyor."
console.log(mesaj5);
//! 9- Determineting Gaming Score?
let anaSkor = "";
let yedekSkor = "";
let varsayilanSkor = "";
let mesaj6 = anaSkor || yedekSkor || varsayilanSkor || "  Skor Yok."
console.log(mesaj6);

//! 10- && First | Determinete username
let kullaniciAdi = "Uysalcorp"
let sifre = ""
let mesaj2 = kullaniciAdi && sifre && "Giriş Yapıldı." || "Giriş Bilgileri Eksik"
console.log(mesaj2);

//! 11- Order completion status
let odemeYapildi = false;
let urunHazir = true;
let siparis = odemeYapildi && urunHazir && "Siparişiniz Hazır." || "Sipariş Beklemede"
console.log(siparis);

//! 12- Discount
let indirimKoduGirildi = "true";
let urunSepette = true;
let message1 = indirimKoduGirildi && urunSepette && "İndirim uygulandı." || "İndirim uygulanmaz."
console.log(message1);

//! 15- Profile
let profilePhoto = prompt("Bir profil fotoğrafı yükleyiniz: ")
let hakkindaBilgisi = prompt("Kendi hakkınızda bir şeyler yazınız: ")
if(profilePhoto && hakkindaBilgisi){
    console.log("Profil tamamlandı!");
} else if(!profilePhoto) {
    console.log("Profil fotoğrafı yükleyin!");
}
else {
    console.log("Hakkında bilgisi Eksik");
}

//! 16- Sharing post
let baslik = true
let icerik = true
function SharePost() {
if (baslik && icerik) {
    return "Gönderiyi Paylaş"
} else {
    return "Gönderi Eksik"
}
}