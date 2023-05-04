export default function SignUp() {
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
          <form>
            <label>Your Full Name</label>
            <input type="text" />
            <label>Profile Picture</label>
            <input type="text" placeholder="http://.." />
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button type="button" className="btn btn-success">
              Sign Up
            </button>
            <span>
              Already have an account? <a href="login.html">Login</a>{' '}
            </span>
          </form>
        </div>
      </div>
    </>
  )
}
