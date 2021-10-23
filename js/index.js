fetch(`../data/name.json`)
  .then(res => res.json())
  .then(data => {
    console.log(typeof data)
    document.getElementById(`name`).innerText = data.one
  })
