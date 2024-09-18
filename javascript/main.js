//     palavras.sort((a, b) => a.portuguese.localeCompare(b.portuguese)) //bagunçar as palavras em portugues
//     palavras.sort((a, b) => a.english.localeCompare(b.english)) //bagunçar as palavras em ingles

let mostrarPalavras = 5 //quantidade de palavras para mostrar na tela
let palavrasVisualizadas = 0 //quantidade atualizada visualizadas na tela -- NÃO MODIFICAR
let contadorPalavras = 0 // contador de palavras mostradas na tela tem que ser igual ao mostrarPalavras -NÃO MODIFICAR
let idPalavra = 0 //id da palavra que está sendo testada - pode ser resetada ao concluir tudo e o usuário escolher repetir as palavras

import palavras from "./palavras.js"

window.iniciar = iniciar
function iniciar() {

}

window.executar = executar;
function executar() {
    let pt = document.getElementById('quadroPortugues')
    let en = document.getElementById("quadroIngles")

    palavras.forEach((palavra, index) => { //for das palavras 
        idPalavra = index + 1 // pode usar o palavra.id caso de algum erro
        if (contadorPalavras < mostrarPalavras && idPalavra > palavrasVisualizadas) {
            pt.innerHTML += `
            <div id="${palavra.portuguese}" onclick="teste(${idPalavra}, this.id)" class="quadrinhosPortuguesJS">
                ${palavra.portuguese}
            </div>`

            en.innerHTML += `
            <div id="${palavra.english}" onclick="teste(${idPalavra}, this.id)" class="quadrinhosInglesJS">
                  ${palavra.english}
            </div>`

            palavrasVisualizadas += 1
            contadorPalavras += 1
        }
    })

    contadorPalavras = 0
    console.log('palavras visualizadas:', palavrasVisualizadas)
    console.log(`Total de Palavras`, palavras.length)
}

let mudarCor2 = null //verificar qual cor da palavra 2 ira mudar
let mudarCor1 = null //verificar qual cor ira mudar
let palavra1 = null //adicionando caracter a palavra 1
let palavra2 = null //adicionando caracter a palavra 2
let error = null //cont apenas para informar se existe error ou não

let contador = 0 //contador para saber a quantidade já passada pelo acertou e tirar as palavras da tela.

window.teste = teste;
function teste(x, y) {

    let palavraHTML = document.getElementById(y)

    if (mudarCor1 === null) { //selecionando a palavra e colocando a cor
        palavraHTML.style.backgroundColor = "green"
        palavra1 = y
        mudarCor1 = x
        error = false
    } else if ((mudarCor2 === null) && (palavra1 != y)) { //selecionando a segunda palavra e colocando a cor caso sejam iguais
        palavraHTML.style.backgroundColor = "green"
        palavra2 = y
        mudarCor2 = x
        error = true
    }

    if (mudarCor1 == mudarCor2) { //se amabas as cores forem iguais a resposta esta correta
        console.log("acertou")
        contador += 1 //verificar a quantidade de acertos para dizer que ganho no final da page
        let vitoria1 = document.getElementById(palavra1)
        // console.log(vitoria1) //qual primeira palavra

        let vitoria2 = document.getElementById(palavra2)
        // console.log(vitoria2) //qual segunda palavra

        vitoria1.style.display = "none"
        vitoria2.style.display = "none"

        mudarCor2 = null
        mudarCor1 = null
        palavra1 = null
        palavra2 = null

        if (contador == mostrarPalavras) { //verificar se o contador de acertos está de acordo com as palavras acertadas
            alert("Você ganhou")
            contador = 0
            executar()
        }

    } else if (error == 1) { //senão acertou errou, mude tudo de acordo com os erros
        console.log(error) //palavra 1

        let selecao1 = document.getElementById(palavra1)
        selecao1.style.backgroundColor = "red"

        let selecao2 = document.getElementById(palavra2)
        selecao2.style.backgroundColor = "red"

        mudarCor2 = null
        mudarCor1 = null
        palavra1 = null
        palavra2 = null
        error = false

        console.log(error) //palavra 2
        console.log("Errou")

    }
}