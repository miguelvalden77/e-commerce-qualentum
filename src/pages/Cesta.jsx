import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { removeAllProducts } from "../redux/productSlice"


const Cesta = () => {

    const cartState = useSelector((state) => state.cart)
    const [cartProduct, setCartProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("cart"))
        if (!products) {
            setCartProduct([])
        }
        else {
            setCartProduct(products)
        }
    }, [])


    const getTotal = (arr) => {
        return arr.reduce((acc, { price }) => {
            return acc + Number(price)
        }, 0)
    }

    const removeProducts = () => {
        setCartProduct([])
        localStorage.removeItem("cart")
        dispatch(removeAllProducts())
    }

    const pay = () => {

        alert("Redirección a pasarela de pago")
        removeProducts()
    }

    return (
        <main>
            <h1>Cesta</h1>
            {
                cartProduct.map(({ id, image, price, title, count }) => (
                    <article key={id}>
                        <img width={100} src={image} alt={id} />
                        <h2>{title}</h2>
                        <p>{price}</p> <span>cantidad: {count}</span>
                    </article>
                ))
            }
            <h2>Total {getTotal(cartProduct)}$</h2>
            <button onClick={pay}>Pagar</button>
            <button onClick={removeProducts}>Eliminar productos</button>
        </main>
    )
}

export default Cesta