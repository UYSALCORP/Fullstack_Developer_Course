console.log("***** SELECTORS *****");

document.title = "Document Object Model"
//*===========================================
//*            GETELEMENTBYID()
//*===========================================
console.log(document.getElementById("add-new-item"));
const headerText = document.getElementById("add-new-item")
document.getElementById("add-new-item").style.color = "blue"
//! Bir değişkene atadıktan sonra direkt onu çağırarak yapabiliriz.
headerText.style.backgroundColor = "yellow"
//! NOT: Property'ler de kebap-case değil camelCase notasyonu kullanılır.

// headerText.style = "font-family: tahoma; font-size: 40px" //? CSS vari erişim. Bindirmeli değil son yazılan geçerli olacağı için böyle yazarsak eğer daha önceki yaptığımız style değişikliklerini geçersiz kılar. Ayriyetten burada yazdığımız style kodları inline-styling olarak döner.

const addBtn = document.getElementById("btn")
addBtn.style.borderColor = "red"

//? HTML Elementlerinin içeriklerini okuma ve değiştirme.
const htmlLi = document.getElementById("html-li")
console.log(htmlLi);
htmlLi.style.backgroundColor = "bisque"

//! textContent, innerText, innerHTML ile text element'in attribute'ları değiştirilebilir.
console.log(htmlLi.textContent);
htmlLi.textContent = "HTML5" // HTML - HTML5 OLARAK DEĞİŞTİRDİK.
console.log(htmlLi.innerText);
htmlLi.innerText = "HTML5 DOM" // HTML5 - HTML5 DOM olarak değiştirdik.
const jsLi = document.getElementById("js-li")
jsLi.innerText = "Javascript" // JS - Javascript olarak değiştirdik.
//! innerHTML -> Direkt tag de oluşturabilir. Xxs Attack'a kapı açar. Endüstriyel uygulamalarda asla kullanılmaz.
document.getElementById("react-li").innerHTML = "<h5>React.js</h5>" // React - React.js olarak değiştirdik.

//! Inputların deperinin okunması/yazılması
const myInput = document.getElementById("input")
console.log(myInput.value);
// myInput.addEventListener("input", (e)=>{console.log(e.target.value);})
addBtn.value = "Submit"
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ==========================================
//*              QUERYSELECTOR()
//* ==========================================

//* ==========================================
//*              QUERYSELECTORALL()
//* ==========================================
