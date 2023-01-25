import {Router} from 'express'

const router = Router()

/** POST */

router.route('/register').post((req, res) => res.json('register route')) // register user
router.route('/registerMail').post() // send the email
router.route('/authentication').post() // authenticate user
router.route('/login').post() // login in the app

/** GET */

router.route('/user/:username').get() // get user with username
router.route('/generateOTP').get() // generate random OTP
router.route('/verifyOTP').get() // verify generated OTP
router.route('/createResetSession').get() // reset

/** PUT */

router.route('/updateUser').put() // update user profile
router.route('/resetPassword').put() // reset password

/** export router */

export default router
