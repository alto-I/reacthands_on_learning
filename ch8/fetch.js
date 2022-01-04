fetch(`https://api.github.com/users/alto-I`)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(console.error)
