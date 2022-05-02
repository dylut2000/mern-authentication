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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      console.log('All fields are required')
      return
    }
    if (password !== confirmPassword) {
      console.log('Password did not match')
      return
    }
    console.log(formData)
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
