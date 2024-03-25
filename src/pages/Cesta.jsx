import { useSelector } from "react-redux"


const Cesta = () => {

    const productState = useSelector((state) => state.product)

    const getTotal = () => {
        return productState.products.reduce((acc, { price }) => {
            return acc + price
        }, 0)
    }

    return (
        <main>
            <h1>Cesta</h1>
            {
                productState.products.map(({ id, image, price, title, count }) => (
                    <article key={id}>
                        <img width={100} src={image} alt={id} />
                        <h2>{title}</h2>
                        <p>{price}</p> <span>cantidad: {count}</span>
                    </article>
                ))
            }
            <h2>Total {getTotal()}$</h2>
        </main>
    )
}

export default Cesta