import axios from 'axios'

const API_URL = 'http://localhost:4000/api/users'

// register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// logout
const logout = async () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
}

export default authService
