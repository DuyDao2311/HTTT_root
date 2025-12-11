const {Router} = require('express')
const {login, register} = require('../controllers/authentication/customer/user.controller')
const {createAdmin} = require('../controllers/authentication/admin/admin.controller')
const router = Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/admin/register').post(createAdmin)

module.exports = router