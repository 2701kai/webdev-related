# Thursday 02-11-2023 Debug

## Learning Goals

- Debugging
- removeEventListener
- remove
- closest
- append vs appendChild
- prepend and append
- Propagation and delegation
- Event bubbling
- Event target
- event.preventDefault
- event.stopPropagation
- Use capture

## Tasks

- [DOM-hideMessagesWithDelegation](https://classroom.github.com/a/5Ow2EHHb)
- [DOM-TreeMenu](https://classroom.github.com/a/PDBUiQY8)
- [Browser-ToDoList](https://classroom.github.com/a/nSt1rMxf)

## Resources

- [bubbling, capturing and propagation](https://www.loginradius.com/blog/engineering/javascript-events-bubbling-capturing-and-propagation/)
- [bubbling and capturing](https://javascript.info/bubbling-and-capturing)
- [Video](https://youtube.com/watch?v=F1anRyL37lE&si=f0gG5z9sUAir4-Ki)
  ​

## Debugging

Debugging is the process of finding and fixing errors within a script. Errors can occur for many different reasons. For example, data received from a form may not be in the expected format, or a function may not be called correctly, an event may not be handled properly, etc..

To debug a script in the browser, follow these steps:

- Read the error message in the console (if there is).
- Check in wich file and line the error is.
- Insured that functions or events trigger correctly.
- Check the values of the variables.
- Check the flow of the code.

To debugg is possible to use the `debugger` statement, this statement will invoke any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

**_Using debugger is for advanced debugging and is not recommended for beginners._**

Write clean code, split your code into functions, use descriptive names for your variables, functions and classes, use comments to explain complex parts of your code can help you to debugg your code.

## removeEventListener

The removeEventListener() method removes an event handler that has been attached with the addEventListener() method.

## remove

The remove() method removes the element from the DOM tree. The removed node is returned by the remove() method.

## closest

The closest() method returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter. If there isn't such an ancestor, it returns null.

## prepend and append

Using prepend you can add a node at the beginning of the parent node, while using append you can add a node at the end of the parent node.

## append and prepend vs appendChild

With append and prepend you can add a string, a node or a list of nodes, while with appendChild you can only add a node and only one por method.

## Propagation and delegation

https://youtube.com/watch?v=F1anRyL37lE&amp;si=f0gG5z9sUAir4-Ki

**Event propagation** is a mechanism that defines how events propagate or travel through the DOM tree to reach their target and what happens to them afterward. There are two ways of event propagation in the DOM tree: bubbling and capturing.

**Event delegation** is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it. The events are still triggered on the original element that originated them, but because of event bubbling the event will eventually reach the parent element too.

## Event bubbling

Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

## Event target

The target property of the Event interface is a reference to the object onto which the event was dispatched. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.

## event.preventDefault

One common use case for e.preventDefault() is to stop the default behavior of form submission, which by default reloads the page.

## event.stopPropagation

The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

## Use capture

The capture phase is the first phase of the event flow. In this phase, the event flows from the top of the DOM tree to the target's parent. In the capture phase, the event is not triggered on the target element itself. The event only triggers on the target's ancestors.
