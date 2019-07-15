// Instead of setting this up with Babel and overcomplicating it, it is written here with ES6
// and was copied & pasted into https://babeljs.io/en/repl to convert it to ES5 for consumption as a library.

export const integerSequence = (startingAt = 0, startOverWhenMaxIntegerIsReached = true) => {
  let id = startingAt
  return {
    next () {
      if (id === Number.MAX_SAFE_INTEGER) {
        if (startOverWhenMaxIntegerIsReached) {
          id = startingAt
        } else {
          throw new Error('Number.MAX_SAFE_INTEGER reached!')
        }
      }
      return id++
    }
  }
}

export const makeIntegerSequence = (startingAt = 0) => {
  const idSequence = integerSequence(startingAt)
  return () => {
    return idSequence.next()
  }
}

export default makeIntegerSequence
