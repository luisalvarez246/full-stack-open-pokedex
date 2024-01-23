const express = require('express')
const app = express()
let	counter = 0

const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('SPECIAL BUMB CANON!! done')
  console.log(counter)
})

app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

app.get('/ping', (req, res) => {
  if (counter % 2 === 0)
  {
    counter++
    res.status(200).send('ok')
  }
  else
    res.status(500).send('Server down')
})

app.listen(PORT, () => {
  console.log('server started on port 8080')
})
