import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../redux/productSlice"
import UpdateProduct from "../components/UpdateProduct"

const Product = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user: { rol } } = useSelector(state => state.product)
    const [product, setProduct] = useState({})
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await fetch(`http://localhost:3000/products/${id}`)
        const product = await response.json()
        setProduct(product)
    }

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        })
        navigate("/")
    }

    return (
        <main className="product-section">
            <Link to={"/"}>Volver</Link>
            <article className="product-card">
                {
                    rol == "admin" &&
                    <div className="actions-product">
                        <p onClick={() => setAdmin(true)}>✏ </p> <p onClick={handleDelete}>🗑️</p>
                    </div>
                }
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
            {
                admin == true && <UpdateProduct id={id} title={product.title} description={product.description} price={product.price} setAdmin={setAdmin} />
            }
        </main>
    )
}

export default Product