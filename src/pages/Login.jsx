import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/productSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [userInfo, setUserInfo] = useState({ username: "", email: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const updateUserInfo = (evt) => {
        setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value })
        console.log(userInfo)
    }

    const loginUser = (evt) => {
        evt.preventDefault()
        if (userInfo.username.trim() == "" || userInfo.email.trim() == "") return
        dispatch(addUser(userInfo))
        setUserInfo({ username: "", email: "" })
        navigate("/")
    }

    return (
        <main>
            <h1>Inicia sesión</h1>
            <form onSubmit={loginUser}>
                <input type="text" onChange={updateUserInfo} name="username" value={userInfo.username} />
                <input type="email" onChange={updateUserInfo} name="email" value={userInfo.email} />
                <button>Entrar</button>
            </form>
        </main>
    )
}

export default Login