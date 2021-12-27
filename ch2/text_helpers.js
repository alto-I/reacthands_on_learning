export const print = (message) => log(message, data())

export const log = (message, timestamp) => {
  console.log(`${timestamp.toString()}: ${message}`)
}

const data = () => new Date()
