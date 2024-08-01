let palavras = [
    {
        english: "Course",
        portuguese: "Curso"
    },
    {
        english: "Wardrobe",
        portuguese: "Guarda-roupa"
    }
]

function executar(){
    let pt = document.getElementById("quadroPortugues")
    pt.innerHTML += `${palavras}`

}