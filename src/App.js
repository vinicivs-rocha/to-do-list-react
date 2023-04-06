import React, { useEffect, useState } from 'react'
import Item from './components/Item'
import Modal from './components/Modal'
import Form from './components/Form'
import List from './components/List'
import './app.css'

const STORED_ITEMS = 'storedItems'
const App = () => {
    // Acessa as tarefas armazenadas e as transforma em um estado
    let storedItems = JSON.parse(localStorage.getItem(STORED_ITEMS))
    const [listItems, setListItems] = useState(storedItems ? storedItems : [])
    // Cria o estado de visibilidade do modal da criação de tarefas
    const [toShow, setToShow] = useState(false)
    // Quando o componente App é montado, o estado que armazena as tarefas é alimentado com os dados armazenados
    useEffect(() => {
        if (storedItems) {
            setListItems(storedItems)
        }
    }, [])
    // Quando é adicionada ou removida uma tarefa, a operação é realizada também no armazenamento
    useEffect(() => {
        localStorage.setItem(STORED_ITEMS, JSON.stringify(listItems))
    }, [listItems])

    function addItem(currentInputItem) {
        // Caso haja uma lista de tarefas, o id recebe o valor do id da ultima tarefa adicionada mais 1
        // Caso não haja, recebe o valor 1
        let id = listItems.length !== 0 ? listItems.slice(-1)[0].id + 1 : 1
        // Cria uma nova instância de tarefa
        let currentItem = new Item(currentInputItem, id)
        // Atualiza a lista de tarafas com a nova
        setListItems([...listItems, currentItem])
        // Fecha o modal de adicionar tarefa
        changeModalVisibility()
    }

    function deleteItem(item) {
        // Faz uma cópia da lista atual, removendo a tarefa selecionada
        let deletedItemArray = listItems.filter(
            (currentItem) => currentItem !== item,
        )
        // Atualiza a lista atual com a cópia
        setListItems(deletedItemArray)
    }

    function markAsDoneOrUndone(markedItem) {
        // Faz uma cópia da lista atual, onde a tarefa selecionada terá seu status modificado
        let markedItemArray = listItems.map((item) => {
            if (item.id === markedItem.id) {
                item.done = !item.done
            }
            return item
        })
        // Atualiza a lista atual com a cópia
        setListItems(markedItemArray)
    }

    function changeModalVisibility() {
        // Inverte o valor do estado
        setToShow(!toShow)
    }

    return (
        <div className='container'>
            <header>
                <h1 id='pageTitle'>To do list</h1>
                <button onClick={changeModalVisibility}>+</button>
            </header>
            <Modal
                changeModalVisibility={changeModalVisibility}
                // Caso o estado seja falso, atribui ao componente a classe hidden
                modalVisibility={toShow ? '' : 'hidden'}
            >
                <h1>Adicione uma tarefa!</h1>
                <Form addItem={addItem}></Form>
            </Modal>
            <List
                // Distribuindo as funções de manipulação para o componente
                listItems={listItems}
                deleteItem={deleteItem}
                markAsDoneOrUndone={markAsDoneOrUndone}
            ></List>
        </div>
    )
}

export default App

