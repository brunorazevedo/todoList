//target = elemento ao qual o listener de evento foi adicionado, no caso o input. // (campoinput) parametro informado na callback addeventlistener 
//tarefas = valor do name do input
//trim = limpar espaços no inicio e no fim do texto
//tasksList.innerHTML += Serve para adicionar o valor do input a ul(tasksList)
//event.target.reset() // para limpar o campo do input ao enviar o formúlario
//Array.from(itemDaListaClicado.classList).includes('delete')) // Includes: Array de nomes das classes que essa expressão gera contém uma classe chamada //'delete', vai se true // Array.from usado para converter um DOMTokenList para Array.
//(itemDaListaClicado.parentElement.remove(); para verificar quem é o pai do elemento clicado, nesse caso o pai do botão clicado é a Li


//Obter e armazenar a referencia do form
const formularioDoTodo = document.querySelector('.form')

//Obter a referencia da Ul da Lista
const tasksList = document.querySelector('.tasks__list')



//Adicionando tarefas na lista de TODO.
formularioDoTodo.addEventListener('submit', textoDoInput=> {
    textoDoInput.preventDefault();

    const valorDoInput = textoDoInput.target.tarefa.value.trim();
    // condicional para não permitir que seja enviado form com input vazio
    if(valorDoInput.length){
    tasksList.innerHTML += ` 
    <li class="task__list--item ">
        <a href="#" class="task__list--itemTasks">${valorDoInput}</a>
        <i class="fa-solid fa-trash list__item--icon delete"></i>
    </li>
    ` 
    }
    textoDoInput.target.reset() // para limpar o campo do input ao enviar o formúlario
   
})

//Removendo item da lista  
//event(segundo parametro do addeventlistener) parametro que vai armanzar o objeto que contem informações sobre o evento.
tasksList.addEventListener('click', textoDoInput => {
    const itemDaListaClicado = textoDoInput.target // Criado para pegar o elemento que foi clicado, usando a funcão click do addEventListener

    if(Array.from(itemDaListaClicado.classList).includes('delete')){
        itemDaListaClicado.parentElement.remove();
    }//Condicional criada para verificar se o item foi clicado na lixeira, se foi vai ser removido o item da lista.
})



