// imports
require('dotenv').config()
const express = require('express')
const redis = require('redis')
const client = redis.createClient()
const app = express()
const bodyParser = require('body-parser')
// some constants
const REDIS_DB = process.env.REDIS_DB ? process.env.REDIS_DB : 1
const LAST_RECORDS = process.env.LAST_RECORDS ? process.env.LAST_RECORDS : 20
const MAIN_STORAGE_KEY = 'catfood'
// and functions
const retrieveLastRecords = function(count_records=LAST_RECORDS) {
    return client.lrange(MAIN_STORAGE_KEY, 0, count_records)
}
const getLastCan = function() {
    return JSON.parse(retrieveLastRecords(0))
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('dist'))

app.get(
    '/api/food/last/',
    (req, res) => {
        const data = retrieveLastRecords()
        return res.json(data ? data : {})
    }
)

app.get(
    '/api/food/next/',
    (req, res) => {
        return res.json(getLastCan())
    }
)

app.post(
    '/api/food/add/',
    (req, res) => {
        client.lpush(MAIN_STORAGE_KEY, JSON.stringify({
            status: req.body.status,
            date: new Date(),
            id: getLastCan().id,
        }));
        return res.json({status: true})
    }
)

app.listen(
    8080, () => {
        client.select(REDIS_DB)
        console.log('Listening on port 8080!')
    }
)
