import React from "react"
//* rafc(exportArrowFunction kısayol), rafce(arrowFunction kısayol)

//! Arrow Function with default export (rafce)
const Header = () =>{
    const mesaj = "Say hi to React with Clarusway"
    return(
        <header>
        <h3>Yunus Emre Uysal - Frontend Developer with React</h3>
        <p className="par">{mesaj}</p>
        </header>
    )
}

export default Header
