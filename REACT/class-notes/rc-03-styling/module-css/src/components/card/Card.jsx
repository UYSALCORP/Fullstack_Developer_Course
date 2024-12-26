import Button from "../button/Button";

const Card = ({language, img}) =>{
    return (
        <>
        <div>
            <h2>Language:</h2>
        </div>
        <img src={img} alt="language" width="300px"/>
        <Button/>
        </>
    )
}
export default Card;