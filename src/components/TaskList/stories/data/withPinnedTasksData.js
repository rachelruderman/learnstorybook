import { defaultTasksData } from "./defaultTasksData";

export const withPinnedTasksData = [
    ...defaultTasksData.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];