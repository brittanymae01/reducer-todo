export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }],
};

export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: new Date()
            }
            return {
                todos: [...state.todos, newTodo]
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo
                })
            };
        case 'CLEAR_COMPLETE':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
}