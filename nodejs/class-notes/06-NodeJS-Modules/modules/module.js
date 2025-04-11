"use strict"
console.log("Module çalışıyor.")

/* ---------------------- Tek fonksiyon export etme --------------------- */
// const testFunc = function(){
//     console.log("This is a function")
// }
// module.exports = testFunc

/* -------------- Birden fazla değer veya fonksiyon export etme ------------- */
// const uysal = 25.08
// const dogumGunu= function(){
//     console.log("Uysal baba başak burcudur")
// }
// const dogumGunu2= function(){
//     console.log("Ezgi Su terazi burcudur")
// }
// module.exports = {
//     uysalBurc: dogumGunu,
//     ezgiBurc: dogumGunu2
// }

/* -------------------------- Array olarak gönderme ------------------------- */
// const tekRakam = function(){
//     console.log("1,3,5,7,9")
// }
// const ciftRakam= function(){
//     console.log("2,4,6,8")
// }
// module.exports = {tekRakam,ciftRakam};