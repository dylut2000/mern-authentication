import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {name, email, password, confirmPassword} = formData

  return (
    <div className="auth">
      <div className="auth__card">
        <FaUser className="logo" />
        <h2>Create an account</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="btn btn-primary">Register</button>
        <p>
          Do you have an account? <Link to={'login'}>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
