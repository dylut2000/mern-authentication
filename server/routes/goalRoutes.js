const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

router.get('/', getGoals).post('/', setGoal)
router.put('/:id', updateGoal).delete('/:id', deleteGoal)

module.exports = router
