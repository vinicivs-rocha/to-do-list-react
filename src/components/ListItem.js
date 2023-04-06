import React from 'react'
import Card from './Card'

const ListItem = (props) => {
    return (
        <li >
            {/* Muda a classe da tarefa conforme seu status armazenado */}
            <Card className={`item ${props.item.done ? 'done' : 'undone'}`}>
                {props.item.text}
                <div>
                    <button
                        onClick={() => {
                            props.markAsDoneOrUndone(props.item)
                        }}
                    >
                        <img
                            src={`./assets/${
                                props.item.done ? 'done' : 'undone'
                            }.png`}
                            alt={`Marcador de realização ${
                                props.item.done ? 'ativo' : 'desativo'
                            }.`}
                        />
                    </button>
                    <button
                        onClick={() => {
                            props.deleteItem(props.item)
                        }}
                    >
                        <img
                            src='./assets/trash-can-icon.webp'
                            alt='Ícone de lata de lixo.'
                        />
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem

