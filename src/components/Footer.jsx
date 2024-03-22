import { useSelector } from "react-redux"


const Footer = () => {

    const { theme } = useSelector((state) => state.product)


    return (
        <footer className="footer" style={{ backgroundColor: theme == "dark" ? "gray" : "blue" }}>
            <section className="info-footer">
                <article>
                    <h3>Contacto</h3>
                    <p>Email: mitienda@gmail.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                </article>
                <article>
                    <h3>Redes sociales</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </article>
                <article>
                    <h3>Dirección</h3>
                    <p>Calle Principal, 15</p>
                    <p>Ciudad, País</p>
                </article>
            </section>
            <section className="copy-container">
                <p className="copy">© 2024 Mi tienda. Todos los derechos reservados</p>
            </section>
        </footer>
    )
}

export default Footer