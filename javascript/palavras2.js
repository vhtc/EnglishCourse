let palavras = [
    {
        id: 1,
        english: "Roof",
        portuguese: "Telhado"
    },
    {
        id: 2,
        english: "Window shutters",
        portuguese: "Persianas"
    },
    {
        id: 3,
        english: "Hair dryers",
        portuguese: "Secadores de cabelo"
    },
    {
        id: 4,
        english: "Cans coke",
        portuguese: "Latas de Coca"
    },
    {
        id: 5,
        english: "Bottles",
        portuguese: "Garrafas"
    },
    {
        id: 6,
        english: "Vacuum cleaners",
        portuguese: "Aspiradores de pó"
    },
    {
        id: 7,
        english: "Staplers",
        portuguese: "Grampeadores"
    },
    {
        id: 8,
        english: "Matches",
        portuguese: "Fósforos"
    },
    {
        id: 9,
        english: "Sky",
        portuguese: "Céu"
    },
    {
        id: 10,
        english: "Furniture",
        portuguese: "Móveis"
    },
    {
        id: 11,
        english: "Clouds",
        portuguese: "Nuvens"
    },
    {
        id: 12,
        english: "Briefcase",
        portuguese: "Mala"
    },
    {
        id: 13,
        english: "Brief",
        portuguese: "Breve conversa com informação"
    },
    {
        id: 14,
        english: "In front of",
        portuguese: "Na frente de"
    },
    {
        id: 15,
        english: "Behind",
        portuguese: "Atrás"
    },
    {
        id: 16,
        english: "TV set",
        portuguese: "Televisão de Tubo"
    },
    {
        id: 17,
        english: "Never",
        portuguese: "Nunca"
    },
    {
        id: 18,
        english: "Talk about",
        portuguese: "Falar sobre"
    },
    {
        id: 19,
        english: "So",
        portuguese: "Então"
    },
    {
        id: 20,
        english: "Yourself",
        portuguese: "Você mesmo"
    },
    {
        id: 21,
        english: "Rich",
        portuguese: "Rico"
    },
    {
        id: 22,
        english: "Painter",
        portuguese: "Pintor"
    },
    {
        id: 23,
        english: "Tell",
        portuguese: "Contar"
    },
    {
        id: 24,
        english: "Toothbrush",
        portuguese: "Escova de dente"
    },
    {
        id: 25,
        english: "And of course",
        portuguese: "E, claro"
    },
    {
        id: 26,
        english: "Toothpaste",
        portuguese: "Creme dental"
    },
    {
        id: 27,
        english: "It looks dirty",
        portuguese: "Parece sujo"
    },
    {
        id: 28,
        english: "Cleaning supplies",
        portuguese: "Materiais de limpeza"
    },
    {
        id: 29,
        english: "Stove",
        portuguese: "Fogão"
    },
    {
        id: 30,
        english: "Microwave oven",
        portuguese: "Micro-ondas"
    },
    {
        id: 31,
        english: "Cupboard",
        portuguese: "Armário"
    },
    {
        id: 32,
        english: "Exhaust fan",
        portuguese: "Ventilador de exaustão"
    },
    {
        id: 33,
        english: "Smell",
        portuguese: "Cheiro"
    },
    {
        id: 34,
        english: "Warm",
        portuguese: "Quente"
    },
    {
        id: 35,
        english: "Roomy",
        portuguese: "Espaçoso"
    },
    {
        id: 36,
        english: "Moon",
        portuguese: "Lua"
    },
    {
        id: 37,
        english: "Nouns",
        portuguese: "Substantivos"
    },
    {
        id: 38,
        english: "Can (I Can)",
        portuguese: "Poder" // (no sentido de capacidade; para "lata", a tradução seria "Lata")
    },
    {
        id: 39,
        english: "On",
        portuguese: "Em"
    },
    {
        id: 40,
        english: "In",
        portuguese: "Dentro"
    },
    {
        id: 41,
        english: "Next to",
        portuguese: "Ao lado de"
    },
    {
        id: 42,
        english: "Under",
        portuguese: "Debaixo de"
    },
    {
        id: 43,
        english: "Over",
        portuguese: "Acima de"
    },
    {
        id: 44,
        english: "Hear",
        portuguese: "Ouvir"
    },
    {
        id: 45,
        english: "Job",
        portuguese: "Emprego"
    },
    {
        id: 46,
        english: "Civil servant",
        portuguese: "Servidor público"
    },
    {
        id: 47,
        english: "Government",
        portuguese: "Governo"
    },
    {
        id: 48,
        english: "Work out",
        portuguese: "Malhar / 'Resolver problemas'" // (no contexto de exercícios; "resolver" no contexto de solucionar problemas)
    },
    {
        id: 49,
        english: "Breakfast",
        portuguese: "Café da manhã"
    },
    {
        id: 50,
        english: "Lunch",
        portuguese: "Almoço"
    },
    {
        id: 51,
        english: "Homemaker",
        portuguese: "Dona de casa"
    },
    {
        id: 52,
        english: "Judge",
        portuguese: "Juiz"
    },
    {
        id: 53,
        english: "Criminals",
        portuguese: "Criminosos"
    },
    {
        id: 54,
        english: "See you later",
        portuguese: "Até mais"
    },
    {
        id: 55,
        english: "Mars",
        portuguese: "Marte"
    },
    {
        id: 56,
        english: "Chimney",
        portuguese: "Chaminé"
    },
    {
        id: 57,
        english: "Tonight",
        portuguese: "Esta noite"
    },
    {
        id: 58,
        english: "Child",
        portuguese: "Criança"
    },
    {
        id: 59,
        english: "Aunt",
        portuguese: "Tia"
    },
    {
        id: 60,
        english: "Uncle",
        portuguese: "Tio"
    }

]

