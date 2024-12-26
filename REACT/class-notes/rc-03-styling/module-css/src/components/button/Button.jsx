import ButtonStyle from "./button.module.css"

const Button = () => {
    return (
        <div className={ButtonStyle.wrapper}>
            {/* <button className="btn btn-blue">Info</button> */}
            {/* //! CSS MODULES */}
            <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-blue"]}`}>Info</button>
            <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-yellow"]}`}>Back</button>
        </div>
    )
}

export default Button;