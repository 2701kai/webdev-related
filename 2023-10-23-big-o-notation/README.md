# Big O notation

generate arry with 5000 items:

![Alt text](image.png)

### linear search:

![Alt text](image-1.png)

Zeit messen mit built-in Methode:

![Alt text](image-2.png)

### binary search:

```javascript
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
```

Unterschied linear sesarch / binary search:

![Alt text](image-3.png)

find duplicates:

![Alt text](image-4.png)

..also nested loops vermeiden aus performance Gründen.
