import banner from "../../assets/img/banner.svg"
import "./styles.css"

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={banner} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://github.com/lucasferreiraz">lucasferreiraz.git</a></p>
            </div>
        </header>
    )
}

export default Header