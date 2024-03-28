import { useDispatch, useSelector } from "react-redux"
import { addProduct, getProducts } from "../redux/productSlice"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"


const Home = () => {

    const dispatch = useDispatch()
    const { search, user: { logged } } = useSelector(state => state.product)
    const [products, setProducts] = useState([])
    const [visibleProducts, setVisibleProducts] = useState([])

    const filterProducts = () => {

        const productos = products.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
        setVisibleProducts(productos)
    };

    const getAllProducts = async () => {
        const response = await fetch("http://localhost:3000/products")
        const products = await response.json()
        setProducts(products)
        setVisibleProducts(products)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    useEffect(() => {
        filterProducts()
    }, [search])

    return (
        <main>
            <div className="main-products">
                {
                    visibleProducts.map(({ id, title, price, image, description }) => (
                        <Link to={`/product/${id}`} key={id}>
                            <article className="product-card">
                                <div className="img-container">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="info-container">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <div className="add-section">
                                        <p className="price">{price}$</p>
                                        {logged == true && <button onClick={() => dispatch(addProduct({ title, price, image, id }))}>Añadir</button>}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))
                }
            </div>
        </main>
    )
}

export default Home