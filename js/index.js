let req = new Request(`../data/name.json`)

fetch(req)
  .then(res => res.json())
  .then(data => {
    console.log(typeof data)
    document.getElementById(`name`).innerText = data.two
  })
  .catch(err => console.error(err))
