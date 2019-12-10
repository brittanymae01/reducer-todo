import React, { useReducer } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'
import { reducer, initialState } from '../reducers/reducer'

const TodoList = () => {
    const [taskState, dispatch] = useReducer(reducer, initialState)
    console.log(taskState)
    return (
        <div>
            <TodoForm dispatch={dispatch} />
            <div> {taskState.todos.map(todo => (
                <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
            </div>
        </div>
    )
}

export default TodoList