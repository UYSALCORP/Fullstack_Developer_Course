//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{backgroundColor:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

//! External css
//! CSS dosyalari dogrudan import edilir. Export edilmelerine gerek yoktur.
//? CSS dosyalari import "path" seklinde eklenir.

import React from 'react'
import '../main.css'
import tree from '../images/tree.jpg'

//* Local ve Global Styling
const headerStyle = {
    color: "teal",
    backgroundColor: "lightGray",
    fontWeight: "bold"
}

const Main = () => {
  return (
    <div>
        <main>
            {/* Inline CSS, (key-value), camelCase */}
            <h2 style={{color: "red", backgroundColor:"bisque"}}>Main Section</h2>
            <h3 style={headerStyle}>Other Header</h3>
            {/* External CSS */}
            <p className='par'>Lorem ipsum dolor sit amet.</p>
            <p className='par2'>Lorem ipsum dolor sit amet.</p>
            <div>
                <img className='image' src="https://cdn.pixabay.com/photo/2019/08/29/07/50/castle-4438411_640.jpg" alt="" />
                {/* //* Lokal ortamda bulunan resmi import ile çağırırız. */}
                <img className='image' src={tree} alt=""/>
                {/* //* Public klasöründeki resimlere doğrudan ulaşabilirz. */}
                <img className='image' src="./sunset.jpg" alt="" />
            </div>
        </main>
    </div>
  )
}

export default Main
