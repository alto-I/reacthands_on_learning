const insideFn = (logger) => {
  logger('hey hey hey')
}

insideFn((message) => console.log(message))
