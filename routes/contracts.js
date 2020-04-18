const express = require('express')
const router = express.Router()
const contractsController = require('../controller/contracts')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')

// router.get('/list', function (req, res, next) {
//   contractsController.getAllcontracts().then(data => {
//     res.json(data)
//   })
// })

router.get('/list', async function (req, res, next) {
  try {
    let result = await contractsController.getAllcontracts()
    res.json(result)
  } catch (e) {
    console.log('e', e)
  }
})





router.post('/addContract', function (req, res) {
  const params = req.body
  contractsController.addContract(params).then(data => {
    if (data.affectedRows) {
      res.json(new SuccessModel('success'))
    } else {
      res.json(new ErrorModel('fail'))
    }
  })
})

router.put('/editContract', function (req, res) {
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

router.delete('/deleteContract', function (req, res) {
  const { id } = req.query
  contractsController.deleteContract(id).then(data => {
    if (data.affectedRows) {
      res.json(new SuccessModel('success'))
    } else {
      res.json(new ErrorModel('fail'))
    }
  })
})

router.get('/limitation', function (req, res) {
  contractsController.getContractLimitation().then(data => {
    console.log('data', data)
    res.json(data[0])
  }).catch((err) => {
    console.log('err', err)
  })
})

router.put('/limitation', function (req, res) {
  const { limitation } = req.body
  contractsController.updateContractLimitation(limitation).then(data => {
    if (data.affectedRows) {
      res.json(new SuccessModel('success'))
    } else {
      res.json(new ErrorModel('fail'))
    }
  })
})


module.exports = router;