import React from 'react';


const Todo = (props) => {
    return (
        <div className='list-item'
            // onClick={() => props.completed(props.todo.id)} >
            onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETE', payload: props.todo.id })} >
            <p style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}> {props.todo.item}</p >
        </div >
    )
}

export default Todo;