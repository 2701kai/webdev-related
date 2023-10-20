// array: list or value, values can be all data types
const arr1 = ["green", "blue", "red"];
console.log(arr1);

// all data types:
const arr2 = ["green", 1, true, null, undefined, { name: "kai" }, [1, 2, 3]];
console.log(typeof arr2[2]); //boolean

// array methods: push, pop, shift, unshift, splice, slice, indexOf, includes, find, findIndex, forEach, map, filter, reduce, sort, reverse, join, split, concat, toString, toLocaleString, isArray, fill, copyWithin, flat, flatMap
const arr4 = ["x", "y", "z"];
// ["Tesla", "y", "z"]
// console.log(arr4.unshift("Tesla"));
// arr4[0] = ["Tesla", ...arr4];
// arr4[0] = ["Tesla"];
arr4[0] = "Tesla";
console.log(arr4);

const cellphones = ["Samsung", "Apple", "Nokia", "Sony"];
// .splice: (start, deleteCount, item1, item2, itemN)
cellphones.splice(1, 2, "Huawei", "Xiaomi");
console.log(cellphones);

const games = ["Pacman", "Mario", "Tetris", "Sonic"];
games.push("Zelda");

// Vorstellungsgesprächfrage: Was gibt push zurück?
console.log(games.push("Resident Evil")); // 5 - gibt length zurück

// .slice: (start, end)
const games2 = games.slice(1, 3);
console.log(games2);
// .slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// .indexOf: (searchElement, fromIndex)
console.log(games.indexOf("Tetris")); // 2
console.log(games.indexOf("Zelda")); // -1
// .indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.

// .includes: (searchElement, fromIndex)
console.log(games.includes("Tetris")); // true
console.log(games.includes("Zelda")); // false
// .includes determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// .find: (callbackFn(element, index, array), thisArg)
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find((element) => element > 3);
console.log(found); // 4
// .find returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

// .findIndex: (callbackFn(element, index, array), thisArg)
const foundIndex = numbers.findIndex((element) => element > 3);
console.log(foundIndex); // 3
// .findIndex returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// .forEach: (callbackFn(element, index, array), thisArg)
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((element) => console.log(element));
// .forEach executes the provided callbackFn once for each element present in the array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

// .map: (callbackFn(element, index, array), thisArg)
const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = numbers3.map((element) => element * 2);
console.log(numbers4);
// .map creates a new array populated with the results of calling a provided function on every element in the calling array.

// .filter: (callbackFn(element, index, array), thisArg)
const numbers5 = [1, 2, 3, 4, 5];
const numbers6 = numbers5.filter((element) => element > 3);
console.log(numbers6);
// .filter creates a new array with all elements that pass the test implemented by the provided function.

// .reduce: (callbackFn(accumulator, currentValue, index, array), initialValue)
const numbers7 = [1, 2, 3, 4, 5];
const sum = numbers7.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15
// .reduce executes the callbackFn function once for each element present in the array, excluding holes in the array, receiving four arguments: the initial value (or value from the previous callback call), the value of the current element, the current index, and the array over which iteration is occurring.

// .sort: (compareFn(firstEl, secondEl))
const numbers8 = [1, 2, 3, 4, 5];
const numbers9 = numbers8.sort((a, b) => b - a);
console.log(numbers9); // [5, 4, 3, 2, 1]
// .sort sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// .reverse: ()
const numbers10 = [1, 2, 3, 4, 5];
const numbers11 = numbers10.reverse();
console.log(numbers11); // [5, 4, 3, 2, 1]
// .reverse reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// .join: (separator)
const numbers12 = [1, 2, 3, 4, 5];
const numbers13 = numbers12.join(" - ");
console.log(numbers13); // 1 - 2 - 3 - 4 - 5
// .join creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// .split: (separator, limit)
const numbers14 = "1 - 2 - 3 - 4 - 5";
const numbers15 = numbers14.split(" - ");
console.log(numbers15); // ["1", "2", "3", "4", "5"]
// .split divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

// .concat: (value1, value2, ..., valueN)
const numbers16 = [1, 2, 3, 4, 5];
const numbers17 = numbers16.concat(6, 7, 8);
console.log(numbers17); // [1, 2, 3, 4, 5, 6, 7, 8]
// .concat merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// .toString: ()
const numbers18 = [1, 2, 3, 4, 5];
const numbers19 = numbers18.toString();
console.log(numbers19); // 1,2,3,4,5
// .toString returns a string representing the specified array and its elements.

// .toLocaleString: ()
const numbers20 = [1, 2, 3, 4, 5];
const numbers21 = numbers20.toLocaleString();
console.log(numbers21); // 1,2,3,4,5
// .toLocaleString returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).

// .isArray: (value)
const numbers22 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers22)); // true
// .isArray determines whether the passed value is an Array.

// .fill: (value, start, end)
const numbers23 = [1, 2, 3, 4, 5];
const numbers24 = numbers23.fill(0, 1, 3); // [1, 0, 0, 4, 5]
console.log(numbers24);
// .fill changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// .copyWithin: (target, start, end)
const numbers25 = [1, 2, 3, 4, 5];
const numbers26 = numbers25.copyWithin(0, 3); // [4, 5, 3, 4, 5]
console.log(numbers26);
// .copyWithin copies a sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array.

