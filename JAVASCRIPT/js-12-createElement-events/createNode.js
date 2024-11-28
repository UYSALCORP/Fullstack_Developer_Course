console.log("**** CREATE NODE ****")

//? Yeni bir Element oluştur
const newLi = document.createElement("li") // İçi
//? Text dugumunu oluştur.
const textLi = document.createTextNode("Node.js") // Dışı
//? Olusturulan text dugumu yeni elemente bağla (append)
newLi.appendChild(textLi) // İçini dışa bağladık
console.log(newLi);

//? Yeni olusa elementi DOM Tree'ye ekle.
document.querySelector("ul").appendChild(newLi)

//* 2. Bir li oluşturalım.
const newLi2 = document.createElement("li")
newLi2.textContent = "C++"
const react = document.querySelector("ul li:nth-child(4)")
console.log(react);
// react.appendChild(newLi2) // React'ın sonuna ekledik.
//? Element.before() veya element.after() ile bir elementi istediğimiz elementin onune veya arkasına ekleyebiliriz.
react.after(newLi, newLi2) //  React sonrasına ekledik.

document.querySelector("ul li:nth-child(5)").after("Express.js")

//! ID, CLASS GİBİ ÖZELLİKLERİ ATAMA
//? 1- Element.attribute = "yeni deger"
//* Yazma
newLi.className = "list red"
newLi.id = "new-li"
newLi.title = "Hello bro şlo keke"
//* Okuma
console.log(newLi.className);

//? 2- setAttribute(atr, "deger"), getAttribute("")
newLi2.setAttribute("class", "list border border-danger border-3") // Bootstrap de kullanabiliyoruz.
newLi2.setAttribute("id", "new-li2")

console.log(newLi2.getAttribute("id"));