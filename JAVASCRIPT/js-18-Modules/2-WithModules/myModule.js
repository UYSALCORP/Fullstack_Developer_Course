console.log("Kadına Emir Ver 54");

//! named Export

export const calismaSaati = 40;
export function topla(s1, s2) {
    return s1 + s2
}

let counter = 5
const arttir=(miktar)=>(counter += miktar)
const azalt=(miktar)=>(counter -= miktar)
const myName = "Uysal"

export {arttir, azalt, myName}

//! default Export
function ugurla(){
    console.log("Get the fuck out of here Javascript");
}

export default ugurla
//? bir sayfada 1 tane default export olabilir
//? tüm yapı tek seferde export edilir
//? import ederken istediğimiz isimle import edip kullanabiliriz