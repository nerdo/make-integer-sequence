// Instead of setting this up with Babel and overcomplicating it, it is written here with ES6
// and was copied & pasted into https://babeljs.io/en/repl to convert it to ES5 for consumption as a library.

export const integerIterator = (startingAt = 0, endingAt = Number.MAX_SAFE_INTEGER, startOverWhenAtEnd = false) => {
  let id = startingAt
  return {
    [Symbol.iterator]: function () {
      return this
    },
    next (reset) {
      const value = id
      if (reset) {
        id = startingAt
      } else if (id === endingAt) {
        if (startOverWhenAtEnd) {
          id = startingAt
        }
      } else {
        id++
      }
      return {
        value,
        done: value === endingAt && !startOverWhenAtEnd
      }
    }
  }
}

export const makeIntegerSequence = (startingAt = 0, endingAt = Number.MAX_SAFE_INTEGER, startOverWhenAtEnd = false) => {
  const idSequence = integerIterator(startingAt, endingAt, startOverWhenAtEnd)
  return () => {
    const next = idSequence.next()
    if (next.done && !startOverWhenAtEnd) {
      throw new Error(`${endingAt === Number.MAX_SAFE_INTEGER ? 'Number.MAX_SAFE_INTEGER' : endingAt} reached!`)
    }
    return next.value
  }
}

export default makeIntegerSequence
