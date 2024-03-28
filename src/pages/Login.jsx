import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/productSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [userInfo, setUserInfo] = useState({ username: "", email: "", password1: "", password2: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const updateUserInfo = (evt) => {
        setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value })
    }

    const loginUser = (evt) => {
        evt.preventDefault()
        if (userInfo.username.trim() == "" || userInfo.email.trim() == "") return
        if (userInfo.password1 !== userInfo.password2) return

        dispatch(addUser({ username: userInfo.username, email: userInfo.email }))
        setUserInfo({ username: "", email: "" })
        navigate("/")
    }

    return (
        <main className="login-section">
            <h1>Inicia sesión</h1>
            <form className="login-form" onSubmit={loginUser}>
                <input placeholder="nombre" type="text" onChange={updateUserInfo} name="username" value={userInfo.username} />
                <input placeholder="correo" type="email" onChange={updateUserInfo} name="email" value={userInfo.email} />
                <input type="password" name="password1" onChange={updateUserInfo} value={userInfo.password1} />
                <input type="password" name="password2" onChange={updateUserInfo} value={userInfo.password2} />
                <button>Entrar</button>
            </form>
        </main>
    )
}

export default Login