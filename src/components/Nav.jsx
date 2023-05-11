import { Link } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true
import { useState } from 'react'


export default function Nav() {
  const [login, setLogin] = useState(true)
  async function logOut() {
    let logout = await axios.get('http://localhost:4000/logout')
    setLogin(false)
  } 
  return (
    <div className="container">
      <div className="row row-cols-3">
        <div className="col text-left">
          <img src="images/logo-airbnb.png" />
        </div>
        <div className="col"></div>
        { login ?
          <div className="col text-right">
            <button  className="btn btn-outline-dark">
              <Link to="/profile">Tony Russo</Link>
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
