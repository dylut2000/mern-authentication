import {useEffect, useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = () => {
    if (!email || !password) {
      toast.error('All fields are required')
      return
    }

    dispatch(login({email, password}))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="auth">
      <div className="auth__card">
        <FaSignInAlt className="logo" />
        <h2>Sign in</h2>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onChange}
        />
        <button className="btn btn-primary" onClick={onSubmit}>
          Login
        </button>
        <p>
          Don't you have an account? <Link to={'/register'}>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
