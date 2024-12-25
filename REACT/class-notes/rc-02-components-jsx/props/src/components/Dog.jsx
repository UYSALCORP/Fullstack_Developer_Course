import Name from "./Name";


const Dog =(props)=>{
    //! Destr.
    const { name, img, color = "brown", isBlueEyed, age } = props;
    return (
        <div>
            <Name name={name}/>
            {/* <h2>Name: {name}</h2> */}
            {/* JSX içinde if/else, for döngüleri kullanılamaz, ternary kullanılabilir! */}
            <p>Blue eyed?: {isBlueEyed ? "Yes" : "No" } </p>
            <img src={img} width="300px" height="300px"/>
            <p style={{backgroundColor:color, color:"white"}}>Color: {color} </p>
            <p>Age: {age}</p>
        </div>
    )
}
export default Dog

// const Dog =(props)=>{
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <img src={props.img} width="300px" height="300px"/>
//             <p>Color: {props.color} </p>
//         </div>
//     )
// }
// export default Dog