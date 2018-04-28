const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hola prro!'))

// Get all users
app.get('/users', (req, res) => {
  res.send('You are in users section')
})

// Get one user
app.get('/users/:userId', (req, res) => {
  res.send('This is the profile for user: ' + req.params.userId)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
