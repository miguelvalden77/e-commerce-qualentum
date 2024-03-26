import { Link } from "react-router-dom"


const NotFound = () => {

    return (
        <main>
            <h1>Not found</h1>
            <Link to={"/"}>Volver a casa</Link>
        </main>
    )
}

export default NotFound