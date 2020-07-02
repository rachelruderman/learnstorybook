import React from 'react';
import { Task } from './index';
import { taskData } from './_util/taskData';
import { actionsData } from './_util/actionsData';
import { propTypes } from './propTypes';

export default {
    component: Task,
    title: 'Task',
};

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />

Task.propTypes = propTypes;