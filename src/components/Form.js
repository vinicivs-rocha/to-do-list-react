import React, {useState} from 'react'

const Form = (props) => {
    const [currentInputItem, setCurrentInputItem] = useState('')

    function handleInput(event) {
        let input = event.target.value
        setCurrentInputItem(input)
    }

    function handleClick(event) {
        event.preventDefault()
        if (currentInputItem) {
            props.addItem(currentInputItem)
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

