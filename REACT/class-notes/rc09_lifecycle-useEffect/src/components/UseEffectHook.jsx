//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componentler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

import { useEffect, useState } from "react"


const UseEffectHook = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("")
    //! componentDidMount
    useEffect(()=>{
        console.log("2-ComponentDidMount")
    }, []) //* Dependency array boş oldugu için fonksiyonun gövdesi sadece ilk render sonrasında çalışır.

    useEffect(()=>{
        // console.log("2-ComponentDidMount")
        console.log("3-componentDidUpdate")
    }, [counter]) //? counter state'i her degistiğinde fonksiyonun gövdesi tekrar calıstı. Bu durumda gövde hem mounting hem de umdating de çalısmıs oldu.

    useEffect(() => {
    
      return () => {
        console.log("4-Unmounting")
      }
    }, [])
    

    console.log("1-Rendering")
  return (
<div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT = {counter}</h3>
        <h4>{name}</h4>
        <button onClick={()=>setCounter(counter + 1)} className="btn btn-info">INC</button>
        <button onClick={()=>setName("Uysal")} className="btn btn-success">Uysal</button>

      </div>
  )
}

export default UseEffectHook
