let list = [{ title: 'Rad Red' }, { title: 'Lawx' }, { title: 'Party Pink' }]

console.log(...list)
const addColor = (title, list) => [...list, { title }]

console.log(addColor('Green!!', list))
console.log(list)
