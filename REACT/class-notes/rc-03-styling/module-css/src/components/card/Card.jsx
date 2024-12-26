import Button from "../button/Button";
import CardStyle from './card.module.css'

const Card = ({language, img}) =>{
    return (
        <>
        {/* <div className="wrapper"> */}
        <div className={CardStyle.wrapper}>
            <h2>Language: {language}</h2>
        </div>
        <img className={CardStyle.images} src={img} alt="language" />
        <Button/>
        </>
    )
}
export default Card;