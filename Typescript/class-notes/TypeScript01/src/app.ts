console.log("Merhaba TypeScript")
// TypeScript, JavaScript'in bir üst kümesi olan ve statik tip denetimi sağlayan bir programlama dilidir.
// TypeScript, JavaScript'in tüm özelliklerini destekler ve ek olarak tip güvenliği, sınıflar, arayüzler ve modüller gibi özellikler sunar.
// TypeScript, JavaScript kodunu derleyerek çalışır ve bu sayede hataları erken aşamada yakalayabiliriz.

let topla = 23+45

// Toplama İşlemi ile sonucu gösterdik.
const toplam=(a,b)=> a+b
// Fonksiyonu çağırdık
console.log(toplam(54, 26))

let b= 5
b = "Hello"

/* -------------------------------------------------------------------------- */
/*                             //! TYPE ANNOTATION                            */
/* -------------------------------------------------------------------------- */
// ts'de type annotation ile kesin olarak tip belirtiyoruz
let c : number = 45
console.log(typeof c)
c = "Hello"
console.log(typeof c)

/* -------------------------------------------------------------------------- */
/*                             //! ARRAY DATA TYPE                            */
/* -------------------------------------------------------------------------- */
// bir türl tanımlaması yapıldıgında array hep o türde olmalı
let CodeList: number[]=[26,54,34]
console.log(CodeList)
CodeList.push("Ali")
/* ----------------------- //? Generic Array tanımlama ---------------------- */
let serialList: Array<number> = [34,34,45,56,67]
console.log(serialList)

/* -------------------------------------------------------------------------- */
/*                                  //! TUPLE                                 */
/* -------------------------------------------------------------------------- */
// Sabit uzunluktaki ve belirli türlerde elemanlar içeren dizi türü. Her eleman belirlenen veri tipine sahip olması gerekir.

let tuple1:[number, string, string]
tuple1= [34,"Yunus","Uysal"]
console.log(tuple1)

/* -------------------------------------------------------------------------- */
/*                              //! TUPLE ARRAYI                              */
/* -------------------------------------------------------------------------- */
let sinif : [number, string][]
sinif = [[26,"Uysal"],[35,"Uysal"]]
console.log(sinif)

//! Tuple içinde destructure
let car:[string, number]=["BMW", 2023]
let [brand, model] = car
console.log(brand)

//! Tuple içindeki değerlerin değişitirilmesini engellemek için readonly kullanabilirsiniz!
// readonly ile tanımlanan bir tuple, elemanlarının değerleri değiştirilemez.
// Ancak, elemanların türleri hala korunur.
let settings:readonly[string, number]= ["Dark Mode",1]
settings=["Light Mode", 2]
settings[0]="Normal Mode"
console.log(settings)

//! ENUM
// Enum, sabit değerlerin adlandırılmış bir kümesini tanımlamak için kullanılır.
// Enum, genellikle bir grup ilişkili sabit değeri temsil etmek için kullanılır.
// Enum, kodun okunabilirliğini artırır ve sabit değerleri daha anlamlı hale getirir.
// Enum, JavaScript'te bir nesne olarak derlenir ve sabit değerler içerir.
enum Color {
    Red, 
    green, 
    blue,
    black
}
let selectedColor: Color = Color.Red
console.log(selectedColor)

// Numaralandırmayı biz de belirleyebiliriz.
enum Role {
    Admin=1,
    User,
    Guest
}
console.log("Role User", Role.User)

//! ANY
// TS en esnek veri türü
// TS'nin sıkı tür denetimini devre dışı bırakır
// Önceden türü bilinmeyen veriler için kullanılabilir.

let h: any=45
h="Merhaba"

//! UNKNOWN
let veri : unknown;
veri="Nasılsın"
console.log(typeof veri)

// Unknown, herhangi bir türdeki verileri temsil eder, ancak unknown türündeki bir değeri kullanmadan önce tip kontrolü yapmanız gerekir.
// Bu, unknown türünün güvenliğini sağlar ve hataları önler.

// Tip kontrolü 1.yöntem
if(typeof veri == "string"){
    console.log(veri.toLowerCase())
}
// Tip kontrolü 2.yöntem
console.log((veri as string).length)
/* ------------------------------------ - ----------------------------------- */

//! VOID 
// Return kullanmazsın, herhangi bir değer döndermezsin
// genelde (clg, alert, eventhandler vb. için kullanılır.)
function selamla(isim:string):void{
    console.log(`Merhaba ${isim}`)
}
selamla("Uysal")
/* ------------------------------------ - ----------------------------------- */

//! UNION (Birleşim) JS'deki or yapısı
// Birden fazla türü birleştirmek için kullanılır.
// Bir değişkenin birden fazla türde değer alabileceğini belirtir.
let a : number = 26
// number veya string
let s:number | string
s=45
s="Merhaba"
/* ------------------------------------ - ----------------------------------- */

//! TYPE ALIASES
// Type Aliases, bir türü yeniden adlandırmak için kullanılır.
// Bu, kodun okunabilirliğini artırır ve karmaşık türleri daha anlamlı hale getirir.
// Kendimiz bir tip oluşturduk
type name =string;
let kullaniciAdi: name="Uysal"

type kombine=number | string | boolean
let sifre: kombine="Merhaba"
/* ------------------------------------ - ----------------------------------- */
// TypeScript'te string literal türleri, belirli bir dize değerini temsil eden özel türlerdir.
//! String Literal
type Pet="Dog"| "Cat"| "Bird"
let myPet: Pet="Dog"