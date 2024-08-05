let palavras = [
    {
        id: 0,
        english: "Dinning",
        portuguese: "Jantando"
    },
    {
        id: 1,
        english: "Miss / Ms / Mrs",
        portuguese: "Senhorita, Senhora sem saber, Senhora casada"
    },
    {
        id: 2,
        english: "Each",
        portuguese: "Cada"
    },
    {
        id: 3,
        english: "Near",
        portuguese: "Perto"
    },
    {
        id: 4,
        english: "Far",
        portuguese: "Longe"
    },
    {
        id: 5,
        english: "Well",
        portuguese: "Bem"
    },
    {
        id: 6,
        english: "Greetings",
        portuguese: "Saudações"
    },
    {
        id: 7,
        english: "Feeling",
        portuguese: "Sentimento"
    },
    {
        id: 8,
        english: "But",
        portuguese: "Mas"
    },
    {
        id: 9,
        english: "Each",
        portuguese: "Cada"
    },
    {
        id: 10,
        english: "Short",
        portuguese: "Curto"
    },
    {
        id: 11,
        english: "Long",
        portuguese: "Longo"
    },
    {
        id: 12,
        english: "Doing",
        portuguese: "Fazendo"
    },
    {
        id: 13,
        english: "Do",
        portuguese: "Fazer"
    },
    {
        id: 14,
        english: "Below",
        portuguese: "Abaixo"
    },
    {
        id: 15,
        english: "Know",
        portuguese: "Saber"
    },
    {
        id: 16,
        english: "Introductions / Information",
        portuguese: "Funcionam para dar Introduções/Informações de algo ou alguém"
    },
    {
        id: 17,
        english: "Hat",
        portuguese: "Chapéu"
    },
    {
        id: 18,
        english: "Bath",
        portuguese: "Banho"
    },
    {
        id: 19,
        english: "Always",
        portuguese: "Sempre"
    },
    {
        id: 20,
        english: "I have to go",
        portuguese: "Eu tenho que ir"
    },
    {
        id: 21,
        english: "Cold",
        portuguese: "Frio"
    },
    {
        id: 22,
        english: "Together",
        portuguese: "Juntos"
    },
    {
        id: 23,
        english: "Neighborhood",
        portuguese: "Vizinhança"
    },
    {
        id: 24,
        english: "Neighbor",
        portuguese: "Vizinho"
    },
    {
        id: 25,
        english: "Hood",
        portuguese: "Capuz"
    },
    {
        id: 26,
        english: "Wake up",
        portuguese: "Acordar"
    },
    {
        id: 27,
        english: "When",
        portuguese: "Quando"
    },
    {
        id: 28,
        english: "Saleswoman",
        portuguese: "Vendedora"
    },
    {
        id: 29,
        english: "Come on in",
        portuguese: "Entre"
    },
    {
        id: 30,
        english: "Cool",
        portuguese: "Legal"
    },
    {
        id: 31,
        english: "Sure",
        portuguese: "Claro"
    },
    {
        id: 32,
        english: "Lot",
        portuguese: "Muito"
    },
    {
        id: 33,
        english: "Bedroom",
        portuguese: "Quarto"
    },
    {
        id: 34,
        english: "Things",
        portuguese: "Coisas"
    },
    {
        id: 35,
        english: "Bed",
        portuguese: "Cama"
    },
    {
        id: 36,
        english: "Alarm clock",
        portuguese: "Despertador"
    },
    {
        id: 37,
        english: "Stereo",
        portuguese: "Som"
    },
    {
        id: 38,
        english: "Speakers",
        portuguese: "Caixas de som"
    },
    {
        id: 40,
        english: "Living room",
        portuguese: "Sala de estar"
    },
    {
        id: 41,
        english: "Bathroom",
        portuguese: "Banheiro"
    },
    {
        id: 42,
        english: "Down the hall",
        portuguese: "Pelo corredor"
    },
    {
        id: 43,
        english: "Bathtub",
        portuguese: "Banheira"
    },
    {
        id: 44,
        english: "Floor",
        portuguese: "Chão"
    },
    {
        id: 45,
        english: "Laundry room",
        portuguese: "Lavanderia"
    },
    {
        id: 46,
        english: "Kitchen",
        portuguese: "Cozinha"
    },
    {
        id: 47,
        english: "Awesome",
        portuguese: "Incrível"
    },
    {
        id: 48,
        english: "Outside",
        portuguese: "Fora"
    },
    {
        id: 49,
        english: "Inside",
        portuguese: "Dentro"
    },
    {
        id: 50,
        english: "Dining room",
        portuguese: "Sala de jantar"
    },
    {
        id: 51,
        english: "Large/Big",
        portuguese: "Grande"
    },
    {
        id: 52,
        english: "Flowers",
        portuguese: "Flores"
    },
    {
        id: 53,
        english: "Fans",
        portuguese: "Ventiladores"
    }
]

function executar() {

    palavras.sort((a, b) => a.portuguese.localeCompare(b.portuguese))
    let pt = document.getElementById("quadroPortugues")
    palavras.forEach(palavra => {
        pt.innerHTML += `
        <div id="${palavra.portuguese}" onclick="teste(${palavra.id}, this.id)" class="quadrinhosJS">
            ${palavra.portuguese}
        </div> </br>`
    })

    palavras.sort((a, b) => a.english.localeCompare(b.english))
    let en = document.getElementById("quadroIngles")
    palavras.forEach(palavra => {
        en.innerHTML += `
        <div id="${palavra.english}" onclick="teste(${palavra.id}, this.id)" class="quadrinhosJS">
            ${palavra.english}
        </div> </br>`
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
        vitoria2.style.visibility = "hidden"
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