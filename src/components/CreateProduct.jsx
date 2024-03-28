import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const CreateProduct = ({ setOff }) => {

    const [productData, setProductData] = useState({ title: "", description: "", price: "", image: "" })

    const handleData = (evt) => {
        setProductData({ ...productData, [evt.target.name]: evt.target.value })
    }

    const abortCreation = (evt) => {
        evt.preventDefault()
        setOff(false)
    }

    const handleCreate = async (evt) => {
        evt.preventDefault()
        const response = await fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...productData, id: uuidv4() })
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <section className="section-create">
            <form className="form-create" onSubmit={handleCreate}>
                <h2>Create product</h2>
                <input onChange={handleData} type="text" placeholder="title" name="title" value={productData.title} />
                <input onChange={handleData} type="text" placeholder="description" name="description" value={productData.description} />
                <input onChange={handleData} type="number" placeholder="price" name="price" value={productData.price} />
                <input onChange={handleData} type="text" placeholder="image" name="image" value={productData.image} />

                <button>Create</button>
                <button onClick={abortCreation}>Cancelar</button>
            </form>
        </section>
    )
}

export default CreateProduct