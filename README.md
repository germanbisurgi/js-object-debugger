[Demo](https://germanbisurgi.github.io/js-object-debugger/)

## Why

* Make it easy to inspect objects on mobile devices without "console.log".
* Real time updates (with requestAnimationFrame or setInterval)

## How it works

```javascript
// The element that will be injected with the object debugger output.
var output = document.querySelector('.output');

// Object debbugger instance.
var objectDebugger = new ObjectDebugger(output);

// an object.
var object = {
    string: 'a string',
    number: 'number',
}

// print the object and set a max depth
objectDebugger.print(object, 3);
```


