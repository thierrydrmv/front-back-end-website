// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener("click", cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos, que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // boolean: true or false

    // pegar os campos: que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o field do momento e o limpa
        field.value = ""
    })
    
    // Colocar na página: onde colocar?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)


}
