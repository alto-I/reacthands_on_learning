fetch('https://api.randomuser.me/?nat=US&results=1')
  .then((res) => console.log(res.json()))
  .then((json) => json.results)
  .then(console.log())
