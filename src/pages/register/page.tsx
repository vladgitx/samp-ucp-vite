import Quiz from "@/components/register/quiz"
import { client } from "@/lib/client"
import { redirect } from "react-router-dom"
import { useState } from "react"
import InputQuestions from "@/components/register/input-questions"

export async function loader() {
    const response = await client.get("/auth/check")
    if (response.data.authenticated) {
        return redirect("/dashboard")
    }

    return null
}

export default function Register() {
    const [step, setStep] = useState(2)
    const [textAnswers, setTextAnswers] = useState<{ [key: number]: string }>({})

    function handleTextAnswerChange(questionId: number, answer: string) {
        setTextAnswers({ ...textAnswers, [questionId]: answer })
    }

    return (
        <div>
            {step === 1 && (
                <div>
                    <StepHeader title="Quiz" description="Raspunde corect la toate intrebarile pentru a trece mai departe" />
                    <Quiz onSuccess={() => setStep(2)} />
                </div>
            )}
            {step === 2 && (
                <div>
                    <StepHeader title="Raspunde la intrebari" description="Felicitari! Ai trecut de quiz, acum trebuie sa raspunzi in text" />
                    <InputQuestions answers={textAnswers} onAnswerChange={handleTextAnswerChange} onSuccess={() => setStep(3)} />
                </div>
            )}
        </div>
    )
}

function StepHeader({ title, description }: { title: string, description: string }) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600 mb-3">{description}</p>
        </div>
    )
}