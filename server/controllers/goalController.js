const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc        Get goals
// @route       GET /api/goals
// @params      -
// @url-param   -
// @access      private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({user: req.user.id})
  res.status(200).json(goals)
})

// @desc        Add goal
// @route       POST /api/goals
// @params      {text: string}
// @url-param   -
// @access      private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add the text field')
  }

  const goal = await Goal.create({text: req.body.text, user: req.user.id})

  res.status(201).json(goal)
})

// @desc        Update goal
// @route       PUT /api/goals
// @params      {text: string}
// @url-param   number
// @access      private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = Goal.findById(req.params.id)

  if (!goal) {
    req.status(400)
    throw new Error('Goal not found')
  }

  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add the text field')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    {text: req.body.text},
    {new: true}
  )

  res.status(200).json(updatedGoal)
})

// @desc        Delete goal
// @route       DELETE /api/goals
// @params      -
// @url-param   number
// @access      private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = Goal.findById(req.params.id)

  if (!goal) {
    req.status(400)
    throw new Error('Goal not found')
  }

  await goal.remove()

  res.status(200).json({id: req.params.id})
})

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}
