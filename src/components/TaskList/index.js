import React from 'react';
import { Task } from '../Task';
import { useDispatch, useSelector } from 'react-redux';
import { pinTask, archiveTask } from '../../lib/redux';
import { propTypes } from './propTypes';

export const TaskList = ({ isLoading }) => {

    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks
        .filter(task => ['TASK_INBOX', 'TASK_PINNED'].includes(task.state))
    );

    const onPinTask = (id) => dispatch(pinTask(id));
    const onArchiveTask = (id) => dispatch(archiveTask(id));

    const events = {
        onPinTask,
        onArchiveTask,
    };

    const isEmpty = (tasks.length === 0);

    if (isLoading) {
        const LoadingRow = (
            <div className="loading-item">
                <span className="glow-checkbox" />
                <span className="glow-text">
                    <span>Loading</span> <span>cool</span> <span>state</span>
                </span>
            </div>
        );

        return (
            <div className="list-items">
                <div className="list-items">
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                    {LoadingRow}
                </div>
            </div>
        );
    }

    if (isEmpty) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }

    const tasksInOrder = [
        ...tasks.filter(task => task.state === 'TASK_PINNED'),
        ...tasks.filter(task => task.state !== 'TASK_PINNED'),
    ];

    return (
        <div className="list-items">
            {tasksInOrder.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
}

TaskList.propTypes = propTypes;

TaskList.defaultProps = {
    isLoading: false,
};