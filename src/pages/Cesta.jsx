import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { removeAllProducts } from "../redux/productSlice"


const Cesta = () => {

    const productState = useSelector((state) => state.product)
    const [cartProduct, setCartProduct] = useState(productState.products)
    const dispatch = useDispatch()

    useEffect(() => {
        if (productState.products.length < 1) {
            const products = JSON.parse(localStorage.getItem("cart"))
            if (products) {
                setCartProduct(products)
            } else {
                setCartProduct([])
            }
        }
    }, [])


    const getTotal = (arr) => {
        return arr.reduce((acc, { price }) => {
            return acc + price
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