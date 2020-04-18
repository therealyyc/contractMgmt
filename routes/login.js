const express = require('express')
const router = express.Router()
const contractsController = require('../controller/login')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')

router.post('/validateUser', function (req, res) {
  const { username, password } = req.body
  contractsController.validateUser({ username, password }).then(data => {
    console.log('data', data, data.length)
    if (data.length === 1) {
      res.json({
        ...data[0],
        "errno": 0
      })
    } else {
      res.json(new ErrorModel('fail'))
    }
  })
})


module.exports = router;