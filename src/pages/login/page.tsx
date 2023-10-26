import { useState } from "react"
import { Form, LoaderFunctionArgs, redirect, Link, useActionData } from "react-router-dom"
import { client } from "@/lib/client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export async function loader() {
    const response = await client.get("/auth/check")
    if (response.data.authenticated) {
        return redirect("/dashboard")
    }

    return null
}

export async function action({ request }: LoaderFunctionArgs) {
    const formData = await request.formData()

    const response = await client.post("/auth/login", { nameOrEmail: formData.get("nameOrEmail"), password: formData.get("password") })
    if (!response.data.error) {
        return redirect("/dashboard")
    }

    return {
        error: response.data.error
    }
}

export default function Login() {
    const errors = useActionData() as { error: string } | undefined

    const [inputs, setInputs] = useState({
        nameOrEmail: "",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((values) => ({ ...values, [event.target.name]: event.target.value }))
    }

    return (
        <div className="mx-auto sm:w-96">
            <h1 className="text-center mb-2 text-2xl font-semibold tracking-tight">
                Logheaza-te
            </h1>
            {errors?.error && (
                <Alert variant="destructive">
                    <AlertTitle>Eroare</AlertTitle>
                    <AlertDescription>
                        {errors?.error}
                    </AlertDescription>
                </Alert>
            )}
            <Form method="post" className="flex flex-col space-y-4 mt-4">
                <Label>Nume sau email
                    <Input
                        type="text"
                        name="nameOrEmail"
                        value={inputs.nameOrEmail}
                        placeholder="johndoe"
                        onChange={handleChange}
                        className="mt-2"
                        required
                    />
                </Label>
                <Label>Parola
                    <Input
                        type="password"
                        name="password"
                        value={inputs.password}
                        placeholder="••••••••"
                        onChange={handleChange}
                        className="mt-2"
                        required
                    />
                </Label>
                <Button type="submit" className="mt-4">Intra in cont</Button>
            </Form>
            <div className="mt-2 text-right">
                <Link to="/forgot-password" className="text-base text-slate-600 hover:text-slate-900">Ti-ai uitat parola?</Link>
            </div>
        </div>
    )
}