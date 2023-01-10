import React from 'react'
import { Button } from 'react-bootstrap';

function TodoItem(props) {

    return (
        <div>
            <Button variant="warning">나와라1</Button>{' '}
            <Button variant="warning"></Button>{' '}
            <Button variant="warning"></Button>{' '}


        </div>
        // <div className="todo-item">
        //     {props.item}
        // </div>
    )

}

export default TodoItem;