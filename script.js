const contCurtir = document.getElementById("id-curtir")
contCurtir.innerHTML = 0

function clicaCurtir(){
    contCurtir.innerHTML ++
}

function publicarComentario(){
    const boxComentario = document.getElementById("box-publicacao-usuario")
    const addComentario = document.createElement("p")
    const inputComentario = document.getElementById("input-comentario")

    addComentario.innerHTML += inputComentario.value

    boxComentario.insertAdjacentElement('beforeend',addComentario)
    inputComentario.value = ""


}