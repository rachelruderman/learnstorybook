import React from 'react';
import { propTypes } from './propTypes';
import { TASK_ARCHIVED } from '../../redux/_util/types';

export const Task = ({ task, onArchiveTask, onPinTask }) => {

    const { id, state, title } = task;

    const renderCheckbox = () => {
        return (
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === TASK_ARCHIVED}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
        )
    }
    const renderTitle = () => {
        return (
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>
        )
    }

    const renderPin = () => {
        const isArchived = (state === TASK_ARCHIVED);
        return (
            <div className="actions" onClick={event => event.stopPropagation()}>
                {!isArchived && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        )
    }

    return (
        <div className={`list-item ${state}`}>
            {renderCheckbox()}
            {renderTitle()}
            {renderPin()}
        </div>
    );
}

Task.propTypes = propTypes;