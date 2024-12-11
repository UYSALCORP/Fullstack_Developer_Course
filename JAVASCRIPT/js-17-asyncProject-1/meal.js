let dizi = []

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    dizi = data;
    showScreen(data.meals)});

//! Ekrana Bastırma
function showScreen(veri) {
    const mealsDiv = document.querySelector(".food")

    mealsDiv.innerHTML = ""

    veri.forEach((a) => {
        mealsDiv.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <p>${a.strMeal}</p>
            <img src="${a.strMealThumb}" alt="" width="200px"/>
        </div>
        `
    });
}

//!bayraklara tıklanınca o ülkenin yemeği gelsin
//!api yi aldığımız sitedeki url nin endpoint i ülke vatandaşları şeklinde, örneğin Turkish. bizde bayraklara tıklanınca hazır img gelmişken ülke vatandaşı da gelmiş olsun diye id sine bunu yerleştirdik, ve fetch ile yazdığımız url nin sonuna bu id yi ekleyerek tıkladığımız ülkenin yemeklerinin gelmesini sağladık

document.querySelectorAll("img").forEach((b)=>(
    b.onclick = () => {
        // console.log(b.id);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${b.id}`).then((response)=>response.json()).then((veri)=>showScreen(veri.meals))
    }
))

//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("input").oninput=(c)=>{
  let search = dizi.meals.filter((a)=>a.strMeal.toLowerCase().includes(c.target.value.toLowerCase()))
  showScreen(search);
}