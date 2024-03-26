import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const IsUser = (children) => {

    const { user } = useSelector(state => state.product)

    if (user.logged) {
        return children
    } else {
        return <Navigate to={"/login"} />
    }

}

export default IsUser