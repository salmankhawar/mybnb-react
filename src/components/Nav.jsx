import { Link } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true
import { useState, useEffect } from 'react'
const API_URL = process.env.REACT_APP_API_URL

export default function Nav() {
  const [login, setLogin] = useState()
  const [user, setUser] = useState({})
  async function getUser() {
    let userData = await axios.get(`${API_URL}/profile`)
    if (userData.data._id) { 
      setUser(userData.data) 
      setLogin(true) 
    } else { 
      setLogin(false)}
  }
  async function logOut() {
    let logout = await axios.get(`${API_URL}/logout`)
    setLogin(false)
  }
  useEffect(() => {getUser()}, [])
 

  return (
    <div className="container">
      <div className="row row-cols-3">
        <div className="col text-left">
          
          <Link to="/"><img src="/images/logo-mybnb.png" /></Link>
        </div>
        <div className="col"></div>
        { login ?
          <div className="col text-right">
            <button  className="btn btn-outline-dark">
              <Link to="/profile">{user.name}</Link>
            </button>
            <button type='button' onClick ={logOut} className="btn btn-outline-dark">
            Logout
            </button>
          </div> :
          <div className="col text-right">
            <button  className="btn btn-outline-dark"><Link to="/login">Login</Link></button>
            <button  className="btn btn-outline-dark"><Link to="/signup">Sign Up</Link></button>
          </div>}
      </div>
    </div>
  )
}
