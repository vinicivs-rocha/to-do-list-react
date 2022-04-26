import React from 'react'
import Card from './Card'

const Modal = (props) => {
    function handleModalClick(e) {
        let target = e.target
        console.log(target)
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

