import React from 'react';
import { TaskList } from '..';
import { actionsData } from '../../Task/stories/data/actionsData';
import { withPinnedTasksData } from './data/withPinnedTasksData';
import { defaultTasksData } from './data/defaultTasksData';

/*
    Decorators are a way to provide arbitrary wrappers to stories. In this case we’re using a decorator `key` on the default export to add some `padding` around the rendered component. They can also be used to wrap stories in “providers” –i.e. library components that set React context.
*/

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

export const Default = () => <TaskList tasks={defaultTasksData} {...actionsData} />;

export const WithPinnedTasks = () => <TaskList tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <TaskList isLoading tasks={[]} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;