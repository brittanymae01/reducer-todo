export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }],
};

export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: new Date()
            }
            return {
                todos: [...state.todos, newTodo]
            }
        default:
            return state;
    }
}