const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')
const { authorize } = require('../middleware/authMiddleware')

router.get('/', userCtrl.show)

// delete
router.delete('/:id', authorize, userCtrl.delete)

// update
router.put('/:id', authorize, userCtrl.update)

// index
router.get('/all', userCtrl.index)


module.exports = router