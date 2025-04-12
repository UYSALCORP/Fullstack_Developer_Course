"use strict"
console.log("Server")

// npm install dotenv
require("dotenv").config() //! env dosyasındaki verileri process env içine yükleriz.

const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"

console.log(PORT)
console.log(HOST)

/* ------------------------------ Server Kurma ------------------------------ */

const http = require("node:http") //? nodejs'in içerisinden http modulunu cagırdık.

const app = http.createServer((req,res)=>{ //! Piyasa standartı // Best Practice || App şeklinde isimlendirilir
    // if(req.url == "/"){
    //     res.end("<h1>Welcome FS18</h1>")
    // } else if (req.url == "/blogs"){
    //     res.end("<h1>Listelenen bloglar gelsin</h1>")
    // } else if (req.url == "/newBlog"){
    //     res.end("<h1>Yeni blog olustur</h1>")
    // }

    /* ------------------------------------ - ----------------------------------- */

    if(req.url == "/"){
        if(req.method == "GET"){ //! Default GET zaten
            res.end('<h1> Welcome to Homepage</h1>')
        }
        else if(req.method == "POST"){
            res.statusCode = 200
            res.statusMessage= "Post yaptin" // Mesaj döndürür ve ASLA türkçe karakter olmamali
            res.end("Cannot post method")
        }
        else if(req.method == "DELETE") {
            res.writeHead(405, "Silme yapamazsin", {
                "Content-Type" : "test/html", // Yanıtın içeriğinin html oldugunu belirtir.
                "another-header" : "another content", // Özel bir header alanı ekler.
                "another-header1" : "Canim istedi bir daha ekledim."
            })
            res.end("Bu methodu kullanamazsin")
        }
    }
    else if (req.url == "/list"){
        const obj = {
            "error": false,
            "message" : "this is list page"
        }
        res.end(JSON.stringify(obj))
    }
})
app.listen(PORT,()=>console.log(`Server running at : http://${HOST}:${PORT}`)) // Belirtilen host ve portta dinleyip çalıştır.