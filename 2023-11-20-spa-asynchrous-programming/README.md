# Montag 20.11.23 SPA Asynchronous Programming

## Synchronous (Blocking) and asynchronous (NON-blocking) code:

- Synchronous code runs line by line. Each line has to wait until the previous line has finished executing. this is called blocking too.

- In Asynchronous code, tasks can be executed independently of the main program flow. the blocking code is taken out of the normal execution flow and run in parallel.

- examples : alert, prompt, setTimeout.

## async and defer attribute:

- Self learning then explaining to all in the Class.

## Promises:

### What is Promises and why it's used ?

- A <b>Promise</b> idea is to provide a structured way to handle asynchronous code. Promise is an Object that eventual completion or failure an asynchronous operation and its resultiong value.

- <u> Promise has three states:</u>

1. _Pending_: the initial state of promise
2. _Fulfilled_:the operation completed successfully, and the promise has a resulting value.
3. _Rejected_: The operation failed, and the promise has a reason why is failed.

> Promise Syntax:

```js
new Promise((resolve, reject)=>{
    some asynchronous code
    if successful, call resolve()
    if not successful, call reject()
})
```

- After that <b>.then</b> method can used to handle the fulfillment of the promise, and the <b>.catch()</b> method can used to handle the rejection.

## fetch:

it's a method starts the process of getting resources from a server. it returns a Promise that resolves to response to that request.

### Resources:

1. [Asyncronous and promises MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

2. [async and defer attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

3. [fetch W3schools](<https://www.w3schools.com/jsref/api_fetch.asp#:~:text=The%20fetch()%20method%20starts,No%20need%20for%20XMLHttpRequest%20anymore.>)

4. [finally method MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

### Exercises :

1. [spa-async-promise](https://classroom.github.com/a/lKogJi9r)

2. [SPA-Async-FetchData](https://classroom.github.com/a/uvTmLuwh)
