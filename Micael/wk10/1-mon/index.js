const express = require('express')
const app = express()
const PORT = 7777
const controller = require('./controller.js')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', controller.home)
app.get('/:name', controller.home)


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
