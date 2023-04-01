const express = require('express')

const router = express.Router()

const craftControl = require('../controllers/craftController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')

// seed 
router.get('/seed', craftControl.seed)

// index
router.get('/', craftControl.index)

// delete
router.delete('/:id', authorize, confirmUserAccess, craftControl.delete)

// update
router.put('/:id', authorize, confirmUserAccess, craftControl.update)

// create
router.post('/', authorize, craftControl.create)

// show
router.get('/:id', craftControl.show)

module.exports = router