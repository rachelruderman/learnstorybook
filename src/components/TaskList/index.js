import React from 'react';
import { Task } from '../Task';
import { useDispatch } from 'react-redux';
import { propTypes } from './propTypes';
import { TASK_PINNED, TASK_ARCHIVED } from '../../redux/_util/types';

export const TaskList = (props) => {

    const {
        isLoading,
        tasks: allTasks,
    } = props;

    const dispatch = useDispatch();

    const tasks = allTasks
        .filter(({ state }) => ['TASK_INBOX', 'TASK_PINNED'].includes(state))

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
        ...tasks.filter(task => task.state === TASK_PINNED),
        ...tasks.filter(task => task.state !== TASK_PINNED),
    ];

    const onPinTask = (id) => dispatch({ type: TASK_PINNED, id });
    const onArchiveTask = (id) => dispatch({ type: TASK_ARCHIVED, id });

    const events = {
        onPinTask,
        onArchiveTask,
    };

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