//garson
//! Type yazmak şart, payload şart değil!
//! Action is read-only!
export  const arttir=()=>({type:"INCREASE", payload:"ARTTIRILDI"})
export  const sifirla=()=>({type:"RESET"})
export const azalt=()=>({type:"DECREASE", payload:"AZALTILDI"})