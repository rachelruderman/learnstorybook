import React from 'react';
import { TaskList } from '..';
import { actionsData } from '../../Task/stories/data/actionsData';
import { withPinnedTasksData } from './data/withPinnedTasksData';
import { defaultTasksData } from './data/defaultTasksData';

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

export const Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />;

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <TaskList loading tasks={[]} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;