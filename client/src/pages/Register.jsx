import {useEffect, useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  )
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const {name, email, password, confirmPassword} = formData

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
    if (!name || !email || !password || !confirmPassword) {
      toast.error('All fields are required')
      return
    }
    if (password !== confirmPassword) {
      toast.error('Password did not match')
      return
    }

    dispatch(register({name, email, password}))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="auth">
      <div className="auth__card">
        <FaUser className="logo" />
        <h2>Create an account</h2>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={onChange}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChange}
        />
        <button className="btn btn-primary" onClick={onSubmit}>
          Register
        </button>
        <p>
          Do you have an account? <Link to={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
