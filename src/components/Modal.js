import React from 'react'
import Card from './Card'

const Modal = (props) => {
    // Caso o usuário clique fora do card de adição, fechará o modal
    function handleModalClick(e) {
        let target = e.target
        if (target.id == 'modal'){
            props.changeModalVisibility()
        }
    }

    return (
        <div
            id='modal'
            onClick={handleModalClick}
            className={props.modalVisibility}
        >
            <Card id='modalCard'>{props.children}</Card>
        </div>
    )
}

export default Modal

