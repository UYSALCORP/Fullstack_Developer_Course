//* ==============================================
//*                  EVENTS
//* ===============================================
console.log("****** EVENTS *******")

// Selector's
const h2 = document.querySelector("h2")
const body = document.querySelector("body")
const myInput = document.getElementById("input")
const addBtn = document.getElementById("btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")

// Event Tanımlamaları
 //* mouse h2 elementinin üzerine gelince tetiklenir.
h2.onmouseover = function () {
    // h2.style.color = "red"
    h2.classList.add("red", "text-center")
}
 //* mouse h2 elementinin üzerindene ayrıldığında tetiklenir.
h2.onmouseout = () => {
    h2.classList.remove("red", "text-center")
}
 //* DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event.
body.onload = function() {
    myInput.focus()
}

addBtn.addEventListener("click", () => {
    // myInput.value = "UYSALCORP"
    myInput.focus()
    if (!myInput.value) {
        alert ("Lütfen inputu doldurun")
        return
    }

    const li = document.createElement("li")
    li.textContent = myInput.value
    ul.appendChild(li)
    myInput.value = ""
})

//? Form içerisindeki submit butonuna her basıldığında bu onSubmit event'i tetiklenir.
//? Submit eventi otomatik olarak enter tuşunun kullanımını sağlar.
// form.onsubmit = function (e) {
//     e.preventDefault()
// }

//? Bir div veya section olduğu durumlarda enter'ı kullanmak.
myInput.onkeydown = function(e) {
    // console.log(e.key);
    if (e.key === "Enter") {
        addBtn.click()
    }
}