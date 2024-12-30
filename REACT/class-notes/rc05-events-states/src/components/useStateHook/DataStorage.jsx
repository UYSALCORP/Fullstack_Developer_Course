import React, { useState } from "react";

const DataStorage = () => {
  //   const [ad, setAd] = useState("Yunus");
  //   const [soyad, setSoyad] = useState("Uysal");
  //   const [meslek, setMeslek] = useState("Front-end Developer");

  const [user, setUser] = useState({
    ad: "Yunus",
    soyad: "Uysal",
    meslek: "Front-end Developer",
  });

  //?   Flag Kullanımı
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <h2 className="text-center">Birden fazla veri ile çalışmak</h2>
      {
        // Short Circuit
        visible && (
          <div className="bg-secondary fs-6">
            <p>AD: {user.ad}</p>
            <p>SOYAD: {user.soyad}</p>
            <p>MESLEK: {user.meslek}</p>
          </div>
        )
      }

      <button
        className="btn btn-primary m-2"
        onClick={() =>
          setUser({ ad: "Clark", soyad: "Kent", meslek: "Superhero" })
        }
      >
        Kullanıcı Bilgi Güncelle
      </button>
      {/* //! Sadece adı güncelleyip diğerlerini aynı bırakacaksak spread kullanmalıyız */}
      <button
        className="btn btn-primary m-2"
        onClick={() => setUser({ ...user, ad: "Frankenstein" })}
      >
        Ad Bilgi Güncelle
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => setUser({ ...user, soyad: "Steward" })}
      >
        Soyad Bilgi Güncelle
      </button>

      <button className="btn btn-danger m-2" onClick={()=>setVisible(!visible)}>
        {visible ? "Gizle" : "Göster"}
      </button>
    </div>
  );
};

export default DataStorage;
