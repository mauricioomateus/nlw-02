//procurar o botão
document.querySelector("#add-time")
    //quando clicar no botao
    .addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //duplicar os campos
        //Que campos?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //clear fields
    const fields = newFieldsContainer.querySelectorAll('input')
    
    fields.forEach(function(field) {
        // Take fields of the moment, and clear it
        field.value = ""
    })

    //colocar na pagina
        //onde na página?
    document.querySelector('#schedule-item').appendChild(newFieldsContainer)
}
   

