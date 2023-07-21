### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks, promises and async/await

- What is a Promise?
  Promise is used to handle async operations in JavaScript. It is a one-time guarantee of a future value.

- What are the differences between an async function and a regular function?
  Async function returns a promise. Async functions lets us write a promise-based code as if it were synchronise 
  A regular function is a block of code that runs synchronously.

- What is the difference between Node.js and Express.js?
  Node.js is JavaScript code that runs outside of a browser. Express is a web development framework within Node.

- What is the error-first callback pattern?
  The first parameter in a callback function that returns an error if something goes wrong

- What is middleware?
  Code that runs in between request/response cycle. 

- What does the `next` function do?
  next is a paramter allows Express to call the next middleware. Next passed control to the next matching route. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  The function is making three request sequentially. Each request must wait until the previous request is completed. This structure can slow down the applicaiton.
  Instead, we can use Promise.all to await multiple resolved promises. 


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
