//! (OOPS)
document.write("Object Oriented Programming | Nesneye Dayalı Programlama")

//* Object Literals
console.log("*** Object Literals ***");

const book1 = {
    title: "The Karamozov Brothers",
    author: "Dostoevski",
    year: "1886",
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    } // This içinde bulunulan object'i refere eder.
}
console.log(book1.getSummary());
//! Object nesnesinden miras yoluyla geldi. | inspect et. console'da object prototype'ında var | Object method'u
console.log(book1.hasOwnProperty("year")); //? true 
//? hasOwnProperty : Bu key ${book1} içerisinde var mı? dedik.


// JS'de primitive diller bulunuyor ve bunlar obje değildir.
// Pure OOP -> 100% Objelerden oluşturulan dillere denir. primitive içermez.
// Array, function, object -> OBJE

const book2 = {
    title: "The Lilly Of Valley",
    author: "Honere de Balzac",
    year: "1889",
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    } // This içinde bulunulan object'i refere eder.
}
console.log(book1);
console.log(book2.getSummary());

// JS kısmi oop'dir prototype based oop destekler. belleği efektik kullanmak için geliştirilmiştir. Alt verileri tutabildiği gibi, diğer verileride tutabilmek için alan tutar paylaşımlı alan(prototype alan)
// avantaj: JS browser'da çalışır. o yüzden bu mantıklı
// dezavantaj : güvenlik, bi globallik varsa oraya herkes erişebilir.

console.clear();