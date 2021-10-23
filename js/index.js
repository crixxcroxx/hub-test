let req = new Request(`../data/name.json`)

fetch(req)
  .then(res => { return res.json() })
  .then(data => {
    document.getElementById(`name`).innerText = data.one
  })
  .catch(err => console.error(err))
