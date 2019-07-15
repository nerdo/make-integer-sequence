# make-integer-sequence

A function that returns an integer sequence in a iterator-like fashion.

`makeIntegerSequence(startingAt = 0, endingAt = Number.MAX_SAFE_INTEGER, startOverWhenAtEnd = false)`

This is the default export of the library.

It takes a three optional arguments:

1. The starting value of the sequence. Defaults to `0`.
2. The ending value of the sequence. Defaults to `Number.MAX_SAFE_INTEGER`.
3. Whether to start the sequence over when the ending value is reached. Defaults to false, which throws an error.

It returns a function that, when called, returns the next value in the sequence, e.g.:

```
import makeIntegerSequence from 'make-integer-sequence'

const getNextInteger = makeIntegerSequence()

console.log(getNextInteger()) // 0
console.log(getNextInteger()) // 1
console.log(getNextInteger()) // 2
```

`integerIterator(startingAt = 0, endingAt = Number.MAX_SAFE_INTEGER, startOverWhenAtEnd = false)`

It has the same signature as `makeIntegerSequence`.

It returns the underlying iterator instead of the convenience function.

```
import { integerIterator } from 'make-integer-sequence'

const integers = integerIterator(2, 4)

for (const i of integers) {
  console.log(i) // 2, 3
}
```
