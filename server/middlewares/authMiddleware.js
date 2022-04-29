const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(' ')[1]

      // verify token
      const decoded = await jwt.verify(
        token,
        process.env.JWT_SECRET || 'HardyLutulaDylut2000'
      )

      // get user from the token
      req.user = User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(colors.red(error))
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = {protect}
