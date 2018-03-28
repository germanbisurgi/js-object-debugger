[Demo](https://germanbisurgi.github.io/js-object-debugger/)

![object-debugger](src/assets/images/object-debugger.png "Description goes here")

## Why

* Make it easy to inspect objects on mobile devices without "console.log".
* Real time updates (with requestAnimationFrame or setInterval).
* Circular objects (child objects that are reference the parent) will not be
traversed but the object name will be printed between square brackets.
* customizable inspection depth.
* customizable output.

## How it works

```javascript
var objectDebugger = new ObjectDebugger(document.querySelector('.output'));

var object = {
    string: 'a string',
    number: 'number',
}

objectDebugger.print(object, 3); // 3 is the max depth
```

## Customize output
Output Keys and values have css classes for easy styling. Object debugger does
not produce the output container but it would be a good idea to style it also.

```css
.output {
    background: rgba(0, 0, 0, 0.5);
    display: none;
    font-family: monospace;
    font-size: 14px;
    overflow: auto;
    padding: 30px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.output.active {
    display: block;
}

.object-debugger-key {
    color: magenta;
}

.object-debugger-value {
    color: cyan;
}
```