import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const Banner = () => {

    const { user } = useSelector((state) => state.product)

    return (
        <section className="banner-section">
            <button>{user.logged ? `¡${user.username} aprovéchate de tu 20% de descuento!` : "Registrate para recibir un 20% de descuento"}</button>
        </section>
    )
}

export default Banner