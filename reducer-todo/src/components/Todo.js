import React from 'react';


const Todo = ({ dispatch, ...props }) => {
    console.log(dispatch)
    return (
        <div>
            <p>{props.todo.item}</p>
        </div>
    )
}

export default Todo;