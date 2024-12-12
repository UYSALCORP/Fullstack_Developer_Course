console.log("CALCULATE.JS'DEN SELAMUN ALEYKUM");

let myName = "Yunus"
console.log(myName);

const calculate = (dizi) => {
    // products dizisindeki priceları topla. : app.js
    return dizi.reduce((sum, product)=> sum + product.price,0)

}