"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 * npm i express-async-errors
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
// TRY - CATCH:

app.get('/', (req, res) => {

    try {

        if (isNaN(req.params.id)) {

            // res.send('ID numara formatında olmalı.')
            throw new Error('ID numara formatında olmalı.')

        } else {

            res.send('ID doğru formatta.')

        }

    } catch (err) {

        // console.log(err)
        res.status(500).send({ message: 'Hata oluştu (try-catch)' })
        // res.sendStatus(500)

    }

})

/* ------------------------------------------------------- *

app.get('/', (req, res, next) => {

    try {

        if (isNaN(req.params.id)) {

            // res.send('ID numara formatında olmalı.')
            throw new Error('ID numara formatında olmalı.')

        } else {

            res.send('ID doğru formatta.')

        }

    } catch (err) {

        // console.log(err)
        // res.status(500).send({ message: 'Hata oluştu (try-catch)' })
        // res.sendStatus(500)

        //* Catch ile yakalanan hatayı next() parametresi ile errorHandler'a gönderebilirim.
        next(err)

    }

})

/* ------------------------------------------------------- *

app.get('/', (req, res) => {

    throw new Error('Hata oluştu.', { cause: 'Hatanın nedeni yok' })

})

/* ------------------------------------------------------- *
// ASYNC FUNCTIONS:

const asyncFunction = async () => {
    //* Hata vermesi muhtemel kodlar ayrı bir async func'a yazılır.
    throw new Error('ASYNC ERROR')
}

app.get('/async', async (req, res, next) => {

    // async fonksion hatasını errorHandler'a göndermek için catch(next) kullanılır.
    await asyncFunction().catch(next)

})

/* ------------------------------------------------------- */
// express-async-errors
// npm i express-async-errors

require('express-async-errors')

app.get('/async', async (req, res, next) => {
    // throw new Error('ASYNC ERROR')

    res.customErrorCode = 404
    throw new Error('PAGE NOT FOUND')
})

/* ------------------------------------------------------- */
// ERROR HANDLER:
//* ErrorHandler içinde 4 parametre olur. Hata yakalyan parametre 1. parametredir.


const errorHandler = (err, req, res, next) => {

    console.log('ErrorHandler worked.')

    const customErrorCode = res?.customErrorCode || 500

    res.status(customErrorCode).send({
        error: true,
        message: err.message, // Hata Mesajı
        // cause: err.cause, // Hata Nedeni
        // stack: err.stack // Hatanın sistem mesajı (Tüm detaylar)
    })

}

//* ErrorHandler aynı zamanda bir middleware'dir.
//* ErrorHandler en sonda çağrılır.
app.use(errorHandler)

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));