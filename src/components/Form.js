import React, {useState} from 'react'

const Form = (props) => {
    // Estado da tarefa em criação
    const [currentInputItem, setCurrentInputItem] = useState('')
    // Envia os dados colocados no formulário para o estado
    function handleInput(event) {
        let input = event.target.value
        setCurrentInputItem(input)
    }
    function handleClick(event) {
        event.preventDefault()
        // Caso hajam dados no formulário, cria-se uma nota tarefa
        if (currentInputItem) {
            props.addItem(currentInputItem)
            // Limpa o buffer
            setCurrentInputItem('')
        }
    }
    
    return (
        <form id='itemForm'>
            <input type='text' name='task' id='task' onChange={handleInput} value={currentInputItem} placeholder="Escreva a tarefa aqui:"/>
            <button onClick={handleClick}>Adicionar</button>
        </form>
    )
}

export default Form

