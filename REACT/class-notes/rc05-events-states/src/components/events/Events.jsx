import React from "react";

const Events = () => {
  let message = " ";

  const handleTikla = () => {
    alert("Yunus Emre UYSAL");
  };

  const mesajYaz = (msg) => {
    console.log(msg);
  };
  const degistir = () => {
    const message = "Merhaba CH-18'in Güzel İnsanları";
    console.log(message);
  };
  return (
    <div>
      <h2 className="text-danger display-4">React Events</h2>

      {/* //! 1.Yöntem | En sık kullanılan | Referansını çağırma */}
      <button onClick={handleTikla} className="btn btn-primary p-3 w-25 m-1">
        Tıkla
      </button>
      {/* //! 2.Yöntem | Doğrudan çağırma | Callback Function */}
      <button
        onClick={() => alert("Silindi")}
        className="btn btn-danger p-3 w-25 m-1"
      >
        Sil
      </button>
      {/* //* Parametre Kullanımı  */}
      <button
        className="btn btn-success m-1 p-3 w-25"
        onClick={() => mesajYaz("Parametre gönderimi yapıldı.")}
      >
        Mesaj Yaz
      </button>

      <button className="btn btn-secondary m-1 w-25 p-3" onClick={degistir}>
        Değiştir
      </button>
      {/* <p>Merhaba</p> */}
      <p> O mesaj buraya gelecek: {message}</p>
    </div>

    //! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
    //* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
    //* static olarak kabul etmesinden kaynaklanir.

    //* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
    //* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
    //! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
    //! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
    //? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
    //? 1. Hooks (Functional Components).
    //? 2. Statefull Classes (Class Components).

    //? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
    //? Yaygin kullanim Fonksiyonel Component'lerdir.
    
  );
};

export default Events;
