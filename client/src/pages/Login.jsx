import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = () => {
    if (!email || !password) {
      console.log('All fields are required')
      return
    }
    console.log(formData)
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
