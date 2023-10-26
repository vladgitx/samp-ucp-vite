type RegisterInputQuestion = {
    id: number
    message: string
    placeholder: string
    minAnswerLength: number
}

type RegisterInputQuestionAnswer = {
    questionId: number | undefined
    answer: string
}

const inputQuestions: RegisterInputQuestion[] = [
    {
        id: 1,
        message: "Explica diferenta dintre IC (In Character) si OOC (Out of Character), ofera si un exemplu",
        placeholder: "Minim 100 de caractere",
        minAnswerLength: 100,
    },
    {
        id: 2,
        message: "Explica ce inseamna termenul de metagaming, ofera si un exemplu",
        placeholder: "Minim 100 de caractere",
        minAnswerLength: 100,
    },
    {
        id: 3,
        message: "Explica ce inseamna termenul de Revenge Kill, ofera si un exemplu",
        placeholder: "Minim 100 de caractere",
        minAnswerLength: 100,
    },
    {
        id: 4,
        message: "Explica ce inseamna termenul de mixing, ofera si un exemplu",
        placeholder: "Minim 100 de caractere",
        minAnswerLength: 100,
    },
]

export { inputQuestions, type RegisterInputQuestion, type RegisterInputQuestionAnswer }