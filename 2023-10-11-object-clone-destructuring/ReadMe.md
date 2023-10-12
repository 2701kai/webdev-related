# Object clone and destructuring

## shallow copy vs. deep copy

> Video: https://youtu.be/4Ej0LwjCDZQ

### .js Data Types - Primitive vs Structural

![Alt text](image.png)

- primitive data types pass values

```js
// z.B.
let x = 1;
```

- structural data types pass references

```js
// z.B.
let xArray = [1, 2, 3];
```

- primitive data types are immutable - you can reassign them, though..

![Alt text](image-1.png)

- structural data types are mutable - you can change them

![Alt text](image-2.png)

- pure functions do not mutate data. Impure functions do.

![Alt text](image-4.png)

### Shallow copy vs. deep copy

- shallow copy - doesn't change the original array. This can be provided by using the SPREAD OPERATOR:

![Alt text](image-5.png)

- "clone", that's independent, using Object.assign:

![Alt text](image-6.png)

### use deep copy to avoid mutating data
