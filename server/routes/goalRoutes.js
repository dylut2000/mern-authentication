const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')
const {protect} = require('../middlewares/authMiddleware')

router.get('/', protect, getGoals).post('/', protect, setGoal)
router.put('/:id', protect, updateGoal).delete('/:id', protect, deleteGoal)

module.exports = router
