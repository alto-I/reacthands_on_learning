const countdown = (value, fn) => {
  fn(value)
  return value > 0 ? countdown(value - 1, fn) : value
}

countdown(30, value => console.log(value))
