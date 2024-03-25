import data from "../../data.json"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/productSlice"
import Banner from "../components/Banner"


const Home = () => {

    const dispatch = useDispatch()

    return (
        <main>
            <div className="main-products">
                {
                    data.map(({ id, title, price, image, description }) => (
                        <article className="product-card" key={id}>
                            <div className="img-container">
                                <img src={image} alt={title} />
                            </div>
                            <div className="info-container">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <div className="add-section">
                                    <p className="price">{price}$</p>
                                    <button onClick={() => dispatch(addProduct({ title, price, image, id }))}>Añadir</button>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </main>
    )
}

export default Home