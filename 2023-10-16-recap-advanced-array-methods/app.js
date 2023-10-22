// task:
const tasks = [
  { id: 1, description: "Learn JS", completed: true, priority: "high" },
  { id: 2, description: "Learn React", completed: false, priority: "high" },
  {
    id: 3,
    description: "Learn Typescript",
    completed: false,
    priority: "medium",
  },
  { id: 4, description: "Learn Sass", completed: true, priority: "medium" },
];

// 1. findTaskIndexById(arr, taskId): This function should use the findIndex method to find the index of a task with a given taskId in the array of tasks (arr). If the task is found, return its index. If not found, return -1.
const findTaskIndexById = (arr, taskId) => {
  return arr.findIndex((task) => task.id === taskId);
};

console.log(findTaskIndexById(tasks, 3));

// 2. countCompletedHighPriorityTasks(arr): This function should use the reduce method to count the number of tasks that are both completed (completed: true) and have high priority (priority: 'high').
const countCompletedHighPriorityTasks = (arr) => {
  return arr.reduce((count, task) => {
    if (task.completed && task.priority === "high") {
      return count + 1;
    }
    return count;
  }, 0);
};

console.log(
  "WebDevSquad: " + countCompletedHighPriorityTasks(tasks),
  "- ausser kai, der macht grundschulabschluss."
);
