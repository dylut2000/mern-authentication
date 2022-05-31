import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import {getGoals, reset} from '../features/goals/goalSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    // if (isError) {
    //   console.log(message)
    // }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="dash">
      <h1>Welcome {user && user.name}</h1>
      <br />
      <h2>Goals Dashboard</h2>

      <GoalForm />
    </div>
  )
}

export default Dashboard
