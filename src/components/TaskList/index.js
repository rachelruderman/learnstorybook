import React from 'react';
import { Task } from '../Task';

export const TaskList = ({ isLoading, tasks, onPinTask, onArchiveTask }) => {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    const isEmpty = (tasks.length === 0);

    if (isLoading) {
        return <div className="list-items">loading</div>;
    }

    if (isEmpty) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
}