# Javascript Modules - Wednesday 15-11-23

## Learning Goals

- IIIFE (Immediately Invoked Function Expression)
- Modules
- Import and export
- Named exports, default exports, namespace imports, default import , side effect import and mixed exports
- Using modules in the browser and in Node.js
- Advantages of scope isolation and encapsulation
- Understand the difference between `require` and `import`

## Resources

- [MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Modules-video-Fireship](https://www.youtube.com/watch?v=qgRUr-YUk1Q)
- [Modules-video-web semp](https://www.youtube.com/watch?v=cRHQNNcYf6s)

## Tasks

- [Browser-modules-basics](https://classroom.github.com/a/sKIhdXc-)
- [Spa-modules-utility-library](https://classroom.github.com/a/sZ8qZnZO)
- [Browser-modules-imports-exports](https://classroom.github.com/a/LPLOcde0)

## IIIFE (Immediately Invoked Function Expression)

IIFE, or Immediately Invoked Function Expression, is a JavaScript design pattern that allows you to create a function expression and execute it immediately after defining it. It's often used to encapsulate code and create a private scope for variables. Here's an example of an IIFE:

```js
// IIFE - normal function
(function () {
  // Do something here
})();

// IIFE - arrow function
(() => {
  // Do something here
})();
```

## Modules

- Modules are a way to split your code into separate files. Each file is a module and can export variables, functions, and classes to be used by other modules.

## Import and export

- The `export` statement is used to export functions, objects, or primitive values from a given file (or module).
- The `import` statement is used to import bindings that are exported by another module.

## Named exports, default exports, namespace imports, default import and mixed exports

- **Named exports**: Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

- **Default exports**: Default exports are useful to export only a single object, function, variable. During the import, it is possible to use any name to refer to the default export.

- **Namespace imports**: Namespace imports are useful to import objects using other names using the `as` keyword.

- **Default import**: Default imports are useful to import only a single object, function, variable. During the import, it is possible to use any name to refer to the default export.

- **Mixed exports**: Mixed exports are useful to export several values, including a default export. During the import, it is possible to use any name to refer to the default export.

- **Side effect import**: Side effect imports are useful to import a module without importing any of its exported values.

## Advanaages of scope isolation and encapsulation

**Scope Isolation:**

- **Local Scope**: Each module in JavaScript has its own scope, meaning that variables and functions defined within a module are not accessible from outside the module unless explicitly exported.

- **Preventing Global Pollution**: This isolation helps prevent pollution of the global scope, reducing the likelihood of naming conflicts or unintended interactions between different parts of your code.
  Encapsulation:

- **Information Hiding**: Modules allow you to encapsulate the internal details of a module, hiding them from the outside world. Only the functions and variables that you explicitly export from a module are accessible from other parts of your code.
-
- **Abstraction**: Encapsulation enables you to create a clear and well-defined interface for your module, abstracting away the implementation details. This makes it easier for other developers to use your module without needing to understand its inner workings.

**Advantages of Scope Isolation and Encapsulation in JavaScript Modules**:

- **Modularity**: You can break your code into smaller, manageable pieces, each responsible for a specific task. This makes your code easier to understand and maintain.

- **Reusability**: Encapsulated modules can be reused in different parts of your application or in entirely different projects, promoting code reuse and reducing redundancy.

- **Maintainability**: Scope isolation and encapsulation make it easier to locate and fix bugs or make updates without affecting other parts of your code.

- **Collaboration**: Encapsulation and a well-defined interface facilitate collaboration among developers, as they can work on different modules independently.

- **Security**: By limiting access to a module's internal variables and functions, you can enhance security by reducing the risk of unintended manipulation.

## Understand the difference between `require` and `import

- **require**: `require` is a function that is used to import the module. It is a CommonJS module feature. It is used to import the module from another file or dependency into the current file. It is a synchronous function.
- We can use `require` every where in our code, conditionally and it can be used dynamically

- **import**: `import` is a keyword that is used to import the module. It is an ES6 module feature. It is used to import the module from another file or dependency into the current file. It is an asynchronous function.
- We can use `import` only on the top level our code.
