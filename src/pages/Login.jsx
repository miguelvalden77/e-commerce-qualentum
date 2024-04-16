import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/productSlice"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const Login = () => {

    const [userInfo, setUserInfo] = useState({ username: "", email: "", password1: "", password2: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const updateUserInfo = (evt) => {
        setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value })
    }

    const loginUser = (data) => {
        const { username, email, password1, password2 } = data
        if (username.trim() == "" || email.trim() == "") return
        if (password1 !== password2) return

        dispatch(addUser({ username: username, email: email }))
        localStorage.setItem("user", JSON.stringify({ username, email }))
        navigate("/")
    }

    return (
        <main className="login-section">
            <h1>Inicia sesión</h1>
            <form className="login-form" onSubmit={handleSubmit((data) => loginUser(data))}>
                {errors.username && <p>{errors.username.message}</p>}
                <input placeholder="nombre" type="text" onChange={updateUserInfo} {...register("username", { required: "El nombre es requerido", minLength: { value: 4, message: "Mínimo 4 caracteres" } })} />

                {errors.email && <p>{errors.email.message}</p>}
                <input placeholder="correo" type="email" onChange={updateUserInfo} {...register("email", { required: "El correo es requerido" })} />

                {(errors.password1 || errors.password2) && <p>{errors.password1.message}</p>}
                <input type="password" {...register("password1", { required: "La contraseña es requerida", minLength: { value: 6, message: "Mínimo 6 caracteres" } })} onChange={updateUserInfo} />
                <input type="password" {...register("password2", { required: "La contraseña es requerida", minLength: { value: 6, message: "Mínimo 6 caracteres" } })} onChange={updateUserInfo} />
                <button>Entrar</button>
            </form>
        </main>
    )
}

export default Login