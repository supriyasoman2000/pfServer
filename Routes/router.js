const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userContoller')

//register
router.post('/user/register',userController.register)


//export
module.exports = router