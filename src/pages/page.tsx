import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <div>
                <Link to="/register" className="text-blue-500 underline">Inregistreaza-te</Link>
            </div>
            <h1 className="text-8xl sm:text-9xl">Hello world!</h1>
        </div>
    )
}