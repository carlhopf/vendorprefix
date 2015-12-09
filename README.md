vendor prefix
=============

Parse javascript and css compatible prefixes.
Supports ```-webkit, -moz, -o, -ms```.

Install
---
```
npm install vprefix
```

Usage
-----

```js
var vprefix = require('vprefix');
var result = vprefix.find('transition');

console.log(result.js); // => 'webkitTransition'
console.log(result.css); // => '-webkit-transition'
```
