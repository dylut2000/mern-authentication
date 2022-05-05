import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import GoalForm from '../components/GoalForm'

const Dashboard = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div className="dash">
      <h1>Welcome {user && user.name}</h1>
      <br />
      <h2>Goals Dashboard</h2>
      <br />
      <GoalForm />
    </div>
  )
}

export default Dashboard
