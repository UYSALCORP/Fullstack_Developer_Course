"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

// Morgan | Logger:
// npm install morgan 
const morgan = require("morgan");
// app.use(morgan("tiny")) // default running is console.log()
// app.use(morgan("short")) 
// app.use(morgan("dev")) 
// app.use(morgan("common")) 

// Custom Log:
// app.use(morgan(" TIME=':date[iso]' - URL=':url' - METHOD=':method' - IP=':remote-addr' - STATUS=':status' - SIGN=':user-agent' - (:response-time[digist] ms)"))

const customLog = " TIME=':date[iso]' - URL=':url' - METHOD=':method' - IP=':remote-addr' - STATUS=':status' - SIGN=':user-agent' - (:response-time[digist] ms)"

const fs = require("node:fs");
const now = new Date();
const today = now.toISOString().split("T")[0]
// console.log(today)

module.exports = (morgan(customLog, {
    stream: fs.createWriteStream(`./logs/${today}.log`, {flags:"a+"})
} ))
