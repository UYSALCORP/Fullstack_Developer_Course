import { createContext, useEffect, useState } from "react";

//! 1- Create Context
export const KullaniciContext = createContext();

const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((veri) => setUsers(veri))
      .catch((err) => console.log(err));
  }, []);
  
  const changeWidth=(id,px)=>{
    setUsers(users.map((a)=>a.id === id ? {...a, width:px} : a))
  }

  return (
    <KullaniciContext.Provider value={{ users, changeWidth }}>
      {children}
    </KullaniciContext.Provider>
  );
};

export default KullaniciProvider;
