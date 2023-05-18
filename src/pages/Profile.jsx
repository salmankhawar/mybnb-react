import Nav from '../components/Nav'
import Listings from '../components/Listings'
import axios from 'axios'
axios.defaults.withCredentials = true
import { useEffect, useState } from 'react'

export default function Profile() {
  const [userInfo, setUser] = useState({})
  async function getUser() {
    let userData = await axios.get('http://localhost:4000/profile')
    setUser(userData.data)
  }

  async function sendForm(e) {
    e.preventDefault()
    let user = {
      name: e.target.name.value,
      email: e.target.email.value,
      avatar: e.target.avatar.value,
    }
    let editUserData = await axios.patch('http://localhost:4000/profile', user)
    setUser(editUserData.data)
  }
  useEffect(() => {getUser()}, [])
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row cols-2">
          <div className="col col-3">
            <h5>Profile</h5>
            <form onSubmit={(e) => sendForm(e)}>
              <label>Name</label>
              <input name="name" type="text" className="form-control" defaultValue={userInfo.name} />
              <label>Email</label>
              <input name="email" type="email" className="form-control" defaultValue={userInfo.email} />
              <label>Profile Picture</label>
              <img src={userInfo.avatar} />
              <input name="avatar" type="text" className="form-control" defaultValue={userInfo.avatar} />
              <button className="btn btn-success">Save Changes</button>
            </form>
          </div>
          <Listings userInfo={userInfo} />
        </div>
      </div>
    </>
  )
}
