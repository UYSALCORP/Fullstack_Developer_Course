//! OOP - Classes and Inheritance (ES6)

//* Classes'lar, object(nesne) oluşturmak için kullanılan şablonlardır.
//* JS'de Class'lar prototipler uzerine inşa edilmiştir. Ancak, syntax ES5'den farklıdır. aslında, class keyword'u ilk olarak ES6 da kullanılmıştır.
//* Ancak bu sadece bir syntatical sugar'dır.
//* Js, class-tabanlı bir dil değil, prototype-tabanlı bir dildir.
//* Yaygın kullanım class-tabanlı olduğu için syntax'ı benzetilmiştir.

//? Bir parent class'ın degisken ve fonksiyonelliği extend keyword'u ile child class'a geçmektedir. ( INHERITANCE )

console.log("*** ES6 - Classes ***");

class Book{
    constructor(title, author, year){
        this.title = title // Bu classtaki title'a parametreden gelen title ata
        this.author = author
        this.year = year
        // Bu alanda yazılan metotlar instanceların belleginde tek tek yer kaplar.
    }
    //! Bu kısımda yazılan fonks. aslında prototype alanında bulunur.
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge(){
        return `${new Date().getFullYear()- this.year}`
    }
}

//! Book kalıbından yeni bir örnek (instance) oluşturduk!
const book1 = new Book("Kaşağı", "Ömer Seyfettin", "1919")
console.log(book1);

//? instance
const book2 = new Book ("Simyacı", "Paulo Coelho", 1990)
console.log(book2.getSummary());
console.log(book2.getAge());


//! Sub-class Tanımlaması (Inheritance ES6)

class Magazine extends Book {
    constructor(title, author, year, month){
        //! Book'un constructor'ı çağırıldı.
        super(title,author,year) //! Book'un prototype'ı da kopyalandı!
        this.month = month
    }
}

const mag1 = new Magazine("SRE", "Einstein", 1930, "November")
console.log(mag1);
console.log(mag1.getAge());
console.log(mag1.getSummary());

//? REACT'TA HOOKLAR(2019) ÇIKTIKTAN SONRA CLASS YAPISI KULLANILIMI BIRAKILMAYA BAŞLANDI.