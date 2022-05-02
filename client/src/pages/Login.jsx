import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  return (
    <div className="auth">
      <div className="auth__card">
        <FaSignInAlt className="logo" />
        <h2>Sign in</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn btn-primary">Login</button>
        <p>
          Don't you have an account? <Link to={'/register'}>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
