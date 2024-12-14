//1-Öncelikle bilgisayar bir sayı tutsun
const rastgeleSayi = Math.ceil(Math.random() * 18 + 1);
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".msg");
const body = document.querySelector("body");
const life = document.querySelector(".life");
console.log("rastgeleSayi:", rastgeleSayi);

let hak = 10;
let topScore = 0;

//! 2- Check butonuna basılınca olacaklar - check tetiklenmeli
// check.onclick=()=>{}
check.addEventListener("click", () => {
  const tahmin = guess.value;

  //! Tahminde kaç durum çıkar
  //? 1-Bir değer girmediyse checke basmasın
  //? 2-Alt üst sınırı kontrol et
  //? 3-Tahminin doğru oluşu
  //? 4-Tahmini yanlışsa arttır azalt kontrolü
  //? 5-Hak bitebilir

  //? 1-Bir değer girmediyse checke basmasın-Bo boş basılsını engelleme :)
  if (!tahmin) {
    // tahminin içi doluysa true  - !tahmin : tahminin false olması yani içinin boş yada null,undefined
    message.textContent = "Lütfen bir tahmin giriniz";
  }
  //? 2-Alt üst sınırı kontrol et
  else if (tahmin < 0 || tahmin > 20) {
    message.textContent = "1-20 arasında bir değer giriniz";
  }
  //? 3-Tahminin doğru oluşu
  else if (tahmin == rastgeleSayi) {
    message.textContent = "🌻Tebrikler Bildiniz...🌻";
    body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;
    check.disabled = true;
    // return
    if (hak > topScore) {
      topScore = hak;
      document.querySelector(".topScore").textContent = topScore;
    }
  }
  //? 4-Tahmini yanlışsa arttır azalt kontrolü
  else {
    if (hak > 1) {
      hak--;
      life.textContent = hak;

      tahmin > rastgeleSayi
        ? (message.textContent = "Azalt")
        : (message.textContent = "Arttır");
    }
    else{
        body.style.backgroundColor="red"
        message.textContent="Oyunu Kaybetiniz"
        check.disabled=true
        life.textContent=0
    }
  }
});


again.addEventListener("click",()=>{
    const rastgeleSayi = Math.ceil(Math.random() * 18 + 1);
    message.textContent="Oyun yeni oyuncu için hazırlanıyor."
    body.style.backgroundColor="#2d3436";
    document.querySelector(".number").textContent="?";
    check.disabled=false;
    life.textContent=10
    hak=10
    guess.value=""

})