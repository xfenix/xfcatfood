// imports
require('dotenv').config()
const express = require('express')
const redis = require('redis')
const client = redis.createClient()
const app = express()
// some constants
const REDIS_DB = process.env.REDIS_DB ? process.env.REDIS_DB : 1
const LAST_RECORDS = process.env.LAST_RECORDS ? process.env.LAST_RECORDS : 20
const MAIN_STORAGE_KEY = 'catfood'
// and functions
const retrieveLastRecords = function(count_records=LAST_RECORDS) {
    return client.lrange(MAIN_STORAGE_KEY, 0, count_records)
}

app.use(express.static('dist'))

app.get(
    '/api/food/last/',
    (req, res) => {
        return res.json(retrieveLastRecords())
    }
)

app.get(
    '/api/food/next/',
    (req, res) => {
        const lastRecord = retrieveLastRecords(0)
        return res.json(lastRecord)
    }
)

app.get(
    '/api/food/add/',
    (req, res) => {
        return redis.json('Submited')
    }
)

app.listen(
    8080, () => {
        client.select(REDIS_DB)
        console.log('Listening on port 8080!')
    }
)
