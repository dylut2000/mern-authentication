import axios from 'axios'

const API_URL = 'http://localhost:4000/api/goals/'

// create goals
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)
  return response.data
}

// get goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

const goalService = {
  createGoal,
  getGoals,
}

export default goalService
