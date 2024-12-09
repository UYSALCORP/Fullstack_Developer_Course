//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.


//* Asenkron (1 seferlik çalışan) setTimeOut

// setTimeout(()=>{
//     console.log("Platin Avcısı 26");
// }, 3000) // 3 saniye sonra çalış. ms cinsinden çalışıyor

// console.log("KadınaEmirVer54");

// setTimeout(()=>{
//     console.log("Bro Şlo Keke Mic Var Mı Mic?");
// }, 2000) // 2 saniye sonra çalış

//! Çalışma Sırası: 26-29-23

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking (kod burada takılı kalmaz alttaki kodlarda çalışır)

let sayac = 0;
//interval'ı çalıştırmak.
const interval1 = setInterval(() => {
    console.log(++sayac);
    if (sayac==7){
        // İnterval'ı durdurmak için 
        clearInterval(interval1)
    }
}, 1000);