function executar() {

    palavras.sort((a, b) => a.portuguese.localeCompare(b.portuguese))
    let pt = document.getElementById("quadroPortugues")
    palavras.forEach(palavra => {
        pt.innerHTML += `
        <div id="${palavra.portuguese}" onclick="teste(${palavra.id}, this.id)" class="quadrinhosPortuguesJS">
            ${palavra.portuguese}
        </div>`
    })

    palavras.sort((a, b) => a.english.localeCompare(b.english))
    let en = document.getElementById("quadroIngles")
    palavras.forEach(palavra => {
        en.innerHTML += `
        <div id="${palavra.english}" onclick="teste(${palavra.id}, this.id)" class="quadrinhosInglesJS">
            ${palavra.english}
        </div>`
    })

}


let mudarCor2 = null
let mudarCor1 = null
let palavra1 = null
let palavra2 = null
let error = null

function teste(x, y) {
    let palavraHTML = document.getElementById(y)

    if (mudarCor1 === null) {
        palavraHTML.style.backgroundColor = "green"
        palavra1 = y
        mudarCor1 = x
        console.log(mudarCor1)
        error = false
    } else if ((mudarCor2 === null) && (palavra1 != y)) {
        palavraHTML.style.backgroundColor = "green"
        palavra2 = y
        mudarCor2 = x
        console.log(mudarCor2)
        error = true
    }

    if (mudarCor1 == mudarCor2) {
        console.log("acertou")
        let vitoria1 = document.getElementById(palavra1)
        console.log(vitoria1)


        let vitoria2 = document.getElementById(palavra2)
        console.log(vitoria2)

        vitoria1.style.display = "none"
        vitoria2.style.display = "none"



        mudarCor2 = null
        mudarCor1 = null
        palavra1 = null
        palavra2 = null
    } else if (error == 1) {
        console.log(error)


        let selecao1 = document.getElementById(palavra1)
        selecao1.style.backgroundColor = "red"

        let selecao2 = document.getElementById(palavra2)
        console.log(mudarCor1)
        selecao2.style.backgroundColor = "red"

        mudarCor2 = null
        mudarCor1 = null
        palavra1 = null
        palavra2 = null
        error = false

        console.log(error)
    }
}