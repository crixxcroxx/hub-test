fetch(`../data/name.json`)
  .then(res => res.json())
  .then(data => {
    document.getElementById(`name`).innerText = data.one
  })
