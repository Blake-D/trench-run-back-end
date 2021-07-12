const express = require('express')
const app = express()
const axios = require('axios')

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    axios.get('https://swgoh.gg/api/ships')
    .then(response => res.send(response.data))
})

app.listen(8000)