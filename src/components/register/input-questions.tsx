import { inputQuestions } from "@/lib/register/input-questions"
import { Button } from "../ui/button"

type InputQuestionsProps = {
    answers: { [key: number]: string }
    onAnswerChange: (questionId: number, answer: string) => void
    onSuccess?: (() => void)
}

export default function InputQuestions({ answers, onAnswerChange, onSuccess }: InputQuestionsProps) {
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        if (onSuccess) {
            onSuccess()
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            {inputQuestions.map(question => (
                <div key={question.id} className="my-4">
                    <label>
                        <div className="mb-2">{question.message}</div>
                        <textarea
                            placeholder={question.placeholder}
                            value={answers[question.id] || ""}
                            onChange={e => onAnswerChange(question.id, e.target.value)}
                            minLength={question.minAnswerLength}
                            rows={4}
                            required
                            className="w-full border border-slate-200 p-1 text-sm"
                        />
                    </label>
                </div>
            ))}
            <Button type="submit">Inainte</Button>
        </form>
    )
}