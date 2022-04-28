// @desc        Get goals
// @route       GET /api/goals
// @params      -
// @url-param   -
// @access      public
const getGoals = (req, res) => {
  res.status(200).json({message: 'Get goals'})
}

// @desc        Add goal
// @route       POST /api/goals
// @params      {name: string}
// @url-param   -
// @access      public
const setGoal = (req, res) => {
  res.status(200).json({message: 'Create goal'})
}

// @desc        Update goal
// @route       PUT /api/goals
// @params      {name: string}
// @url-param   number
// @access      public
const updateGoal = (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc        Delete goal
// @route       DELETE /api/goals
// @params      -
// @url-param   number
// @access      public
const deleteGoal = (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}
