import data from "../../data.json"

const Home = () => {
    return (
        <main className="main-products">
            {
                data.map(({ id, title, price, image, description }) => (
                    <article className="product-card" key={id}>
                        <div className="img-container">
                            <img src={image} alt={title} />
                        </div>
                        <div className="info-container">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p className="price">{price}$</p>
                        </div>
                    </article>
                ))
            }
        </main>
    )
}

export default Home