import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../model/User.model.js'

/**
 * register user
 * POST: http://localhost:8080/api/register
 * @param {
 *  "username": "hardy",
 *  "email": "hardy@example.com",
 *  "password": "123456",
 *  "firstname": "hardy",
 *  "lastname": "hardy",
 *  "mobile": "1234567890",
 *  "address": "24 example, example, example",
 *  "profile": "",
 * }
 */

export async function register(req, res) {
  const {username, password, profile, email} = req.body

  try {
    // check if username exist

    const existUsername = await UserModel.findOne({username})

    if (existUsername)
      return res.status(500).json({error: 'Username or email already exist'})

    // check if email exist

    const existEmail = await UserModel.findOne({email})

    if (existEmail)
      return res.status(400).json({error: 'Username or email already exist'})

    // hash password

    const hashedPassword = await bcrypt.hash(password, 10)

    // create user

    const user = UserModel({
      username,
      password: hashedPassword,
      profile: profile || '',
      email,
    })

    await user.save()

    return res.status(201).json({msg: 'successfull registered'})
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * login user
 * POST: http://localhost:8080/api/login
 * @param {
 *  "username": "hardy",
 *  "password": "123456",
 * }
 */

export async function login(req, res) {
  const {username, password} = req.body

  try {
    // check if username exist

    const existUser = await UserModel.findOne({username})

    if (!existUser) return res.status(404).json({error: 'Username not found'})

    // compare password

    const passwordCheck = await bcrypt.compare(password, existUser.password)

    if (!passwordCheck)
      return res.status(400).json({error: 'Dont have password'})

    // create a jwt

    const token = await jwt.sign(
      {userId: existUser._id, username: existUser.username},
      process.env.JWT_SECRET,
      {expiresIn: '24h'}
    )

    return res
      .status(200)
      .json({msg: 'Login successfully', username: existUser.username, token})
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * get user by username
 * GET: http://localhost:8080/api/user/username
 */

export async function getUser(req, res) {
  res.json('get user route')
}

/**
 * update user
 * PUT: http://localhost:8080/api/updateuser
 * @param: {
 *  "id": "user-id",
 *  "firstname": "example"
 *  "address": "example",
 *  "profile": ""
 * }
 */

export async function updateUser(req, res) {
  res.json('update user route')
}

/**
 * generate random OTP
 * GET: http://localhost:8080/api/generateOTP
 */

export async function generateOTP(req, res) {
  res.json('generate OTP route')
}

/**
 * verify OTP
 * GET: http://localhost:8080/api/verifyOTP
 */

export async function verifyOTP(req, res) {
  res.json('verify OTP route')
}

/**
 * successfully redirect user when OTP is valid
 * GET: http://localhost:8080/api/createResetSession
 */

export async function createResetSession(req, res) {
  res.json('verify OTP route')
}

/**
 * update password when have a valid session
 * PUT: http://localhost:8080/api/resetPassword
 */

export async function resetPassword(req, res) {
  res.json('reset password route')
}
