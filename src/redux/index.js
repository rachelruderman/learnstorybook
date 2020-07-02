// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';
import { TASK_ARCHIVED, TASK_PINNED } from './_util/types';
import { initialState } from './_util/initialState';

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
    switch (action.type) {
        case TASK_ARCHIVED:
        case TASK_PINNED:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    const isMatch = (task.id === action.id);
                    return (isMatch)
                        ? { ...task, state: action.type }
                        : task;
                })
            };
        default:
            return state;
    }
};

export const reduxStore = createStore(reducer, { tasks: initialState });