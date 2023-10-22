// slice, splice, push, pop shift, unshift, sort, reverse, join, concat
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.push(10);
// original array wird verändert

// const newArray: array.slice(2, 5); // 3, 4, 5
// mutiert original array nicht

// high order functions: functions die eine function als parameter haben oder eine function returnen
// map
const newArray2 = array.map((item) => item * 2);
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// map erzeugt neus array, mutiert original array nicht

// forEach
array.forEach((item) => console.log(item));
const item = array.forEach((item) => item * 2);
console.log(array);
console.log(item);

//
function checkPeperoncini(mangiatoPeperoncini) {
  if (mangiatoPeperoncini) {
    console.log("notarzt");
  } else {
    console.log("tutt`apposto");
  }
}

// sort
const array3 = [1, 2, 3, "a", "b"];
const newArray3 = array3.sort((a, b) => a - b);
// wieso a-b?????
// robb: a - b = a BIS b, also aufsteigend von a nach b
console.log(newArray3);

//accumulator
// see also
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const arr = ["lion", "cat", "cat", "dog", "dog", "cat"];
const animalCount = arr.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(animalCount);

// oder:
const animalCount2 = arr.reduce((acc, cur) => {
  acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
  return acc;
}, {});
console.log(animalCount2);

// oder:
const animalCount3 = arr.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(animalCount3);

// findIndex:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = array4.findIndex((item) => item === 5);
console.log(index);

const isLargerThan = array4.findIndex((item) => item > 5);
console.log(isLargerThan);

// forEach, map, filter, reduce, find, findIndex, some, every

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

// console.log(countCompletedHighPriorityTasks(tasks));