// .flat: (depth)
const numbers27 = [1, 2, [3, 4, [5, 6]]];
const numbers28 = numbers27.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(numbers28); // [1, 2, 3, 4, 5, 6]
// .flat creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// .flatMap: (callbackFn(element, index, array), thisArg)
const numbers29 = [1, 2, 3, 4, 5];
const numbers30 = numbers29.flatMap((element) => [element * 2]);
console.log(numbers30); // [2, 4, 6, 8, 10]
// .flatMap first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.

// .every: (callbackFn(element, index, array), thisArg)
const numbers31 = [1, 2, 3, 4, 5];
const numbers32 = numbers31.every((element) => element > 3);
console.log(numbers32); // false

// .some: (callbackFn(element, index, array), thisArg)
const numbers33 = [1, 2, 3, 4, 5];
const numbers34 = numbers33.some((element) => element > 3);
console.log(numbers34); // true

// .includes: (searchElement, fromIndex)
const numbers35 = [1, 2, 3, 4, 5];
const numbers36 = numbers35.includes(3);
console.log(numbers36); // true
// .includes determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// .keys: ()
const numbers37 = [1, 2, 3, 4, 5];
const numbers38 = numbers37.keys();
console.log(numbers38); // Object [Array Iterator] {}
// .keys returns a new Array Iterator object that contains the keys for each index in the array.

// .values: ()
const numbers39 = [1, 2, 3, 4, 5];
const numbers40 = numbers39.values();
console.log(numbers40); // Object [Array Iterator] {}
// .values returns a new Array Iterator object that contains the values for each index in the array.

// .entries: ()
const numbers41 = [1, 2, 3, 4, 5];
const numbers42 = numbers41.entries();
console.log(numbers42); // Object [Array Iterator] {}
// .entries returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// .lastIndexOf: (searchElement, fromIndex)
const numbers43 = [1, 2, 3, 4, 5];
const numbers44 = numbers43.lastIndexOf(3);
console.log(numbers44); // 2
// .lastIndexOf returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// .reduceRight: (callbackFn(accumulator, currentValue, index, array), initialValue)
const numbers45 = [1, 2, 3, 4, 5];
const sum2 = numbers45.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum2); // 15
// .reduceRight applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// .toLocaleString: ()
const numbers46 = [1, 2, 3, 4, 5];
const numbers47 = numbers46.toLocaleString();
console.log(numbers47); // 1,2,3,4,5
// .toLocaleString returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).

// .toSource: ()
const numbers48 = [1, 2, 3, 4, 5];
const numbers49 = numbers48.toSource();
console.log(numbers49); // [1, 2, 3, 4, 5]
// .toSource returns a string representing the source code of the array.

// .unshift: (element1, ..., elementN)
const numbers50 = [1, 2, 3, 4, 5];
const numbers51 = numbers50.unshift(0);
console.log(numbers51); // 6
// .unshift adds one or more elements to the beginning of an array and returns the new length of the array.

// .shift
const numbers52 = [1, 2, 3, 4, 5];
const numbers53 = numbers52.shift();
console.log(numbers53); // 1
// .shift removes the first element from an array and returns that removed element. This method changes the length of the array.

// .entries: ()
const numbers522 = [1, 2, 3, 4, 5];
const numbers523 = numbers522.entries();
console.log(numbers53); // Object [Array Iterator] {}
// .entries returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// .every: (callbackFn(element, index, array), thisArg)
const numbers54 = [1, 2, 3, 4, 5];
const numbers55 = numbers54.every((element) => element > 3);
console.log(numbers55); // false
// .every tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// .fill: (value, start, end)
const numbers56 = [1, 2, 3, 4, 5];
const numbers57 = numbers56.fill(0, 1, 3); // [1, 0, 0, 4, 5]
console.log(numbers57);
// .fill changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// .filter: (callbackFn(element, index, array), thisArg)
const numbers58 = [1, 2, 3, 4, 5];
const numbers59 = numbers58.filter((element) => element > 3);
console.log(numbers59); // [4, 5]
// .filter creates a new array with all elements that pass the test implemented by the provided function.

// .find: (callbackFn(element, index, array), thisArg)
const numbers60 = [1, 2, 3, 4, 5];
const numbers61 = numbers60.find((element) => element > 3);
console.log(numbers61); // 4
// .find returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.

// .findIndex: (callbackFn(element, index, array), thisArg)
const numbers62 = [1, 2, 3, 4, 5];
const numbers63 = numbers62.findIndex((element) => element > 3);
console.log(numbers63); // 3
// .findIndex returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// .unshift
const numbers64 = [1, 2, 3, 4, 5];
const numbers65 = numbers64.unshift(0);
console.log(numbers65); // 6
// .unshift adds one or more elements to the beginning of an array and returns the new length of the array.

// .shift
const numbers66 = [1, 2, 3, 4, 5];
const numbers67 = numbers66.shift();
console.log(numbers67); // 1
// .shift removes the first element from an array and returns that removed element. This method changes the length of the array.
