const Dog =(props)=>{
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} width="300px" height="300px"/>
            <p>Color: {props.color} </p>
        </div>
    )
}
export default Dog