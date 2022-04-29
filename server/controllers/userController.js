const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @desc        Register user
// @route       POST /api/users
// @params      {name: string, email: string, password: string}
// @url-param   -
// @access      public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('All fields are required')
  }

  // check if user exits
  const userExists = await User.findOne({email})

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({name, email, password: hashedPassword})

  if (user) {
    res.status(201).json({_id: user.id, name: user.name, email: user.email})
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc        Authenticate user
// @route       POST /api/users/login
// @params      {email: string, password: string}
// @url-param   -
// @access      public
const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  if (!email || !password) {
    res.status(400)
    throw new Error('All fields are required')
  }

  // check if user exits
  const user = await User.findOne({email})

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({_id: user.id, name: user.name, email: user.email})
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

  res.status(200).json({message: 'user logged in', data: req.body})
})

module.exports = {registerUser, loginUser}
