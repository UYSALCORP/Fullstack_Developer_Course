//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import { useState } from 'react'
import React from 'react'

const UseStateHook = () => {
    // let counter = 0
    const [counter, setCounter] = useState(0)
    const increase = () => setCounter(counter + 1)
    const decrease = () => setCounter(counter - 1)

  return (
    <div>
      <h2 className="text-center fs-3">USESTATE HOOK</h2>
      <h3>Count: {counter}</h3>
      <button className='btn btn-primary m-2' onClick={increase}>Increase</button>
      <button className='btn btn-primary m-2' onClick={decrease}>Decrease</button>
      <button className='btn btn-danger m-2' onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}

export default UseStateHook
