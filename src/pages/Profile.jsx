import Nav from '../components/Nav'
import Listings from '../components/Listings'

export default function Profile() {
  let user = {
    name: '',
    email: '',
    avatar: '',
  }

  function sendForm(e) {
    e.preventDefault()
    user = {
      name: e.target.name.value,
      email: e.target.email.value,
      avatar: e.target.avatar.value,
    }
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row cols-2">
          <div className="col col-3">
            <h5>Profile</h5>
            <form onSubmit={(e) => sendForm(e)}>
              <label>Name</label>
              <input name="name" type="text" className="form-control" />
              <label>Email</label>
              <input name="email" type="email" className="form-control" />
              <label>Profile Picture</label>
              <img src="" />
              <input name="avatar" type="text" className="form-control" />
              <button className="btn btn-success">Save Changes</button>
            </form>
          </div>
          <Listings />
        </div>
      </div>
    </>
  )
}
