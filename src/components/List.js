import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
    // Cria uma cópia visual das tarefas registradas
    return (
        <ul id='itemsList'>
            {props.listItems.map((item) => (
                <ListItem key={item.id} markAsDoneOrUndone={props.markAsDoneOrUndone} deleteItem={props.deleteItem} item={item}></ListItem>
            ))}
        </ul>
    )
}

export default List

