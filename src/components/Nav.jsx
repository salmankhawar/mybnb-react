import { Link } from 'react-router-dom'
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
            <Link to="/profile">Tony Russo</Link>
          </button>
          <button type="button" className="btn btn-outline-dark">
            Logout
          </button>
        </div>
        {/* <div>
    <button type="button" class="btn btn-outline-dark"><Link to="/login">Login</Link></button>
    <button type="button" class="btn btn-outline-dark"><Link to="/signup">Sign Up</Link></button
  </div> */}
      </div>
    </div>
  )
}
