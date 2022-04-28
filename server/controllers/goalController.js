const asyncHandler = require('express-async-handler')

// @desc        Get goals
// @route       GET /api/goals
// @params      -
// @url-param   -
// @access      public
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get goals'})
})

// @desc        Add goal
// @route       POST /api/goals
// @params      {name: string}
// @url-param   -
// @access      public
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add the name field')
  }
  res.status(200).json({message: 'Create goal', data: req.body})
})

// @desc        Update goal
// @route       PUT /api/goals
// @params      {name: string}
// @url-param   number
// @access      public
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc        Delete goal
// @route       DELETE /api/goals
// @params      -
// @url-param   number
// @access      public
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}
