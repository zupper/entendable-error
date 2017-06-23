# ExtendableError

An extendable JS error class for creating your own custom exception classes.

## Usage

```
let ExtendableError = require('extendable-error');

class MyCustomError extends ExtendableError {};

throw new MyCustomError('A custom error ocurred!');
```


