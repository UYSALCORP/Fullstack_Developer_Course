"use strict"

console.log("Hello fs18")

require("./modules/module") //! Require = import | Başka bir js dosyasını içeri aktarmak için kullanılır.

// const testFunc = require("./modules/module")
// testFunc() //! Tek fonksiyon import

/* ------------------------------------ - ----------------------------------- */
// const {uysalBurc:dogumGunu, ezgiBurc} = require("./modules/module");
// // uysalBurc()
// ezgiBurc()
// dogumGunu()
/* ------------------------------------ - ----------------------------------- */
// const {tekRakam, ciftRakam} = require("./modules/module")
// tekRakam(), ciftRakam()

/* ------------------- Bizim kullanacağımız import yöntemi ------------------ */
const {test1, test2, test3, deger} = require("./modules/module")
test1(), test2(), test3()
console.log(deger)