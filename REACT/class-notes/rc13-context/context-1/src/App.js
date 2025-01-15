import { useState } from "react";
import Home from "./components/Home";
import { StudentContext } from "./context/StudentContext";
import data from "./data"

// import { createContext } from "react";

// //! 1- Context alanı create edildi.
//? Tek bir şey için ayrı bir sayfa açmadan da bu şekilde context kullanımı uygulanabilir.
// export const StudentContext = createContext()


const App = () => {
  const [students, setStudents] = useState(data)

  const changeColor=(id, newRenk)=>{
    setStudents(students.map((a)=>a.id === id ? {...a, color:newRenk }: a))
  }
  return (
    //! 2- Bütün projeyi kapsayacak şekilde Home'u, gönderilecek elemanlar ve Context sayfasıyla sarmalladık. (Provide ettik.)
    <StudentContext.Provider value={{students, changeColor}}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
