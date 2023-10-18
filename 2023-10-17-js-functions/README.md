# Tuesday 17.10.23 JS functions

## Advanced array methods

### Natürlich zuerst <U>_Wiederholung_</u>

#### 1. flat() method:

```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
```

#### 2. some() method:

```js
const array = [1, 2, 3, 4, 5];

// Checks whether an element is exist
const exist = (element) => element === 5;

console.log(array.some(exist));
// Expected output: true
```

#### 3. every() method:

```js
const isBelowThreshold = (currentValue) => currentValue < 40;
// check all the element if they are less than 40
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

#### 4. find() method:

```js
const array1 = [5, 12, 8, 130, 44];

// find first element satisfies the providing condition
const found = array1.find((element) => element > 7);

console.log(found);
// Expected output: 12
```

## Resources:

- [Flat method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

- [Some method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

- [Every method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

- [Find method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### Exercises :
