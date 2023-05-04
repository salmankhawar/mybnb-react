export default function Nav() {
  return (
    <div className="container">
      <div className="row row-cols-3">
        <div className="col text-left">
          <img src="images/logo-airbnb.png" />
        </div>
        <div className="col"></div>
        <div className="col text-right">
          <button type="button" className="btn btn-outline-dark">
            Tony Russo
          </button>
          <button type="button" className="btn btn-outline-dark">
            Logout
          </button>
        </div>
        {/* <div>
    <button type="button" class="btn btn-outline-dark"><a href="login.html>Login</a></button>
    <button type="button" class="btn btn-outline-dark"><a href="signup.html">Signup!</a></button
  </div> */}
      </div>
    </div>
  )
}
