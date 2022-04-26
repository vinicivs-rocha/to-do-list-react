import React, { useEffect, useState } from 'react'
import Item from './components/Item'
import Modal from './components/Modal'
import Form from './components/Form'
import List from './components/List'
import './app.css'

const STORED_ITEMS = 'storedItems'
const App = () => {
    let storedItems = JSON.parse(localStorage.getItem(STORED_ITEMS))
    const [listItems, setListItems] = useState(storedItems ? storedItems : [])
    const [toShow, setToShow] = useState(false)

    useEffect(() => {
        if (storedItems) {
            setListItems(storedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORED_ITEMS, JSON.stringify(listItems))
    }, [listItems])

    function addItem(currentInputItem) {
        let id = listItems.length !== 0 ? listItems.slice(-1)[0].id + 1 : 1

        let currentItem = new Item(currentInputItem, id)

        setListItems([...listItems, currentItem])
        changeModalVisibility()
    }

    function deleteItem(item) {
        let deletedItemArray = listItems.filter(
            (currentItem) => currentItem !== item,
        )

        setListItems(deletedItemArray)
    }

    function markAsDoneOrUndone(markedItem) {
        let markedItemArray = listItems.map((item) => {
            if (item.id === markedItem.id) {
                item.done = !item.done
            }
            return item
        })

        setListItems(markedItemArray)
    }

    function changeModalVisibility() {
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
                modalVisibility={toShow ? '' : 'hidden'}
            >
                <h1>Adicione uma tarefa!</h1>
                <Form addItem={addItem}></Form>
            </Modal>
            <List
                listItems={listItems}
                deleteItem={deleteItem}
                markAsDoneOrUndone={markAsDoneOrUndone}
            ></List>
        </div>
    )
}

export default App

