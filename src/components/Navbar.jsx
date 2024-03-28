import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { changeTheme, removeUser, updateSearch } from "../redux/productSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const rutas = [
    { nombre: "Inicio", link: "/" },
    { nombre: "Categorías", link: "/categorias" },
    { nombre: "Ofertas", link: "/ofertas" },
    { nombre: "Contacto", link: "/contacto" }
]

const Navbar = () => {

    const { theme } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [busqueda, setBusqueda] = useState("")

    const logout = () => {
        dispatch(removeUser())
        navigate("/")
    }

    const handleChange = (evt) => {
        setBusqueda(evt.target.value)
        dispatch(updateSearch(evt.target.value))
    }

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
            <input className="input-search" type="text" placeholder="Buscar productos" onChange={handleChange} value={busqueda} />
            <section className="emojis-section">
                <Link to={"/cart"}>🛒</Link>
                <Link to={"#"}>💙</Link>
                <Link to={"/login"}>🧔</Link>
                <button onClick={() => dispatch(changeTheme())}>{theme}</button>
                <button onClick={logout}>🗑️</button>
            </section>
        </nav>
    )
}

export default Navbar