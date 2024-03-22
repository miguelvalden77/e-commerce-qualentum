import { useState } from "react"

const Login = ({ setUser }) => {

    const [userInfo, setUserInfo] = useState({ username: "", email: "" })

    const updateUserInfo = (evt) => {
        setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value })
        console.log(userInfo)
    }

    const loginUser = (evt) => {
        evt.preventDefault()
        if (userInfo.username.trim() == "" || userInfo.email.trim() == "") return
        localStorage.setItem("user", `{"username": "${userInfo.username}", "email": "${userInfo.email}"}`)
        setUser(userInfo)
        setUserInfo({ username: "", email: "" })
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