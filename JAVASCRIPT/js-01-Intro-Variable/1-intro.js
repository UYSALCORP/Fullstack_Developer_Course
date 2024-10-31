console.log("We're inside of external file");
console.error("This is an error mesaage");
console.clear()

console.table([{name:"Uysal", age:23},
    {name:"Baran", age:20}
])
// Alert | Kullanıcıya bir popup uyarı mesajı verir. //
// alert("Sizi son kez uyarıyorum.")

// Document.Write() //
document.write("<h3>Bu şekilde sonucu gösterebilirsin.<h3>")

// Prompt Kullanımı | Kullanıcıdan bilgi almanı sağlar. //
let ad=prompt("Adınızı Girin:")
console.log(ad," Merhaba, nasılsın?")