import { useState } from "react"
import CreateProduct from "./CreateProduct"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



const AddProduct = () => {

    const [isCreate, setIsCreate] = useState(false)
    const { user: { rol } } = useSelector(state => state.product)

    if (rol == "admin") {
        return (
            <div>
                {
                    isCreate == false ?
                        <button className="add-admin" onClick={() => setIsCreate(true)}>Add product</button> :
                        <CreateProduct setOff={setIsCreate} />
                }
            </div>
        )
    }
}

export default AddProduct