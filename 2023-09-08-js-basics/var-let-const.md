# JavaScript Variables: `var`, `let`, `const`

## `var`

- **Old Way**: `var` is the old way to make variables in JavaScript. People use it less now.
- **Function Scope**: A `var` variable can be used only in the function where it is made (or everywhere if made outside a function).
- **Hoisting**: `var` variables are moved to the top of their scope, meaning you can use them before they are made.

  \`\`\`javascript
  console.log(a); // undefined
  var a = 5;
  \`\`\`

## `let`

- **Block Scope**: Unlike `var`, `let` variables are only for use inside the block (between `{}`) where they are made.
- **No Hoisting**: You can't use `let` variables before making them; it will give an error.

  \`\`\`javascript
  console.log(b); // Error
  let b = 5;
  \`\`\`

## `const`

- **Cannot Change**: With `const`, you make a variable that cannot be changed later.

  \`\`\`javascript
  const c = 5;
  c = 6; // Error
  \`\`\`

- **Block Scope**: Like `let`, `const` is also only for use inside the block where it is made.

## Summary

- `var` is the old way, has function scope, and allows hoisting.
- `let` is newer, has block scope, and doesn't allow hoisting.
- `const` is like `let`, but you can't change its value later.

In most new JavaScript projects, people prefer using `let` and `const` because they are easier to understand and safer to use.
