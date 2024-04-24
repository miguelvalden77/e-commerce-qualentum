import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addNewProduct } from "../redux/productSlice";
import { useDispatch } from "react-redux"
import { getProductsInitial } from "../redux/thunks"


const CreateProduct = ({ setOff }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const abortCreation = (evt) => {
        evt.preventDefault()
        setOff(false)
    }

    const handleCreate = async (info) => {
        const response = await fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...info, id: uuidv4() })
        })
        const data = await response.json()
        dispatch(addNewProduct(data))
        dispatch(getProductsInitial())
        setOff(false)
    }

    return (
        <section className="section-create">
            <form className="form-create" onSubmit={handleSubmit((data) => handleCreate(data))}>
                <h2>Create product</h2>

                {errors.title && <p>{errors.title.message}</p>}
                <input {...register("title", { required: "El título es necesario", minLength: { value: 4, message: "El mínimo son 4 caracteres" }, maxLength: { value: 30, message: "El máximo de cararcteres son 30" } })} type="text" placeholder="title" name="title" />

                {errors.description && <p>{errors.description.message}</p>}
                <input {...register("description", { required: "La descripción es requerida", minLength: { value: 10, message: "Mínimo 10 caracteres" } })} type="text" placeholder="description" name="description" />

                {errors.price && <p>{errors.price.message}</p>}
                <input {...register("price", { required: "El precio es requerido", min: { value: 0, message: "el mínimo es 0" } })} type="number" placeholder="price" name="price" />

                {errors.image && <p>{errors.image.message}</p>}
                <input {...register("image", { required: "Foto requerida" })} type="text" placeholder="image" name="image" />

                <button>Create</button>
                <button onClick={abortCreation}>Cancelar</button>
            </form>
        </section>
    )
}

export default CreateProduct