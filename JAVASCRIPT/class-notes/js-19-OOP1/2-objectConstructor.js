//! OOP - Object Constructor (ES5)
console.log(" *** Object Constructor *** ");
//* JS, Prototype temelli bir dildir.
//* Bütün js nesneleri (objects) özellikler (properties) ve metotları bir prototipten miras olarak almaktadır.
//* Object prototype'ı, prototip miras zincirinin en tepesinde yer almaktadır.
//* ORN: Date ve Array nesneleri Object.prototype'dan miras alınır.

//! Object Constructor

function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    //! getSummary'ı aldım ortak alan (prototype) içine taşıdım
    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }
}

//! Yukarıda yazdık çünkü aşağıda yazarsak instance'larımızda bu fonksiyonu kullanamayız. Error verir. // Başta aşağı yazdık sonra yukarı taşıdık. //
Book.prototype.getSummary = function () {
   return `${this.title} was written by ${this.author} in ${this.year}`
}
//? Artık bütün instance'lar getSummary() fonk. miras alabilir ancak, getSummary() fonk. bellekte sadece bir yer kaplar.

//! Book kalıbından yeni bir örnek (instance) oluşturduk!
const book1 = new Book("Kaşağı", "Ömer Seyfettin", "1919")
console.log(book1);
//? instance
const book2 = new Book ("Simyacı", "Paulo Coelho", 1990)
console.log(book2.getSummary());

//! Nesne prototiplerine .prototype ile instance'in prototipine .__proto__ ile erişilebilir.
console.log(Book.prototype); //* Parent'ta (ebeveyn) prototype görmek için
console.log(book1.__proto__); //* Child'da prototype görmek için


// book1.price = 250 // Heap'ten objeye eriştik ve yeni bir key valuesi ekledik. | Kalıba dahil değil.
Book.prototype.price = 0 // Kalıba dahil
book1.price = 200
book2.price = 300
console.log(book1, book2);

//! Inheritance ( Kalıtım - ES5 )

//* Sub-Class
function Magazine(title, author, year, month){
    // Book'u kalıtım yoluyla çağırdık
    Book.call(this, title, author, year)
    this.month = month;
}
//* Prototype'ı inherit ettik. | Sığ Kopyalama | Tercih edilebilir değil.
// Magazine.prototype = Book.prototype
//! Prototipleri miras almak için Object.create() methodu kullanılabilir.
Magazine.prototype = Object.create(Book.prototype)

const mag1 = new Magazine("SRE", "Einstein", 1930, "November")
console.log(mag1);
console.log(mag1.getSummary()); // Prototype'ı inherit almıyor biz veriyoruz