import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;

            console.log(text, 'send id');
            const result = state.todos.map(each => {
                console.log(each.id, 'map id');
                if (each.id === id) {
                    each.text = text;
                    return each;
                }

            });
        }
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;   