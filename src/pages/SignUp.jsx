import axios from 'axios'
axios.defaults.withCredentials = true
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const API_URL = process.env.REACT_APP_API_URL


export default function SignUp() {
  const [user, setUser] = useState(false)
  const navigate = useNavigate()
  async function sendForm(e) {
    
    e.preventDefault()
    try {
      let post = await axios.post(`${API_URL}/signup`, {
        name: e.target.name.value,
        avatar: e.target.avatar.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }) 
      post.data == 'User with this email already exists' ? setUser(true) : navigate('/')
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <>
      <img src="images/thailand.jpg" className="img-fluid" alt="..." />
      <div className="" />
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{ width: '15rem' }}
      >
        <Link to="/"><img src="/images/logo-mybnb.png" className="card-img-top" alt="..." /></Link>
        <div className="card-body">
          <form onSubmit={(e) => sendForm(e)}>
            <label>Your Full Name</label>
            <input name="name" type="text" />
            <label>Profile Picture</label>
            <input name="avatar" type="text" placeholder="http://.." />
            <label>Email</label>
            <input name="email" type="text" />
            <label>Password</label>
            <input name="password" type="password" />
            <button className="btn btn-success">Sign Up</button>
          </form>
          {user && <span className="text-danger">Email already exists</span>}
          <div>
              Already have an account? <Link to="/login">Login</Link>{' '}
          </div>
        </div>
      </div>
    </>
  )
}
