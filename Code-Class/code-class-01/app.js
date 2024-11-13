// 1- Conditional
// ÖRN: İki kenar uzunluğu verilen bir şeklin kare mi dikdörtgen mi olduğunu belirleyen bir fonksiyon yaz.
function kareMi(x, y) {
  // if (x === y){
  //     console.log("Kare");
  // }
  // else {
  //     console.log("Dikdörtgen");
  // }

  x == y ? console.log("Kare") : console.log("Dikdörtgen");
}
kareMi(6, 6);

// ÖRN: Sabah rutini temsil eden görevlerin her biri için tamamlanıp tamamlanmadığını soran bir program yaz. Eğer herhangi bir görev tamamlanmışsa "Sabah rutininizde eksikler var" yaz.
function rutin(a, b, c) {
  (a = true), (b = true), (c = true);

  (a == b) == c
    ? console.log("Sabah rutinini tamamlama başarıyla tamamlandı!")
    : console.log("Sabah rutininizde eksikler var.");
}
console.log(rutin("yuzYıkama", "disFırcalama", "Kahvaltı"));

// ÖRN: Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın
let username = "Uysal"
let password = 2419
let hak = 3;

// function logcheck() {
//   for (let i = 0; i <= hak; i++) {
//     if (username !== "Uysal" && password !== 2419) {
//       username = +prompt("Kullanıcı adı giriniz:");
//       password = +prompt("Şifre giriniz:");
//     } else {
//       console.log("Giriş Başarılı");
//       break;
//     }
//   }
// }
// logcheck()

const login = () => {
  while (hak > 0) {
    // let girilenUserName=prompt("Kullanıcı Adı Giriniz:")
    // let girilenPassword=prompt("Parola Giriniz:")
    if (girilenUserName===username && girilenPassword==password){
        return alert(`Hoşgeldiniz ${username}`)
    }
    else {
        hak--
        (hak>0)? alert(`Hatalı giriş yaptınız. Kalan hak ${hak}`) : alert("Hakkınız doldu.")  
    }
  }
}
login();

// Örn: Bir cümlenin içinde belirli bir hatfin kaç defa geçtiğini bulan bir fonksiyon yaz. Kullanıcı cümleyi ve harfi girdiğinde, bu harfin cümlede kaç kez geçtiğini dönder.

// let cumle = "Clarusway ile Javascript"
// let harf = "a"
// const say = (cumle, harf) => {
//     let sayac = 0
//     for (let i = 0; i < cumle.length; i++){
//         if (cumle[i] === harf) {
//             sayac++
//         }
//         return sayac
//     }
// }
// console.log(`${harf} harfi cümlede ${say(cumle, harf)} defa geçiyor.`);

const countLetter=(word,letter)=>{
    let counter=0;
    for (let i=0; i < word.length -1; i++){
        if (word[i]=== letter) counter++
    }
    return counter
}
console.log(countLetter("Merhaba", "a"))
// ------------------------------------------------
// return word.split("a")