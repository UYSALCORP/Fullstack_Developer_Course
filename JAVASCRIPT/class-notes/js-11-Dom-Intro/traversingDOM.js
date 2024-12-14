console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const h2 = document.getElementById("add-new-item")
console.log(h2);
console.log(h2.parentNode.parentNode.parentNode.parentNode.parentNode); // En üst parent'a kadar gittik. | Document 
console.log(h2.parentElement.parentElement.parentElement.parentElement); // En üst parent, HTML'e kadar gelebiliyor. Document'a kadar çıkamaz.

//? Bulunduğumuz yer.
const htmlLi = document.querySelector("ul li:nth-child(1)")
console.log(htmlLi);
console.log(htmlLi.parentNode.parentNode.parentNode);
//! Closest() metodu. Girdiğiniz parametreyi bulduğunda yazdırır. Parent'e doğru
console.log(htmlLi.closest("section.item-list"));

console.log(htmlLi.closest("main").querySelector("section.add-item"));

                                console.clear();
//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild
const section = document.querySelector("section.add-item")
console.log(section);
console.log(section.firstElementChild); // h2 Tamamını almış oldu.
console.log(section.firstChild); // text Kısmını aldı // Kullanma knk

console.log(section.lastElementChild); // Butona gitti.
console.log(section.children); // HTMLCollection döner. bütün childları döndürür.

//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling

console.log(htmlLi.nextElementSibling.innerHTML); // HTML'den sonraki CSS
console.log(htmlLi.nextElementSibling.nextElementSibling.innerHTML); // HTML'den sonraki CSS'den sonraki Javascript
console.log(htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText); // 2 ileri gittim 1 geri geldim. HTML > CSS > Javascript < CSS 
