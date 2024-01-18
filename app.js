const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('SPECIAL BUMB CANON!! PR Request, deploy just from main')
})

app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

app.listen(PORT, () => {
  console.log('server started on port 8080')
})
