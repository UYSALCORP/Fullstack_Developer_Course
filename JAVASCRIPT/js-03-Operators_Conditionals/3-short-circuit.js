/* -------------------------------------------------------------------------- */
//!                    SHORT CIRCUIT                              */
/* -------------------------------------------------------------------------- */
// JavaScript’te || (veya) ve && (ve) operatörleri, ifadeleri değerlendirirken “kısa devre” yaparak çalışır. Bu, ifadelerin doğruluğunu ya da yanlışlığını kontrol ederek sonuca erken ulaşmalarını sağlar. Böylece, gerekli olmadıkça diğer ifadeleri incelemezler.

// Short-Circuit Operatörleri Nasıl Çalışır?

// OR (||) Operatörü: İlk doğru (truthy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade yanlış (falsy) ise, bir sonrakine geçer.

// AND (&&) Operatörü: İlk yanlış (falsy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade doğru (truthy) ise, bir sonrakine geçer.

//! AND Operatoru

let yas=10;
let kontrol= yas>=18 && "Oy kullanabilir";
console.log(kontrol)

// kullanıcı giriş yaptıysa ve premium üyeliği varsa premium üyemiz hoş geldiniz yazsın
let isLoggedIn=true;
let isPremium=true;
let message=isLoggedIn && isPremium && "Premium kullanıcımız hoşgeldiniz";
console.log(message)

//
let isStock=false;
let bakiye=150;
let fiyat=100;
let messageSale=isStock && bakiye>fiyat && "Satın alma gerçekleşebilir"

//! OR Operatörü

let SevilenRenk=null;
let VarsayılanRenk="mavi"
let color= SevilenRenk || VarsayılanRenk;
console.log(color)

/* ----------------------------------------------------------------- */
let admin=""
let guest=""
let premium=false;
let message1=admin || guest || premium || "rol tanımlı değil";
console.log(message1)