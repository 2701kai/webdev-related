# DEEP CLONONG vs. SHALLOW CLONING

![Alt text](image-7.png)

```js
let h = JSON.parse(JSON.stringify(g));
g.address.city = "Hamburg";
```

- json stringify:

ist eine methode - verwandelt javascript object in json string

```js
function deepClone(reference) {
  return JSON.parse(JSON.stringify(reference));
}
```

# destructuring

![Alt text](image-8.png)

![Alt text](image-9.png)
![Alt text](image-10.png)
