document.write("*** NEW GEN OPERATORS ***");
//! DESTRUCTURING (OBJECT)
const product = {
  id: "3419",
  brand: "Apple",
  type: "Smart Phone",
  price: 30000,
};
const product1 = {
  id: "2419",
  brand: "Monster",
  type: "Abra A7",
  price: 30000,
};

//? . Notasyonu ile erişim mümkün
console.log(product.price);
console.log(product.brand);

//? Yeni değişken'e atama
let proPrice = product.price;
console.log(proPrice);
proPrice += 5000;
console.log(proPrice);
// Bunlar rem'de heap'de tutulduğu için normal product objesi değişmez

//? Square Bracket
console.log(product["id"]);

//* DESTRUCTING Yöntemi
// Değişken isimleri objedeki keylerle aynı olmalıdır

let { id, brand, type, price } = product;
console.log("ID", id);
console.log("Brand", brand);
console.log("Price", price);
// Burada aslında stack'te yeni bir alan açarak bizim varolan değişkenlerimizi yeni bir değişkene atıyor.
const { id: proID, brand: proBrand, type: proType } = product1;
console.log(proID, proBrand, proType);

const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};
//* LEVEL 1 | DESTRUCTING
const { kisi1, kisi2 } = insanlar;
console.log(kisi1.meslek, kisi2.meslek);

//* LEVEL 2 |
const { adi, meslek } = kisi1;
console.log(adi);
let { adi: kisi2Ad, maas } = kisi2; // Ayni değişkene atayamayacağımız için burada kisi2Ad dedik.
console.log(kisi2Ad);
//* İKİ SEVİYELİ DESTRUCTING
const {
  kisi1: { adi: kisi1Adi, soyadi },
  kisi2: { adi: kisi2Adi, soyadi: kisi2Soyadi },
} = insanlar;
console.log(kisi2Soyadi);

//* EXAMPLE
//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
team.forEach((person) => {
  console.log("Name:", person.name); // ForEach kullanımı ile objemizdeki name'leri aldık.
  console.log("Surname:", person.surname); // ForEach kullanımı ile objemizdeki name'leri aldık.
  console.log("Job:", person.job);
}); // ForEach kullanımı ile objemizdeki name'leri aldık.
console.log("***********************");
team.forEach((person) => {
  const { name, surnae, job, age } = person;
  console.log("Name", name);
  console.log("Surname", name);
  console.log("Job", job);
});
console.log("********************");
// 3. HAVADA DESTRUCTING | Internette böyle bulamazsın ama bence en kolayı
team.forEach(({ name, surname, job, age }) => {
  console.log("Name", name);
  console.log("Surname", name);
  console.log("Job", job);
});
console.clear();
//! FUNCTIONLARDA DESTRUC. KULANIMI //

const objGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};
console.log(objGoster());
let {name, surname, jon, age} = objGoster()
console.log("Age func",++age);

//? Fonksiyon Parametresi Olarak Kulanımı
const veri = {
    id:"2319",
    desc:"Hello World!",
    createdTime: "25/08/2001"
}
const printData = (data) => {
    console.log(`${data.id} -${data.desc} -${data.createdTime}`);
}
printData(veri)

const printDataDestr = (data) => {
    const {id, desc, createdTime} = data
    console.log(`${id} -${desc} -${createdTime}`);
}
printDataDestr(veri)

//! DESTRUCTURING (ARRAY)
const people = ["Yunus","Zeynep","Baran","Harvey"]
let yunus = people[0]
console.log(yunus);
const [person1, person2, person3] = people
console.log(person3);

//! REST (...)
//? REST operatoru kullanıcı tarafından girilen değerleri dizi içerisie konumlandırır. :eşitli kullanım alanları vardır.

//* 1- Bir dizi veya object'deki bazı değerlerden geri kalanlarını ayrı dizi ya da objelere kopyalanmasını sağlayabilir

// ARRAY | [square brackets] ile oluşturulur.
const araclar = ["Araba","Kamyon","Tır","Motosiklet","Kamyonet","Jet"]
const [arac1, arac2, arac3, ...binekAraclar] = araclar // Rest elementi en sonda olmak zorunda. Aksi takdirde çalışmaz.
console.log(arac3)
console.log(binekAraclar);

// OBJECT | {} ile oluşturulur.
const person = {
    isim: "Hazel",
    soyisim: "Nut",
    is: "team lead",
    yas: 40,
}
const {isim, yas, ...geriKalan} = person
console.log("İhanetten geri kalan:", geriKalan);

//* 2- Bir fonksiyonun argumanlarını diziye çevirek için kullanılabilir.

const topla = (a,b, ...kalan) => {
    console.log(kalan); // Bu şekilde alttaki parametreleri array'e çevirdik..
    return a+b
}
console.log(topla(1,5,7,8,6,12));

const toplam = (...sayilar) => {
    return sayilar.reduce((a,b)=>a+b) // Object'i array'e çevirdiğimiz için array methodu olan reduce kullanarak toplama yapabildim. ...rest baya iyi
}
//? REST (...) ile non-iterable olan sayıları iterable hale (diziye) çevirmiş olduk
console.log(toplam(1,3,5,7,9));

//! SPREAD (...)
// Iterable olan bir elemanı bireysel değerler haline getirir.
const ucanAraclar = ["Helikopter","Drone","Ucak","F-16"]
const karaAraclari = ["Araba","Bisiklet","Scooter","Motorsiklet"]

const tasıtlar = [ucanAraclar, karaAraclari]
const flatTasitlar = [...ucanAraclar, ...karaAraclari]

console.log(tasıtlar);
console.log(flatTasitlar);

// ORN:
const cumle = "Uzun ince bir yoldayım."
const cumleDizisi = [...cumle] // Burada spread kullanarak cumlenin her bir itemını ayırdık
console.log(cumleDizisi);

// ORN:
const numbers = [1,9,3,4]
console.log(Math.max(...numbers));

// NESTED ORN:
//? nested
const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  };

  //? Javascript'te objeler defalt olarak iterable değildir.
  //? Ama for in ve for of döngüleri ile itere edilebilirler.

  //? Objelerin key ve valuelarını okumak için built-in metotlar vardır.
  //? Bu metotlar aslında objelerin key ve/veya valueları bir dizi olarak döndürür.
console.clear();
  //! FOR IN // Square bracket kullanarak objelerin içerisinde dönebilirsiniz.
  // For in'de döndüüğünüz yer obje olabilir (sahislar) gibi. İndis verir
  for (const s in sahislar){
    console.log(sahislar[s].salary);
  }
//   console.log(sahislar[sahislar[s]]);

  // Kullanılşı Object Metodları
  console.log(Object.keys(sahislar));
  console.log(Object.values(sahislar)); //? Objenin valueları array olarak döner

  //! FOR OF
  // For of'da itere edilebilir bir şey olması lazım. item verir.
  for (const x of Object.keys(sahislar)){
    console.log(sahislar[x]);
  }
  console.log("***************");

  for (const v of Object.values(sahislar)){
    console.log(v.name);
  }