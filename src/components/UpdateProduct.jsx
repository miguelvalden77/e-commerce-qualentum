import { useState } from "react"



const UpdateProduct = ({ title, description, price, id, setAdmin }) => {

    const [productData, setProductData] = useState({ title, description, price })

    const handleData = (evt) => {
        setProductData({ ...productData, [evt.target.name]: evt.target.value })
        console.log({ ...productData, [evt.target.name]: evt.target.value })
    }

    const handleUpdate = async (evt) => {
        evt.preventDefault()
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData)
        })
        const data = await response.json()
    }

    const abortUpdate = (evt) => {
        evt.preventDefault()
        setAdmin(false)
    }

    return (
        <section className="section-create">
            <form className="form-create" onSubmit={handleUpdate}>
                <h2>Update product</h2>
                <input onChange={handleData} type="text" placeholder="title" name="title" value={productData.title} />
                <input onChange={handleData} type="text" placeholder="description" name="description" value={productData.description} />
                <input onChange={handleData} type="number" placeholder="price" name="price" value={productData.price} />

                <button>Update</button>
                <button onClick={abortUpdate}>Cancelar</button>
            </form>
        </section>
    )
}

export default UpdateProduct