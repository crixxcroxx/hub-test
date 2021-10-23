let opt = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'cors',
  cache: 'default'
};

let req = new Request(`../data/name.json`, opt)

fetch(req)
  .then(res => { return res.json() })
  .then(data => {
    document.getElementById(`name`).innerText = data.students.two
  })
  .catch(err => console.error(err))
