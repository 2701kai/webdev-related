# Tuesday 21.11.23 SPA Asynchronous Programming

## JSON js object notation:

- What is JSON and why is used ?

JSON is a format which is widely used as a way to transfer data from server to server and from server to browser. JSON is a text format that consists of key-value pairs, where each key is a string and each value can be a string, number, boolean, array, object, or null.

```js
{
  "name": "John",
  "age": 20,
  "isStudent": true,
  "courses": ["Math", "IT", "English"],
  "address": {
    "street": "Hauptbahnhof",
    "city": "Hamburg",
    "zipcode": "22111"
  }
}

```

- JSON has two method:

1. `JSON.stringify()`: this method convert a Javascript object or value to a JSON string.

2. `JSON.parse()`: this method parses a JSON string and returns a Javascript object.

## Fetch an API (Application Programming Interface)

- What is an API ?

- It refers to a set of rules and protocols that allow different software applications to communicate with each other.

- In JavaScript, interacting with APIs is a common task. You can use the `fetch` function or various libraries like `Axios` to make HTTP requests and retrieve data from APIs.

## LocalStorage and sessionStorage :

- They are a web storage options provided by modern web browsers to store data on the client side.

### <u>The difference between localStaorage and SessionStorage:</u>

1. `LocalStorage` persists across browser sessions and remains accessible even if the user closes the browser and reopens it.
   `SessionStorage` persists only for the duration of the page session.

2. `LocalStorage` Data remains until explicitly cleared by the user or the web application. `SessionStorage` Data is cleared when the tab or window is closed.

_LocalStorage methodes_ :

> setItem, getItem, removeItem, clear

## Recources :

[JSON W3school](https://www.w3schools.com/js/js_json.asp)

[JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

[LocalStorage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[Fetch MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[JSON placeholder API](https://jsonplaceholder.typicode.com/)

### Exercises:

1. [spa-asynchronous-programming-pokemon-cards](https://classroom.github.com/a/wf5qEjn2)

2. [Browser-Crypto-CurrencyConverter](https://classroom.github.com/a/zt4ZBUEb)
