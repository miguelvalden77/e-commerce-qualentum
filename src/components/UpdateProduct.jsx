import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"



const UpdateProduct = ({ title, description, price, id, setAdmin }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const handleUpdate = async (info) => {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info)
        })
        navigate("/")
    }

    const abortUpdate = (evt) => {
        evt.preventDefault()
        setAdmin(false)
    }

    return (
        <section className="section-create">
            <form className="form-create" onSubmit={handleSubmit((data) => handleUpdate(data))}>
                <h2>Update product</h2>

                {errors.title && <p>{errors.title.message}</p>}
                <input defaultValue={title} {...register("title", { required: "El titulo es requerido", minLength: { value: 6, message: "minimo 6 caracteres" } })} type="text" placeholder="title" name="title" />

                {errors.description && <p>{errors.description.message}</p>}
                <input defaultValue={description} {...register("description", { required: "La descripcion es requerida", minLength: { value: 10, message: "minimo 10 caracteres" } })} type="text" placeholder="description" name="description" />

                {errors.price && <p>{errors.price.message}</p>}
                <input defaultValue={price} {...register("price", { required: "precio obligatorio", min: { value: 0, message: "Como minimo 0" } })} type="number" placeholder="price" name="price" />

                <button>Update</button>
                <button onClick={abortUpdate}>Cancelar</button>
            </form>
        </section>
    )
}

export default UpdateProduct