//! WHILE LOOP 
// Bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır.

let i=0;
while (i<=10){
    console.log(i);
    i++
}

// Kullanıcıya devam etmek ister misin? sorusu gibi soru ile
// Örn: Kullanıcı şifreyi bulana kadar sorsun
let password;
while(password!=="ammbraah"){
    password=prompt("Şifreyi Giriniz: ")
}