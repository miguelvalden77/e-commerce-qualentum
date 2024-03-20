import { Link } from "react-router-dom"

const rutas = [
    { nombre: "Inicio", link: "/" },
    { nombre: "Categorías", link: "/categorias" },
    { nombre: "Ofertas", link: "/ofertas" },
    { nombre: "Contacto", link: "/contacto" }
]

const Navbar = () => {

    return (
        <nav className="navbar">
            <section className="link-section">
                {
                    rutas.map(({ nombre, link }) => (
                        <Link key={nombre} to={link}>{nombre}</Link>
                    ))
                }
            </section>
            <input className="input-search" type="text" placeholder="Buscar productos" />
            <section className="emojis-section">
                <Link to={"#"}>🛒</Link>
                <Link to={"#"}>💙</Link>
                <Link to={"#"}>🧔</Link>
            </section>
        </nav>
    )
}

export default Navbar