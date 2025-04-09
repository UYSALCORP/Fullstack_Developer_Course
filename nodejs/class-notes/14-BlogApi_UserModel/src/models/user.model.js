"use strict";

const mongoose = require("mongoose");

// Password Encryption:
// https://nodejs.org/docs/latest/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require("node:crypto");

const passwordEncrypte = (password) => {
    // Salt: methoda vereceğimiz anahtar şifre
    const salt = "asdfasdasd21378asdgfas9754"
    // Iteration: şifreleme mekanizmasını kaç kere yapacak?
    const iteration = 10000;
    // Keylen: kaç karakter uzunluğunda olacak
    const keylen = 32; // write 32 for 64
    // Digest: Hangi algoritmayı kullanacak
    // Desteklenen en bilindik digestler: sha256, sha384 ve sha512
    const digest = "sha512";
    // Buffer veri şeklinde değil de string şeklinde çalıştırması için toString, istediğim şekilde tutabilmesi içinde hexadecimal şeklinde tutması için "hex"
    return crypto.pbkdf2Sync(password,salt,iteration,keylen,digest).toString("hex")
}
// console.log(passwordEncrypte("test"))

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email field is required!"],
        unique: [true, "This email address is already in use."],
        trim: true,
        //* How validate works?
        // validate: (email)=> { return false }

        //* Throw validation error
        //? 1-
        // validate: (email)=> {
        //     if(email.includes("@") && email.includes(".")){
        //         return true
        //     }
        //     throw new Error("Invalid email address!")
        // }
        
        //? 2-
        validate: [(email)=> {
            return (email.includes("@" && email.includes(".")))
        }, "Invalid email address"]
    },
    password: {
        type: String,
        required: [true, "Password field is required!"],
        trim: true,
        // How set works ? 
        // set:()=>{return "clarusway"}

        //* Using Crypto module in set method
        // set:(pass)=>{return passwordEncrypte(pass)}

        set: passwordEncrypte
    },
    firstName: String,
    lastName: String
},{
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema);