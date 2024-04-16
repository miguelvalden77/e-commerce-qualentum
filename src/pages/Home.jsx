import { useDispatch, useSelector } from "react-redux"
import { addProduct, getProducts } from "../redux/productSlice"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { getProductsInitial } from "../redux/thunks"
import { useIsLoading } from "../components/hooks/useIsLoading"


const Home = () => {

    const dispatch = useDispatch()
    const { search, user: { logged }, products } = useSelector(state => state.product)
    const [visibleProducts, setVisibleProducts] = useState([])
    const { loading } = useIsLoading()

    const filterProducts = () => {

        const productos = products.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
        setVisibleProducts(productos)
    };

    const getAllProducts = async () => {
        const response = await fetch("http://localhost:3000/products")
        const products = await response.json()
        dispatch(getProductsInitial())
        setVisibleProducts(products)
    }

    useEffect(() => {
        filterProducts()
    }, [search])

    useEffect(() => {
        getAllProducts()
    }, [])


    if (loading) return <h1>Loading</h1>

    return (
        <main>
            <div className="main-products">
                {
                    visibleProducts.map(({ id, title, price, image, description }) => (
                        <article className="product-card" key={id}>
                            <Link to={`/product/${id}`}>
                                <div className="img-container">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="info-container">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <div className="add-section">
                                        <p className="price">{price}$</p>
                                    </div>
                                </div>
                            </Link>
                            {logged == true && <button onClick={() => dispatch(addProduct({ title, price, image, id }))}>Añadir</button>}
                        </article>
                    ))
                }
            </div>
        </main>
    )
}

export default Home