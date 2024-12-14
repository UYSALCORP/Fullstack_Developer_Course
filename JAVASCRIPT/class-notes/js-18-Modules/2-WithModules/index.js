console.log("Platin Avcısı 26");
document.querySelector("h1").textContent = "WITH MODULES";

// import ugurla from "./myModule.js";
//? İmport ettiğimiz şeylerin ismini "as" kullanarak değiştirebiliriz.
//? Default exportlarda istediğimiz isimle import edebiliriz.
import ugurla, {
  topla,
  arttir as increase,
  azalt as decrease,
  myName,
  calismaSaati,
} from "./myModule.js";

console.log(topla(34, 20));
console.log(calismaSaati + 14);
console.log(increase(29));
console.log(decrease(14));

ugurla();
