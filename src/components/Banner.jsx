import { useEffect, useState } from "react"


const Banner = ({ user }) => {

    return (
        <section className="banner-section">
            <button>{user ? `¡${user.username} aprovéchate de tu 20% de descuento!` : "Registrate para recibir un 20% de descuento"}</button>
        </section>
    )
}

export default Banner