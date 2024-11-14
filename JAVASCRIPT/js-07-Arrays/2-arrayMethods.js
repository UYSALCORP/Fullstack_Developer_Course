//! ARRAY METHODS | Immutables
const number = [3, 5, 2, "4", "bes", "dort", 3, 6, "bes", 54]

//! Includes
// Bir elemanın dizide bulunup bulunmadığını true veya false olarak döndürür.

console.log(number.includes(54));

const userList=["Uysal","PlatinAvcisi26","TrollNob","Frankenstein","KadınaEmirVer54","KitchenWench"]
// const guest = prompt("Kullanıcı adı giriniz:")

// userList.includes(guest) ? alert("Kayıtlı Kullanıcı Lütfen Giriş Yapın!") : alert("Lütfen Kayıt Olun!")

//! indexOf, lastIndexOf
//* indexOf : Bir array içinde aradığımız elemanı ilk gördüğü index numarasını dönderir.
console.log(number.indexOf("bes")); // İlk gördüğü "bes" elemanını aldı.
console.log(number.indexOf(54));
console.log(number.indexOf(34)); // Aradığı indexi bulamazsa -1 döndürür.

//* lastIndexOf: Sondan başlayarak ilk gördüğü index numarasını dönderir.
console.log(number.lastIndexOf("bes")); // Son gördüğü | Sondan ilk gördüğü "bes"

//! Join
//* Dizideki tüm elemanları belirtilen bir ayraç ile birleştirerek bir string dönderir.
const statement = ["Uysal","baba","kıyıya","asıldı"]
console.log(statement.join(" "));

//! Slice
// 2 parametre girilierek yapılır slice(start,end) (end dahil değil)
const colors = ["Red","White","Blue","Yellow"]
const newColors = colors.slice(2,4)
console.log(colors);
console.log(newColors);