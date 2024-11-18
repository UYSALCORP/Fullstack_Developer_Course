//! OBJECTS 
// Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için object kullanılır.
//? Objectlerde key-value (property-value) değerlerini içerir. Nesnenin özeliklerini belirtir
// Herhangi bir veriye erişim için property (key) adı kullanılır.

const ogrIsim = ["Yunus", "Baran", "Recep"]
const ogrSoyad = ["Uysal", "Mutlu", "Vatansever"]
console.log(`${ogrIsim[0]} ${ogrSoyad[0]}`);
// --------- Object
const ogr={ad:"Yunus Emre", soyad:"UYSAL"}
console.log(ogr);

//! OBJECT OLUSTURMA YONTEMLERI //
//* 3 Farklı yöntemle oluşturulabilr.
//? 1- Object() class'ından türetme
// new Object() şeklinde yazılır ve sonradan nesneye //! *özellikler* //atanır.

const car = new Object()
car.marka = "Dodge"
car.model = "Charger 1969"
car.horsePower = 180
console.log(car);

const car1 = new Object()
car1.marka = "Porsche"
car1.model = "Avendator 2014"
car1.horsePower = 340
console.log(car1);

//? 2- Constructor metodu ile Object oluşturma
//! OOP ( Objects Oriented Programming )

function personelList(id,ad,maas){
    this.id = id;
    this.ad = ad;
    this.maas = maas; 
}
const personel1 = new personelList(3, "Zeynep", 25000)
console.log(personel1);
const personel2 = new personelList(4, "Taner", 40000)
console.log(personel2);
//! Her nesne için ayrı bir kopya oluşturan metodlar, bellek kulanımını arttırabilir.

//? 3- Object Literal (Most usefull ve Recommended)
const icecek = {
    ad:"Çay",
    hazirlikSüresi:"Yarım Saat",
    tercihler:["açık","demli","paşa çayı"],
    mansei: "Rize"
}

// Boş Object
const house = {}
house.room = 3
house.heating = "Doğalgaz"
house.pool = true

// -----------
let personel = {
    name: "Göktuğ",
    lastName: "Savaş",
    birth: 2001,
    horoscope: "Gemini",
    isMarried: false,
    children: [false],
    address: { city:"Eskisehir", street:"Büyükdere",no:1},
    calculateAge: function(){
        console.log(this);
        return new Date().getFullYear()-this.birth
    },
    selamla:() => {
        return "Merhaba Dostlar"
    },
    //* Object içinde arrow function kullanılıyorsa this keyword'u window nesnesine karşılık gelir. Arrow function ortaya çıkma sebebi thislerden kurtulmaktı.
    arrowFunction:()=>{
        return personel.isMarried
    }
}
console.log(personel.calculateAge());
console.log(personel.arrowFunction());

/* OKUMA/ERİŞME */
//! Yöntem1- .(dot) notation
console.log(personel.name, personel.lastName);
//! Yöntem2- [] square brackets
console.log(personel["horoscope"]);
// Dinamik deperlere erişim için avantajlıdır
const keyWord = "birth"
console.log(personel[keyWord]);
console.clear();
// -----------------------------
//? Yeni bir özellik (Property) ekleme
personel.phone = "535-326-5434"
personel[keyWord] = 2000
console.log(personel);
// -----------------------------
//? Bir objeyi kopyalama
//! 1- Shallow Copy (sığ) Kopyalama
personel.name="Aybars"
const firmaPersoneli=personel
console.log(`Personel: ${personel.name}`);
console.log(`Firma Personel: ${firmaPersoneli.name}`);
//! 2- Deep Copy Yöntemi
// JSON.stringify(), JSON.parse() // Tam bir kopya oluşturur.
const deepCopyPersonel= JSON.parse(JSON.stringify(personel))
console.log(deepCopyPersonel);
deepCopyPersonel.name = "Göktuğ"
console.log(personel);
console.log(deepCopyPersonel);
//! 3- Object Assign
//! 4- Spread Operator