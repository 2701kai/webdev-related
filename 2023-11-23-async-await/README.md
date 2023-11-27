# Async await - error handling - get and post - Thursday 23-11-23

## Learning Goals

- async await
- error handling
- get and post requests
- json server (backend simulation)
- sending form data with js and post request
- fetch status with loading spinner

## Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [async await video](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
- [advanced error handling](https://www.youtube.com/watch?v=cJQQizjl7eo)
- [npm/json-server](https://www.npmjs.com/package/json-server)
- [workflow-project-repo](https://github.com/FbW-WD-23-D06/full-stack-async-json-server)

## Tasks

- [spa-github-username](https://classroom.github.com/a/XmMuHWa9)

## Async await

```js
// get data from an api
async function getDataFromAPI() {
  const url = API_URL; // url to the api already defined in other file (not shown here)
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// await download file
async function downloadFile(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
}
```

## Error handling

**Error handling is very importan**, because if we don't handle errors, our app will crash and the user will see a white screen.
If there is an error, we want to show a message to the user, so he knows what happened.

An error occurs not always for code that we wrote, but also for example when the user has no internet connection or there external problems (example with the server).

An app should always be able to handle errors and show a message to the user, **if not the app is not ready for production**.

```js
// get data from an api
async function getDataFromAPI() {
  const url = API_URL; // url to the api already defined in other file (not shown here)
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
```

## Get and post requests

When we use the method **GET** we request data from the API endpoint. When we use the method **POST** we send data to the API endpoint.

```js
// get data from an api
async function getDataFromAPI() {
  const url = API_URL; // url to the api already defined in other file (not shown here)
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// post data to an api
async function postDataToAPI(data) {
  const url = API_URL; // url to the api already defined in other file (not shown here)
  try {
    const response = await fetch(url, {
      method: "POST", // as default is GET, we can change it to POST, PUT, DELETE, etc.
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", // important to tell the server what kind of data we send (we will learn more about this later)
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
```

## Fetch status with loading spinner

When we send a request to the server or we have other async actions, we want to show the user that something is happening and he/she has to wait. We can do this with a loading spinner.
