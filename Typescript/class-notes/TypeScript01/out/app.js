"use strict";
let topla = 23 + 45;
const toplam = (a, b) => a + b;
console.log(toplam(54, 26));
let b = 5;
b = "Hello";
let c = 45;
console.log(typeof c);
c = "Hello";
console.log(typeof c);
let CodeList = [26, 54, 34];
console.log(CodeList);
CodeList.push("Ali");
let serialList = [34, 34, 34];
console.log(serialList);
let tuple1;
tuple1 = [34, "Yunus", "Uysal"];
console.log(tuple1);
let sinif;
sinif = [[26, "Uysal"], [35, "Uysal"]];
console.log(sinif);
let car = ["BMW", 2023];
let [brand, model] = car;
console.log(brand);
let settings = ["Dark Mode", 1];
settings = ["Light Mode", 2];
settings[0] = "Normal Mode";
console.log(settings);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["black"] = 3] = "black";
})(Color || (Color = {}));
let selectedColor = Color.Red;
console.log(selectedColor);
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
console.log("Role User", Role.User);
let h = 45;
h = "Merhaba";
let veri;
veri = "Nasılsın";
console.log(typeof veri);
if (typeof veri == "string") {
    console.log(veri.toLowerCase());
}
console.log(veri.length);
function selamla(isim) {
    console.log(`Merhaba ${isim}`);
}
selamla("Uysal");
let a = 26;
let s;
s = 45;
s = "Merhaba";
let kullaniciAdi = "Uysal";
let sifre = "Merhaba";
let myPet = "Dog";
