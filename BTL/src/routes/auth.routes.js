const {Router} = require('express')
const {login, register} = require('../controllers/authentication/customer/user.controller')

const router = Router()

router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router