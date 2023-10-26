type RegisterQuizQuestion = {
    id: number
    message: string
    choices: RegisterQuizQuestionChoice[]
}

type RegisterQuizQuestionChoice = {
    id: number
    message: string
    correct: boolean
}

const quizQuestions: RegisterQuizQuestion[] = [
    {
        id: 1,
        message: "Din punct de vedere al regulamentului, termenul de mixing reprezinta:",
        choices: [
            {
                id: 1,
                message: "Incurcarea chat-ului IC cu cel OOC si vice-versa.",
                correct: true,
            },
            {
                id: 2,
                message: "Folosirea de injurii pe chat-ul OOC.",
                correct: false,
            },
            {
                id: 3,
                message: "Incurcarea PM-ului cu chat-ul factiunii.",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        message: "Din punct de vedere al regulamentului, termenul de metagaming (MG) reprezinta:",
        choices: [
            {
                id: 1,
                message: "Folosirea de informatii OOC in scopuri IC.",
                correct: true,
            },
            {
                id: 2,
                message: "Incurcarea chat-ului IC cu cel OOC si vice-versa.",
                correct: false,
            },
            {
                id: 3,
                message: "Atunci cand un player face roleplay pentru un obiect pe care nu il detine.",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        message: "Din punct de vedere al regulamentului, termenul de powergaming (PG) reprezinta:",
        choices: [
            {
                id: 1,
                message: "Realizarea unor actiuni roleplay nerealiste (atributii exagerate, actiuni nefiresti si irealizabile de catre om, rolarea unui obiect pe care nu il deti IC).",
                correct: true,
            },
            {
                id: 2,
                message: "Folosirea de informatii obtinute prin mijloace OOC in situatii IC.",
                correct: false,
            },
            {
                id: 3,
                message: "Atunci cand un player face roleplay de powerlifter.",
                correct: false,
            },
        ],
    },
    {
        id: 4,
        message: "Din punct de vedere al regulamentului, care sunt conditiile necesare pentru a jefui pe cineva:",
        choices: [
            {
                id: 1,
                message: "Playerii sa aiba minim level 3 iar actiunea trebuie sa fie detaliata si complexa, conform regulamentului, tinand cont de ora, loc, martori, etc.",
                correct: true,
            },
            {
                id: 2,
                message: "Poti sa jefuiesti oricand, nu conteaza level-ul player-ului sau locul unde se desfasoara jaful.",
                correct: false,
            },
            {
                id: 3,
                message: "Poti sa jefuiesti orice suma, dar player-ul trebuie sa aiba minim level 3.",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        message: "In urma unui filtru rutier organizat de VCPD esti tras pe dreapta pentru a efectua un control de rutina. Cum reactionezi:",
        choices: [
            {
                id: 1,
                message: "Trag pe dreapta si ma conformez situatiei. Nu detin niciun obiect ilegal care mi-ar pune libertatea in pericol asa ca nu exista motiv de a fugi.",
                correct: true,
            },
            {
                id: 2,
                message: "Incep sa injur politia fara un motiv aparent si nu opresc la semnalele lor, incepand practic o urmarire doar de dragul de a ma distra.",
                correct: false,
            },
            {
                id: 3,
                message: "Incep sa fiu recalcitrant fara motiv, iau politistii peste picior si imi bat joc de munca lor.",
                correct: false,
            },
        ],
    },
    {
        id: 6,
        message: "La o ora tarzie intr-o zona mai retrasa a orasului esti abordat de alti 3 playeri care scot armele si incep sa te ameninte, cerand in schimbul libertatii si evitarii violentei banii si obiectele valoaroase din posesia ta.",
        choices: [
            {
                id: 1,
                message: "Ma conformez situatiei deoarece sunt depasit numeric, neavand vreo sansa impotriva a 3 oameni care au deja armele indreptate spre mine, chiar daca as avea si eu o arma la mine. Nu este realistic, asa ca prefer sa pierd bunurile si sa imi iau revansa in viitor daca este posibil sau sun la politie dupa ce ma elibereaza.",
                correct: true,
            },
            {
                id: 2,
                message: "Incep sa ma cert cu ei pana totul degenejreaza intr-o bataie generala si incerc sa-i omor pe toti 3, doar nu pot sa pierd banii pe care ii am la mine.",
                correct: false,
            },
            {
                id: 3,
                message: "Scot arma si incep sa trag in toti, cu toate ca ei deja aveau armele indreptate spre mine.",
                correct: false,
            },
        ],
    },
    {
        id: 7,
        message: "Ce reprezintă termenul de ban-evading?",
        choices: [
            {
                id: 1,
                message: "Atunci când iei ban pe un cont si te joci de pe altul.",
                correct: true,
            },
            {
                id: 2,
                message: "Atunci când ieși din joc pentru a evita ca un administrator să îți dea ban.",
                correct: false,
            },
            {
                id: 3,
                message: "Atunci când folosești programe speciale pentru a-ți scoate singur ban-ul.",
                correct: false,
            },
        ],
    },
    {
        id: 8,
        message: "X are o conversație OOC cu Y. Acesta îi spune lui Y că se află în acel loc doar OOC, nu și IC. Ce se poate spune despre aceasta situatie?",
        choices: [
            {
                id: 1,
                message: "Este incorect, doar membrii staff-ului pot fi într-un loc OOC, doar dacă sunt ON-DUTY.",
                correct: true,
            },
            {
                id: 2,
                message: "Este incorect, doar membrii staff-ului pot fi într-un loc OOC, fie că se află ON-DUTY / OFF-DUTY.",
                correct: false,
            },
            {
                id: 3,
                message: "Este corect, oricine poate fi într-un loc OOC sau IC.",
                correct: false,
            },
        ],
    },
    {
        id: 9,
        message: "Ce reprezintă ninja-jacking-ul?",
        choices: [
            {
                id: 1,
                message: "Să fur mașina cuiva fără RP.",
                correct: true,
            },
            {
                id: 2,
                message: "Să sar pe stradă ca un ninja, lovind diferiți jucători.",
                correct: false,
            },
            {
                id: 3,
                message: "Să jefuiesc pe cineva, amenințându-l cu o sabie sau un cuțit.",
                correct: false,
            },
        ],
    },
    {
        id: 10,
        message: "Care este cel mai corect exemplu de PowerGaming dintre următoarele?",
        choices: [
            {
                id: 1,
                message: "/me îl lovește cu pumnul în gură pe X, urmând să îl lovească și cu mână stânga în burtă, pentru ca spre final să îl lovească cu genunchiul în burtă.",
                correct: true,
            },
            {
                id: 2,
                message: "/me se uită atent în jurul sau analizând fiecare mișcare în parte.",
                correct: false,
            },
            {
                id: 3,
                message: "/me încearcă să îl lovească pe X în gură cu pumnul drept.",
                correct: false,
            },
        ],
    },
    {
        id: 11,
        message: "Ce presupune termenul de deathmatch (DM)?",
        choices: [
            {
                id: 1,
                message: "Uciderea cuiva fără un motiv realist.",
                correct: true,
            },
            {
                id: 2,
                message: "Participarea la un meci de box organizat IC.",
                correct: false,
            },
            {
                id: 3,
                message: "Un duel intre doi sau mai multi playeri.",
                correct: false,
            },
        ],
    },
]

export { quizQuestions, type RegisterQuizQuestion }