const express = require('express')
const redis = require('redis')
require('dotenv').config()

const client = redis.createClient()
const app = express()
app.use(express.static('dist'))


app.get(
    '/api/food/last/',
    (req, res) => {
        return res.json([1, 2, 3, 4, 5, 10, 15])
    }
)

app.listen(
    8080, () => {
        client.select(process.env.REDIS_DB ? process.env.REDIS_DB : 1)
        console.log('Listening on port 8080!')
    }
)
