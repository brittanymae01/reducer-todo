import React, { useReducer } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'
import { reducer, initialState } from '../reducers/reducer'

const TodoList = () => {
    const [taskState, dispatch] = useReducer(reducer, initialState)

    // const completed = id => {
    //     dispatch({ type: 'TOGGLE_COMPLETE', payload: id })
    // }

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            <div className='list'> {taskState.todos.map(todo => (
                <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
            </div>
            <button className='clear-button' onClick={() => dispatch({ type: 'CLEAR_COMPLETE' })}>Clear Completed</button>
        </div>
    )
}

export default TodoList