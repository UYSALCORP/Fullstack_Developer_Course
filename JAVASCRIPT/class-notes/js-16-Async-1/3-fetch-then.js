//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//!throw ile hata fırlatırsak kodumuz o satırda durur. kodumuzu durdurmak istemezsek diğer sayfadaki kodları kullanırız

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

//! Chain Yapısı : Zincir, then
// fetch("https://api.github.com/users").then((res)=> res.json().then((data)=>console.log(data)))

fetch("https://api.github.com/users")
 .then((res) => {
    if (res.ok==false){
        throw new Error("URL'de Hata Var!")
    }
    return res.json()
 })
 .then((data) => ekranaBastir(data)).catch((error)=>console.log(error))

const ekranaBastir = (veri) => {
    // console.log(veri);

    veri.forEach(({login, avatar_url, node_id}) => {
        document.querySelector(".users").innerHTML += `
            <h1>${login}</h1>
            <img src=${avatar_url} width="300px">
            <h3>${node_id}</h3>
        `
    });
}