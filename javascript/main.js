let palavras = [
    {
        id: 0,
        english: "Course",
        portuguese: "Curso"
    },
    {
        id: 1,
        english: "Wardrobe",
        portuguese: "Guarda-roupa"
    }
]

function executar() {

    let pt = document.getElementById("quadroPortugues")
    palavras.forEach(palavra => {
        pt.innerHTML += `
        <div id="${palavra.portuguese}" onclick="teste(${palavra.id}, this.id)">
            ${palavra.id} - ${palavra.portuguese}
        </div>`
    })

    let en = document.getElementById("quadroIngles")
    palavras.forEach(palavra => {
        en.innerHTML += `
        <div id="${palavra.english}" onclick="teste(${palavra.id}, this.id)">
            ${palavra.id} - ${palavra.english}
        </div>`
    })

}


let mudarCor2 = null
let mudarCor1 = null
let palavra1 = null
let palavra2 = null

function teste(x, y) {
    let palavraHTML = document.getElementById(y)

    if (mudarCor1 === null) {
        palavraHTML.style.backgroundColor = "green"
        palavra1 = y
        mudarCor1 = x
        console.log(mudarCor1)
    } else if (mudarCor2 === null) {
        palavraHTML.style.backgroundColor = "green"
        palavra2 = y
        mudarCor2 = x
        console.log(mudarCor2)
    }

    if (mudarCor1 == mudarCor2) {
        let vitoria1 = document.getElementById(palavra1)
        let vitoria2 = document.getElementById(palavra2)

        console.log(vitoria1)
        vitoria1.style.backgroundColor = "red"
        vitoria1.setAttribute("hidden", "true")

        console.log(vitoria2)

        vitoria2.style.backgroundColor = "red"
        vitoria2.setAttribute("hidden", "true")

        mudarCor2 = null
        mudarCor1 = null
        palavra1 = null
        palavra2 = null
    }
}