const express = require('express')
const os = require('os')
const redis = require('redis')
require('dotenv').config()

const client = redis.createClient()
const app = express()
app.use(express.static('dist'))


app.get(
    '/api/getUsername/',
    (req, res) => {
        return res.send({ username: os.userInfo().username })
    }
)

app.get(
    '/api/food/',
    (req, res) => {
        client.set('lol', 1)
        return res.json({a: 1})
    }
)

app.listen(
    8080, () => {
        client.select(process.env.REDIS_DB ? process.env.REDIS_DB : 1)
        console.log('Listening on port 8080!')
    }
)
