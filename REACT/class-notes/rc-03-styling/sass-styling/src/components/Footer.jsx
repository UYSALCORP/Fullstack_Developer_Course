import footerStyle from "../scss/footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright by Uysalcorp {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer