const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc        Register user
// @route       POST /api/users
// @params      {name: string, email: string, password: string}
// @url-param   -
// @access      public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'user registered', data: req.body})
})

// @desc        Authenticate user
// @route       POST /api/users/login
// @params      {email: string, password: string}
// @url-param   -
// @access      public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'user logged in', data: req.body})
})

module.exports = {registerUser, loginUser}
