import  axios  from 'axios'
axios.defaults.withCredentials = true
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const API_URL = process.env.REACT_APP_API_URL



export default function Login() {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)
  const [errorMessage, setError] = useState('')
  async function sendForm(e) {
    
    e.preventDefault()
    let loginUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    try {
      if (loginUser.email && loginUser.password) {
        let post = await axios.post(`${API_URL}/login`, loginUser)  
        post.data == e.target.email.value ? navigate('/') : setLogin(true) 
        setError(post.data)
        
      } 
      
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <>
      <img src="/images/thailand.jpg" className="img-fluid" alt="..." />
      <div className="" />
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{ width: '15rem' }}
      >
        <img src="images/logo-mybnb.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <form onSubmit={(e) => sendForm(e)}>
            <label>Email</label>
            <input name="email" type="text" />
            <label>Password</label>
            <input name="password" type="password" />
            <button className="btn btn-success">Login</button>
          </form>
          {login && <span className="text-danger">{errorMessage}</span>}
          <div>
            <span>
              New to Airbnb <Link to="/signup">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}