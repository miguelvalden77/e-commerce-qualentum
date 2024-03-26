import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import productos from "../../data.json"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/productSlice"

const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState(productos[id - 1])

    return (
        <main>
            <Link to={"/"}>Volver</Link>
            <h1>{id}</h1>
            <article className="product-card">
                <div className="img-container">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="info-container">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="add-section">
                        <p className="price">{product.price}$</p>
                        <button onClick={() => dispatch(addProduct({ title: product.title, price: product.price, image: product.image, id: product.id }))}>Añadir</button>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Product