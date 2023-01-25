import {Router} from 'express'

const router = Router()

/** import all controllers */

import * as controller from '../controllers/appController.js'

/** POST */

router.route('/register').post(controller.register) // register user
router.route('/registerMail').post((req, res) => res.end()) // send the email
router.route('/authentication').post((req, res) => res.end()) // authenticate user
router.route('/login').post(controller.login) // login in the app

/** GET */

router.route('/user/:username').get(controller.getUser) // get user with username
router.route('/generateOTP').get(controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset

/** PUT */

router.route('/updateUser').put(controller.updateUser) // update user profile
router.route('/resetPassword').put(controller.resetPassword) // reset password

/** export router */

export default router
