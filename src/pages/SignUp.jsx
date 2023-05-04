import { Link } from 'react-router-dom'
export default function SignUp() {
  function sendForm(e) {
    e.preventDefault()
    let form = {
      fullName: e.target.fullName.value,
      profilePicture: e.target.profilePicture.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
  }
  return (
    <>
      <img src="images/thailand.jpg" className="img-fluid" alt="..." />
      <div className="" />
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{ width: '18rem' }}
      >
        <img src="images/logo-airbnb.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <form onSubmit={(e) => sendForm(e)}>
            <label>Your Full Name</label>
            <input name="fullName" type="text" />
            <label>Profile Picture</label>
            <input name="profilePicture" type="text" placeholder="http://.." />
            <label>Email</label>
            <input name="email" type="text" />
            <label>Password</label>
            <input name="password" type="password" />
            <button className="btn btn-success">Sign Up</button>
            <span>
              Already have an account? <Link to="/login">Login</Link>{' '}
            </span>
          </form>
        </div>
      </div>
    </>
  )
}
