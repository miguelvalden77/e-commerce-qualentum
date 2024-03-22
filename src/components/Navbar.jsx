import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { changeTheme } from "../redux/productSlice"

const rutas = [
    { nombre: "Inicio", link: "/" },
    { nombre: "Categorías", link: "/categorias" },
    { nombre: "Ofertas", link: "/ofertas" },
    { nombre: "Contacto", link: "/contacto" }
]

const Navbar = ({ logout }) => {

    const { theme } = useSelector((state) => state.product)
    console.log(theme)
    const dispatch = useDispatch()


    return (
        <nav className="navbar" style={{ backgroundColor: theme == "dark" ? "gray" : "blue" }}>
            <section className="link-section">
                <Link to={"/"}>Mi tienda</Link>
                {
                    rutas.map(({ nombre, link }) => (
                        <Link key={nombre} to={link}>{nombre}</Link>
                    ))
                }
            </section>
            <input className="input-search" type="text" placeholder="Buscar productos" />
            <section className="emojis-section">
                <Link to={"/cesta"}>🛒</Link>
                <Link to={"#"}>💙</Link>
                <Link to={"/login"}>🧔</Link>
                <button onClick={() => dispatch(changeTheme())}>{theme}</button>
                <button onClick={logout}>🗑️</button>
            </section>
        </nav>
    )
}

export default Navbar