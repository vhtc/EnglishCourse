import palavrasPrincipais from "./palavras.js"
import chapter6 from "../json/chapter6.js"
import chapter7 from "../json/chapter7.js"
import chapter8 from "../json/chapter8.js"
import chapter9 from "../json/chapter9.js"
import chapter10 from "../json/chapter10.js"
import others from "../json/others.js"
import learning from './palavrasAprendendo.js'

let mostrarPalavras = 5 //quantidade de palavras para mostrar na tela
let palavrasVisualizadas = 0 //quantidade atualizada visualizadas na tela -- NÃO MODIFICAR
let contadorPalavras = 0 // contador de palavras mostradas na tela tem que ser igual ao mostrarPalavras -NÃO MODIFICAR
let idPalavra = 0 //id da palavra que está sendo testada - pode ser resetada ao concluir tudo e o usuário escolher repetir as palavras
let pt = document.getElementById('quadroPortugues') //quadro portugues
let en = document.getElementById("quadroIngles") //quadro ingles
let palavras // verificar qual array palavras vai ser selecionado de acordo com os imports
let mudarCor2 = null //verificar qual cor da palavra 2 ira mudar
let mudarCor1 = null //verificar qual cor ira mudar
let palavra1 = null //adicionando caracter a palavra 1
let palavra2 = null //adicionando caracter a palavra 2
let error = null //cont apenas para informar se existe error ou não
let textoPalavra1, textoPalavra2
let palavrasAcertadas = [] //array para colocar as palavras acertadas
let contador = 0 //contador para saber a quantidade já passada pelo acertou e tirar as palavras da tela.
let sortPalavrasPortuguese = [] //array para sortear as palavras em portugues
let status = { "acertos": 0, "erros": 0 }

window.executar = executar
function executar() {
    todosWindow()
    mostrarTodasPalavras()
    atualizarStatus()
    reiniciarTela()
    selecionarPalavras()
    iniciar()
}

function todosWindow() {
    window.selecionarPalavras = selecionarPalavras
    window.mostrarTodasPalavras = mostrarTodasPalavras
    window.reiniciarTela = reiniciarTela
    window.selecionarPalavras = selecionarPalavras
    window.iniciar = iniciar;
    window.teste = teste;
    window.atualizarStatus = atualizarStatus;
    window.limparInicio = limparInicio;
    window.limparCores = limparCores
    window.mudarCor = mudarCor

}

function mostrarTodasPalavras() {
    let _todasPalavrasHTML = document.getElementById('todasPalavras')
    let _todasPalavras = palavrasPrincipais.length + chapter6.length + chapter7.length + chapter9.length + chapter10.length + others.length + learning.length
    _todasPalavrasHTML.innerHTML = `Total: ${_todasPalavras} palavras`
}

function reiniciarTela() {
    limparInicio()
}

function selecionarPalavras() {
    let selectPalavras = document.getElementById('selectPalavras').value

    switch (selectPalavras) {
        case 'main':
            palavras = palavrasPrincipais
            break;
        case 'chapter6':
            palavras = chapter6
            break;
        case 'chapter7':
            palavras = chapter7
            break;
        case 'chapter8':
            palavras = chapter8
            break;
        case 'chapter9':
            palavras = chapter9
            break;
        case 'chapter10':
            palavras = chapter10
            break;
        case 'others':
            palavras = others
            break
        case 'learning':
            palavras = learning
            break
        default:
            console.log('default')
            break;
    }
}

function iniciar() {

    let _totalPalavras = document.getElementById('totalPalavras')

    palavras.forEach((palavra, index) => { //for das palavras 
        idPalavra = index + 1 // pode usar o palavra.id caso de algum erro
        if (contadorPalavras < mostrarPalavras && idPalavra > palavrasVisualizadas) {

            palavra.id = idPalavra //adiciona id nas palavras
            sortPalavrasPortuguese.push(palavra)
            // console.log(sortPalavrasPortuguese)

            en.innerHTML += `
            <div id="${palavra.english}" onclick="teste(${idPalavra}, this.id)" class="quadrinhosInglesJS">
                  ${palavra.english}
            </div>`

            palavrasVisualizadas += 1
            contadorPalavras += 1
        }

        _totalPalavras.innerHTML = `Palavras visualizadas: ${palavrasVisualizadas}/${palavras.length} ..........`
    })

    sortPalavrasPortuguese.sort((a, b) => a.portuguese.localeCompare(b.portuguese)) //sort nas palavras em portugues

    sortPalavrasPortuguese.forEach((palavra) => {

        pt.innerHTML += `
        <div id="${palavra.portuguese}" onclick="teste(${palavra.id}, this.id)" class="quadrinhosPortuguesJS">
            ${palavra.portuguese}
        </div>`
    });

    sortPalavrasPortuguese = []

    contadorPalavras = 0
    console.log('palavras visualizadas:', palavrasVisualizadas)
    console.log(`Total de Palavras`, palavras.length)
}

