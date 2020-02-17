const express = require('express')
const router = express.Router()
const contractsController = require('../service/contracts')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')

router.get('/list', function (req, res, next) {
  contractsController.getAllcontracts().then(data => {
    res.json(data)
  })
})

router.post('/contract', function (req, res) {
  const params = req.body
  contractsController.addContract(params).then(data => {
    if (data.affectedRows) {
      res.json(new SuccessModel('success'))
    } else {
      res.json(new ErrorModel('fail'))
    }
  })
})

router.put('/contract', function (req, res) {
  const params = req.body
  const { id } = req.query
  contractsController.editContract(id, params).then(data => {
    if (data.affectedRows) {
      res.json(new SuccessModel('success'))
    } else {
      res.json(new ErrorModel('fail'))
    }
  })
})

router.delete('/contract', function (req, res) {
  const { id } = req.query
  contractsController.deleteContract(id).then(data => {
    if (data.affectedRows) {
      res.json(new SuccessModel('success'))
    } else {
      res.json(new ErrorModel('fail'))
    }
  })
})


module.exports = router;