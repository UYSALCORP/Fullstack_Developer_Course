# Typescript Notes

## Installation:
- npm install -g typescript (Global'de kurulum)
- npm install -D typescript (devDependencies'de package.json'a (proje'ye) kurma.)

## Version Control:
- tsc -v

## Run a Project:
- tsc --init
- After specified directions run "tsc" command. It compiles Typescript to Javascript and creates "app.js" file on your outDir
- tsc --watch automaticly compile 

## tsconfig.json
- "rootDir" -> Specify the root folder within your source files. (Ana klasör'ü belirt.) (Row 29 in tsconfig.json)
- "outDir" -> Specify an output folder for all emitted files. */ (Çıkış dosyası) (Row 61 in tsconfig.json)
- "target" -> Set the JavaScript language version for emitted JavaScript and include compatible library declarations. (Row 14)
- "removeComments" -> Disable emitting comments (Derlendiğinde yorum satırlarını kaldırır.) (Row 62)
- "noEmitOnError" -> Disable emitting files if any type checking errors are reported. (Hata varsa compile etmez.) (Row 72)
- Ve daha birçok ayar birkaç tane önemli başlangıç ayarlarını ekledim.

## How to create Typescript project:
- npx create-react-app (<Optional>)
- pnpm create vite projectName(.) --template react-ts (<Recommended>)
* if you're not at same directory in terminal -> cd projectName
* then pnpm install, pnpm run dev

## Cross-Platform:
- JS'in çalıştırdığı bütün platformlarda çalışır.
- JS kodlarına compile edilir. Yoksa browserlarda çalışmaz.

## Object Oriented Language:
- Classes, interfaces, type security ve modules gibi güçlü özellikleri barındırır.

## Static-Type-Checking:
- Static typing, tipler yürütme anında tanımlanır.

## Optional Static Typing:
- JS'in dinamik yapısı yerine Opsiyonel static typing yazabilirsin.

## DOM Manipulation:
- JS gibi

## ES6 Features:
- JS'de bulunan özellikleri barındırır.
- Arrow function, Destructuring vs.

# Type Annotation (Dipnot):
- (:) kullanarak yapılır fe: let decimal : number = 6
- let(Declare) message(Name it) :(Annotate it) string(Data Type) = "Hello World!"(Initialise)

# Pros (Avantajlar):
- Strict Typing: Kesin tip tanımlaması. (Number, string?)
- Structural Typing: Yapısal olarak tip kontrolü. (Bi nesne tanımlayıp, o nesneden başka nesneler üretmek gibi.)
- Type Annotations: Tiplerin belirtilmesi. Öneri olarak sunulur, gözardı edebilirsin.
- Type inference: Otomatik olarak tipi algılar. ("merhaba" yazdığında onun string olduğunu algılaması gibi.)

# Cons (Dezavantajlar):
- Not true static typing.
- One more Javascript to learn
- Adding extra step - transpiling (Derlenme zamanı, compile işlemi)
- Bloated code (More lines of coding)

# Data Types - Basic Types:
- Boolean: Simple true/false value
- Number: All numbers are either floating point values or BigIntegers
- String: Textual data types

# Data Types - Arrays:
- Can be written in one of two ways;
- 1- use the type of the elements followed by [] -> let list: number[] = [1,2,3];
- 2- generic array type, Array<elementType> -> let list: Array<number> = [1,2,3];

# Data Types - Tuples:
- Element types are known, but need not be the same.
- 1- Declare a tuple type: let x:[string, number];
- 2- Initialize it: x = ["UYSAL", 20]; -> It's OK.
- 3- Initialize it incorrectly: x = [10, "Yunus"]; -> Error.

# Data Types - Enum:
- Is way of gibing more friendly names to sets of numeric values. 
- Enum begin numbering their members starting at 0.

# Data Type - Any:
- TS'nin sıkı tür denetimini devre dışı bırakır
- Can be use for dynamic contents, user-entered values from third party libraries.
- let arr: any[] =["Yunus", 24, true]; (Array'e tür tanımlaması yapmamış oluyoruz fakat ts erroru da almıyoruz.)

# Union(Birleşim) and Intersection(Kesişim):
- Union: Javascript OR yapısını ifade eder.
- Intersection: Javascript AND yapısını ifade eder.

# Classes: 
- Using for create reusable components.
- Objects are created from classes.
- A class can include -> Constructor, Properties, Methods.
- Classes are inheritance -> Using by "extends".
- Abstract Classes -> abstract method must be defined in the derived class. Abstract classes do not allow an object to be derived from them. Must call super() in the constructor

# Class Data Modifiers:
- In OOP, "Encapsulation" is used to make class members public or private
- 3 Type of access modifiers ; public(default), private, protected
- public:Varsayılan erişim seviyesi. Sınıf içinden ve dışından erişilebilir.
- private:Sadece tanımlandığı sınıf içinden erişilebilir.
- protected:Sadece sınıf içinden ve alt sınıflar (inheritance) tarafından erişilebilir.

# Interface:
- Interface, TypeScript’te güçlü bir araçtır ve nesnelerin, sınıfların ve fonksiyonların yapısını tanımlamak için kullanılır. Kodun daha okunabilir, güvenli ve hataya daha az açık hale gelmesini sağlar.
- Typescript'te objelerde "interface" / fonksiyonlarda "type" kullanımı daha yaygındır. Type Aliases (Type kullanımı)
- Classlarda inherit(extends) benzeri bir yapı olan "implements" kullanılır.
