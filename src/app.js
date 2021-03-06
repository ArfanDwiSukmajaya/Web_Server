const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
  res.send({
    forecast: 'it is snowing',
    location: 'jambi'
  })
})



app.listen(3000, () => {
  console.log('Server is up on 3000');
})