import { redirect } from "react-router-dom"
import { client } from "@/lib/client"

export async function loader() {
    const response = await client.get("/auth/check")
    if (!response.data.authenticated) {
        return redirect("/login")
    }

    return null
}

export default function Dashboard() {
    return (
        <>
            <h1>You are logged in!</h1>
        </>
    )
}