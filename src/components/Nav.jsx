import { Link } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true
import { useState, useEffect } from 'react'


export default function Nav() {
  const [login, setLogin] = useState()
  const [user, setUser] = useState({})
  async function getUser() {
    let userData = await axios.get('http://localhost:4000/profile')
    if (userData.data._id) { 
      setUser(userData.data) 
      setLogin(true) 
    } else { 
      setLogin(false)}
    console.log(userData.data._id)
  }
  async function logOut() {
    let logout = await axios.get('http://localhost:4000/logout')
    setLogin(false)
  }
  useEffect(() => {getUser()}, [])
 

  return (
    <div className="container">
      <div className="row row-cols-3">
        <div className="col text-left">
          <img src="images/logo-mybnb.png" />
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
