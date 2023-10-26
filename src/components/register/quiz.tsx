import { RegisterQuizQuestion, quizQuestions } from "@/lib/register/quiz-questions"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { shuffle } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"

export default function Quiz({ onSuccess }: { onSuccess?: (() => void) }) {
    const [currentQuestions, setCurrentQuestions] = useState<RegisterQuizQuestion[]>([])
    const [userAnswers, setUserAnswers] = useState<Map<number, number>>(new Map())
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        generateRandomQuestions()
    }, [])

    function generateRandomQuestions() {
        const shuffledQuestions = shuffle(quizQuestions).slice(0, 10)
        const questionsWithShuffledChoices = shuffledQuestions.map(question => ({
            ...question,
            choices: shuffle(question.choices)
        }))
        setCurrentQuestions(questionsWithShuffledChoices)
    }

    function handleAnswer(questionId: number, choiceId: number) {
        setUserAnswers(new Map(userAnswers.set(questionId, choiceId)))
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const isAllCorrect = currentQuestions.every(q => {
            const userAnswer = userAnswers.get(q.id)
            return q.choices.some(choice => choice.id === userAnswer && choice.correct)
        })
    
        if (isAllCorrect) {
            if (onSuccess) {
                onSuccess()
            }
        } else {
            generateRandomQuestions()
            setUserAnswers(new Map())
            setError("Ai raspuns gresit la una sau mai multe intrebari, incearca din nou.")
            window.scrollTo(0, 0)
        }
    }

    return (
        <div>
            {error && (
                <Alert variant="destructive">
                    <AlertTitle>Eroare</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <form onSubmit={handleSubmit}>
                {currentQuestions.map(question => (
                    <div key={question.id} className="my-4">
                        <div className="mb-2 font-bold">{question.message}</div>
                        {question.choices.map(choice => (
                            <div className="my-1">
                                <label key={choice.id} className="hover:cursor-pointer">
                                    <input
                                        type="radio"
                                        name={String(question.id)}
                                        value={choice.id}
                                        checked={userAnswers.get(question.id) === choice.id}
                                        onChange={() => handleAnswer(question.id, choice.id)}
                                        className="mr-1 hover:cursor-pointer"
                                    />
                                    {choice.message}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
                <Button type="submit">Trimite raspunsurile</Button>
            </form>
        </div>
    )
}