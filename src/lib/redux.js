// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

const ARCHIVE_TASK = 'TASK_ARCHIVED';
const PIN_TASK = 'TASK_PINNED';

// The action creators bundle actions with the data required to execute them
export const archiveTask = id => ({ type: ARCHIVE_TASK, id });
export const pinTask = id => ({ type: PIN_TASK, id });

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
    switch (action.type) {
        case ARCHIVE_TASK:
        case PIN_TASK:
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

const initialState = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

// We export the constructed redux store
export const reduxStore = createStore(reducer, { tasks: initialState });