function teste(x, y) {

    let _palavraHTML = document.getElementById(y)

    if (mudarCor1 === null) { //selecionando a palavra e colocando a cor
        _palavraHTML.style.backgroundColor = 'rgb(238, 153, 212)';
        textoPalavra1 = _palavraHTML
        palavra1 = y
        mudarCor1 = x
        error = false
    } else if ((mudarCor2 === null) && (palavra1 != y)) { //selecionando a segunda palavra e colocando a cor caso sejam iguais
        _palavraHTML.style.backgroundColor = "rgb(238, 153, 212)"
        textoPalavra2 = _palavraHTML
        palavra2 = y
        mudarCor2 = x
        error = true
    }

    if (mudarCor1 == mudarCor2) { //se amabas as cores forem iguais a resposta esta correta
        console.log("acertou")

        status.acertos += 1

        setTimeout(() => {
            textoPalavra1.style.backgroundColor = 'rgb(164, 241, 164)'
            textoPalavra2.style.backgroundColor = 'rgb(164, 241, 164)'
        }, 100);

        contador += 1 //verificar a quantidade de acertos para dizer que ganho no final da page
        let _vitoria1 = document.getElementById(palavra1)
        // console.log(_vitoria1) //qual primeira palavra

        let _vitoria2 = document.getElementById(palavra2)
        // console.log(_vitoria2) //qual segunda palavra

        palavrasAcertadas.push(palavra1, palavra2)
        console.log(palavrasAcertadas)

        _vitoria1.style.pointerEvents = 'none'
        _vitoria2.style.pointerEvents = 'none'

        // _vitoria1.style.display = "none" //apagar da tela quando acertar
        // _vitoria2.style.display = "none" //apar da tela quando acertar

        limparCores()

        if (contador == mostrarPalavras) { //verificar se o contador de acertos está de acordo com as palavras acertadas
            // alert("Você ganhou")
            console.log('Ganhou')
            contador = 0


            setTimeout(() => {
                palavrasAcertadas.forEach(element => {
                    document.getElementById(element).style.display = 'none'
                });
                iniciar()
            }, 500);
        }

    } else if (error == 1) { //senão acertou errou, mude tudo de acordo com os erros

        status.erros += 1
        console.log(error) //palavra 1

        // let _selecao1 = document.getElementById(palavra1)
        // let _selecao2 = document.getElementById(palavra2)

        // setTimeout(() => {
        //     _selecao1.style.backgroundColor = "rgb(241, 164, 174)"
        //     _selecao2.style.backgroundColor = "rgb(241, 164, 174)"
        // }, 100);
        let _errou = true
        mudarCor( )

        limparCores()
        error = false

        console.log(error) //palavra 2
        console.log("Errou")



    }
    atualizarStatus()
}

function atualizarStatus() {
    let statusHTML = document.getElementById('status')
    statusHTML.innerHTML = `✅${status.acertos} | ❌${status.erros}`
}

function limparInicio() {
    contadorPalavras = 0
    contador = 0
    palavrasVisualizadas = 0
    palavrasAcertadas = []
    idPalavra = 0
    pt.innerHTML = ''
    en.innerHTML = ''
}

function limparCores() {
    mudarCor2 = null
    mudarCor1 = null
    palavra1 = null
    palavra2 = null
}

function mudarCor(errou) {
    let _selecao1 = document.getElementById(palavra1)
    let _selecao2 = document.getElementById(palavra2)

    if (errou == true) {
        setTimeout(() => {
            _selecao1.style.backgroundColor = "rgb(241, 164, 174)"
            _selecao2.style.backgroundColor = "rgb(241, 164, 174)"
        }, 100);

    } else {

    }
}