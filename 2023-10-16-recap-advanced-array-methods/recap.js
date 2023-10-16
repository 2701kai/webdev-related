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
//
//

// forEach, map, filter, reduce, find, findIndex, some, every
