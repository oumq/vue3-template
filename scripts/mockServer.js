const express = require('express')
const fs = require('fs')
const path = require('path')
const mockPath = path.join(__dirname + '/../mock')

const app = express()

const router = express.Router()

fs.readdirSync(mockPath).forEach(file => {
  const module = require('../mock/' + file)
  const keys = Object.keys(module)
  keys.forEach(key => {
    if (key.indexOf('GET ') !== -1) {
      router.get(key.split(' ')[1], function(req, res) {
        res.json(module[key])
      })
    } else if (key.indexOf('POST ') !== -1) {
      router.post(key.split(' ')[1], function(req, res) {
        res.json(module[key])
      })
    }
  })
})

//解决跨域问题
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/', router)

app.listen('3000', () => {
  console.log('监听端口 3000')
})
