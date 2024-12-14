// Kodlar buraya yazılacak.

//! HEADER
const header = document.querySelector("header")
header.style.backgroundColor = "orangered"
header.style.color = "white"
header.style.padding = "16px"
header.style.textAlign = "center"
//! TITLE
document.getElementById("title").textContent = "Javascript Dom Assignment 1"
//! NAV-ITEM
const nav = document.querySelector(".nav-item")
nav.style.display = "flex"
nav.style.justifyContent = "center"
nav.style.alignItems = "center"
nav.style.gap = "1rem"
nav.style.listStyle = "none"
//! USERNAME
const username = document.querySelector("#username")
username.value = "Anthony"
username.disabled = true
//! PASSWORD
const password = document.querySelector("#password")
password.value = "123456"
password.type = "text"
password.disabled = true
//! BUTTON
const myBtn = document.querySelector(".btn")
myBtn.style.backgroundColor = "blue"
myBtn.style.color = "yellow"
myBtn.style.padding = "10px 20px"
myBtn.style.borderRadius = "5px"
myBtn.style.cursor = "pointer"
myBtn.style.border = "none"
myBtn.textContent = "Giriş Yap"
//! PROJECTS
//* 1. Yol | Basit olan
// const docs = document.querySelector("#projects h3")
// docs.textContent = "Js Dom Projects"

//* 2. Yol | Zahmetli olan first child yolu
const projectJs = document.getElementById("projects")
const firstChild = projectJs.firstElementChild
firstChild.textContent = "Js Dom Projects"

//! UL
//* 1. Yöntem | forEach yapısı ile
const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];
const lastChild = projectJs.lastElementChild
myProjects.forEach(project => {
    lastChild.innerHTML += `<li>${project}</li>`
})
//* 2. Yöntem | createElement ve appendChild
// myProjects.forEach(project => {
//     const li = document.createElement("li")
//     li.textContent = project
//     lastChild.appendChild(li)
// })
