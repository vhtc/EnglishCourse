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
        english: "Cans",
        portuguese: "Latas"
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
    }  
]

function executar() {

    palavras.sort((a, b) => a.portuguese.localeCompare(b.portuguese))
    let pt = document.getElementById("quadroPortugues")
    palavras.forEach(palavra => {
        pt.innerHTML += `
        <div id="${palavra.portuguese}" onclick="teste(${palavra.id}, this.id)" class="quadrinhosJS">
            ${palavra.portuguese}
        </div>`
    })

    palavras.sort((a, b) => a.english.localeCompare(b.english))
    let en = document.getElementById("quadroIngles")
    palavras.forEach(palavra => {
        en.innerHTML += `
        <div id="${palavra.english}" onclick="teste(${palavra.id}, this.id)" class="quadrinhosJS">
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