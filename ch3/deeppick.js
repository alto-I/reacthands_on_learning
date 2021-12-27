const dan = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Dan',
        last: 'Deacon',
      },
    },
  },
}

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split('.')
  console.log(first,remaining)
  return remaining.length
    ? deepPick(remaining.join('.'), object[first])
    : object[first]
}

console.log(deepPick('data.info.fullname.last', dan))
